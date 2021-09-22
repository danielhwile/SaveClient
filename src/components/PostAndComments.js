import { gql, useQuery, useMutation } from '@apollo/client';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { UserContext } from "../UserContext";
import { useContext,useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
// local imports
import Post from './Post';
import Comment from './Comment';
import '../static/PostAndComments.css'

// GraphQL mutation string for adding new comments
const POST_COMMENT = gql`
    mutation postComment($post_id:String!,$creator:String!,$content:String!) {
    postComment(post_id:$post_id,creator:$creator,content:$content) {
        createdAt
        content
        creator
    }
}
`;

// GraphQL mutation string getting the post and it's comments.
const GET_POSTS = gql`
    query getPosts($username:String!,$_id:ID!) {
        getPosts(_id:$_id) {
            _id
            title
            description
            creator
            createdAt
            voteSum
            comments {
              content
              creator
              createdAt
            }
            userVote(username:$username) {
              vote
            }
        }
    }
`;

const PostAndComments = () => {
    // component for the comment section page of an individual post

    // putting the comment list in state so that an added comment refreshes state and loads our new comment
    const [commentList, setCommentList] = useState([]);

    // setting up form state
    const [newComment, setNewComment] = useState("");

    const handleChange = (e, funct) => {
        // handles form changes
        funct(e.target.value)
    }
    let { id } = useParams(); // gets post id from link header
    const viewerUser = useContext(UserContext); // gets logged in user to access person vote on the post

    const reqParams = { username:viewerUser.username,_id:id }; // preparing our getPost request params

    const { loading, error, data } = useQuery(GET_POSTS, {
        //getPost Request using the query above
        variables: reqParams, onCompleted: data => {
            setCommentList(data.getPosts[0].comments) // sets state when the request is completed
        }});
    
    const [postComment] = useMutation(POST_COMMENT, 
        // mutation function to send our new comment request
        { variables: {post_id:id,creator:viewerUser.username,content:newComment}, 
        onCompleted: commentData => {
        setCommentList([commentData.postComment, ...commentList]); // Adds our new comment to the top of the comment list.
    }});

    const submit = (e) => {
        // newComment form submit action
        e.preventDefault();
        postComment();
        setNewComment("");
    }

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div className="commentPageContainer">
            <Post postDetails={data.getPosts[0]} isCommentSection={true}/> {/*Loading our original post*/}
            <form className="newCommentForm" id="newCommentForm" onSubmit={submit}>
                <label className="screenHiddenLabel" htmlFor="newComment">Description*</label>
                <textarea form="newCommentForm" rows="6" className="commentInput" name="newComment" placeholder="Create New Comment" value={newComment} onChange={(e) =>handleChange(e, setNewComment)} required/>
                <button className="submit" form="newCommentForm" type="submit" >Post Comment<FaPaperPlane/></button>
            </form>
            <div className="commentsContainer">
                {commentList.map(comment =>(<Comment className="comment" commentDetails={comment}/>))} {/*Listing off our comments in the comments container*/}
            </div>
        </div>
    )
}

export default PostAndComments