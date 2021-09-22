import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Post from '../Post.js';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import jwt from 'jsonwebtoken';
import { IconContext } from "react-icons";
import { BiMessageDetail } from "react-icons/bi";
import renderer from 'react-test-renderer';

// All of below was needed to mount a component that works with Apollo Client

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/api/graphql',
});

const token = localStorage.getItem('authToken');

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

var user = null;

if (token) {
const tokenDecode = jwt.decode(token)
user = {username:tokenDecode.username};
}
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


// On to testing!

const examplePostProps = {title:"test Title", description:"test Description 401042140",createdAt:1632236399125,creator:"JestTest",_id:"a161",voteSum:"105",userVote:{vote:0}};
describe('Post', () => {
    it('should render in Front Page Mode (No Description)', () => {
      const component = mount(<ApolloProvider client={client}><Post postDetails={examplePostProps}/></ApolloProvider>);
      
      const creatorTag = <p title='Tuesday, September 21, 2021 at 10:59:59 AM EDT'>&#60;1 Hour Ago</p>;
      expect(component.contains(creatorTag)).toEqual(true);

      const descriptionText = "test Description 401042140";
      expect(component.contains(descriptionText)).toEqual(false);
      component.unmount();
    })
    it('should render in Comments Page Mode (With Description)', () => {
        const component = mount(<ApolloProvider client={client}><Post postDetails={examplePostProps} isCommentSection={true}/></ApolloProvider>);
        
        const creatorTag = <p title='Tuesday, September 21, 2021 at 10:59:59 AM EDT'>&#60;1 Hour Ago</p>;
        expect(component.contains(creatorTag)).toEqual(true);
  
        const descriptionText = "test Description 401042140";
        expect(component.contains(descriptionText)).toEqual(true);
        component.unmount();
      })
    it('should match snapShot', () => {
        const snap = renderer.create(<ApolloProvider client={client}><Post postDetails={examplePostProps} isCommentSection={true}/></ApolloProvider>).toJSON();
        expect(snap).toMatchSnapshot();
    })
});