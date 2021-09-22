import { FaPaperPlane,FaUserTie } from 'react-icons/fa'
import { gql, useQuery } from '@apollo/client';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { useContext } from 'react';
// local imports
import { UserContext } from "../UserContext";
import '../static/PostsList.css'
import Post from './Post'
import { UserPhotoSelect, ParseUsernametoInt } from '../utils';

// importing the 5 different user photos. Each user is assigned a consistent photo based on an algorithm to turn usernames into a number 0-4. See More in Utils
import userPhoto0 from '../static/userPhotos/userPhoto0.svg'
import userPhoto1 from '../static/userPhotos/userPhoto1.svg'
import userPhoto2 from '../static/userPhotos/userPhoto2.svg'
import userPhoto3 from '../static/userPhotos/userPhoto3.svg'
import userPhoto4 from '../static/userPhotos/userPhoto4.svg'

// Query gets all posts, if on a user page, it gets all posts by said user. Also Returns viewer's vote history on each post.
const GET_POSTS = gql`
    query getPosts($username:String!,$creator:String) {
        getPosts(creator:$creator) {
            _id
            title
            description
            creator
            createdAt
            voteSum
            userVote(username:$username) {
                vote
            }
        }
    }
`;
const PostsList = (props) => {
    
    // Query Prep // id is for user specific pages
    let { id } = useParams();
    const viewerUser = useContext(UserContext);
    const reqParams = { username:viewerUser.username };
    if (id) {
        reqParams.creator = id; // check if the page has a user id, if yes adds to query.
    }

    const { loading, error, data } = useQuery(GET_POSTS, {
        variables: reqParams,
      });
    // functions for the page.
    const createPostClick = (e) => {
        e.preventDefault();
        window.location.href='/create'
    }
    // finding UserPhoto
    let userPhotoIndex = 0;
    if (id) {
        userPhotoIndex = UserPhotoSelect(ParseUsernametoInt(id))
    };
    const photoArray = [userPhoto0,userPhoto1,userPhoto2,userPhoto3,userPhoto4]
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        
        <div className={(id)&&"userContainer"}>
            <div className="postList">
                {(id) && <div className="postListHeader userProfileHeader">
                    <FaUserTie className="createIcon" />
                    <h4>{id}'s Profile</h4>
                </div>}
                {(!id) && <div className="postListHeader">
                    <FaUserTie className="createIcon" />
                    <input className="createPostInput" type="text" placeHolder={"Create New Issue Post"} onFocus={createPostClick}/>
                    <FaPaperPlane className="createIcon"/>
                </div>}
                {data.getPosts.map(post =>(<Post postDetails={post}/>))}
            </div>
            {(id) && <div className="userTile">
              <img src={photoArray[userPhotoIndex]} alt="Stock User Image lady waters flowers" className="userPhoto" width="300" height="300"/>
              <h2>{id}'s Profile</h2>
                
            </div>}
        </div>
    )
}

export default PostsList
