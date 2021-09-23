// dependency imports
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import jwt from 'jsonwebtoken';
import { HashRouter as Router } from "react-router-dom";
// local imports
import Landing from './components/Landing';
import App from './App';
import './index.css';
import { UserContext } from "./UserContext";


const httpLink = createHttpLink({
  uri: 'https://save-tree.herokuapp.com/api/graphql',
});

const token = localStorage.getItem('authToken');

// fx to set our token in the header.
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

let user = null; // setting user as null.

if (token) { // updating user to match token if a token exists
const tokenDecode = jwt.decode(token)
user = {username:tokenDecode.username};
}


const client = new ApolloClient({ // Starting Apollo Client with Auth token in header and cached memory.
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserContext.Provider value={(user)?user:null}> {/* If a user was found on the token it is applied to the userContext here for children to access*/}
    <Router>
    {token ? <App /> : <Landing/>} {/*If A token was found it goes to the front page, otherwise, we send visitors to the log in / register page*/}
    </Router>
    </UserContext.Provider>
  </ApolloProvider>,
  document.getElementById('root')
);