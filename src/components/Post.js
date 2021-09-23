import { BiMessageDetail, BiEdit, BiTrash} from "react-icons/bi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState, useContext } from 'react';
import { gql, useMutation } from '@apollo/client';
import { UserContext } from "../UserContext";
import { IconContext } from "react-icons";
// local imports
import { timeCalculator, longDateTimeString } from "../utils";
import '../static/Post.css'

// graphQL query/mutation for sending votes
const VOTE_PUT = gql`
    mutation putVote($username: String!, $post_id: String!, $vote: Int!) {
        putVote(username: $username, post_id:$post_id, vote:$vote) {
            vote
        }
    } 
`;
const POST_DELETE = gql`
    mutation deletePost($post_id: String!) {
        deletePost(_id: $post_id) {
            response
        }
    }
`;
const PUT_POST = gql`
    mutation putPost($title: String!, $description: String!, $post_id: String!) {
        putPost(title: $title, description: $description,_id:$post_id) {
         _id
        }
    }
`;

const Post = ({postDetails, isCommentSection}) => {
    // component for individual posts, both at the top of their comments section and on post query pages

    // setting vote states
    const [voteValue, setVoteValue] = useState(postDetails.userVote.vote);
    const [voteSum, setVoteSum] = useState(postDetails.voteSum-postDetails.userVote.vote);

    // sets Edit Mode
    const [isEditMode, setIsEditMode] = useState(false);

    // sets edit inputs state
    const [editTitle, setEditTitle] = useState(postDetails.title);
    const [editDescr, setEditDescr] = useState(postDetails.description);

    // this is the current title and description from the server They only change when edits are submitted.
    const [title, setTitle] = useState(postDetails.title);
    const [descr, setDescr] = useState(postDetails.description);

    const handleChange = (e, funct) => { // handles changes in form inputs
        funct(e.target.value)
    }

    //logged in user is needed for applying their votes to the right person
    const viewerUser = useContext(UserContext);

    const [putVote] = useMutation(VOTE_PUT); // fx to send the vote mutation in the upvote and downvote fxs

    const [putPost] = useMutation(PUT_POST);  // fx to send edits to the backend.

    const [deletePost] = useMutation(POST_DELETE, {onCompleted: data => { // fx to send delete mutation
        window.location.href='#';
    }});

    const upvoteFunc = (e) => {
            //sends an upvote to the server from the logged in user on click
            if(voteValue != 1){
            setVoteValue(1);
            putVote({ variables: {username:viewerUser.username,post_id:postDetails._id,vote:1}});
            } else if(voteValue == 1){
                setVoteValue(0);
                putVote({ variables: {username:viewerUser.username,post_id:postDetails._id,vote:0}});
            }
    }
    const downvoteFunc = (e) => {
            //sends a downvote to the server from the logged in user on click
            if(voteValue != -1) {
                setVoteValue(-1);
                putVote({ variables: {username:viewerUser.username,post_id:postDetails._id,vote:-1}});
            } else if(voteValue == -1) {
                setVoteValue(0);
                putVote({ variables: {username:viewerUser.username,post_id:postDetails._id,vote:0}});
                e.target.checked=(false)
            }
    }
    const handleDelete = (e) => {
        // manages clicking the delete btn
        if(window.confirm("Are you sure you'd like to delete this post?")){
            deletePost({ variables: {post_id:postDetails._id}});
            window.location.href='/SaveClient/';
        }
    }
    const handleEdits = (e) => {
        putPost({ variables: {post_id:postDetails._id,title:editTitle,description:editDescr}});
        setIsEditMode(false);
        setTitle(editTitle);
        setDescr(editDescr);
    }
    const userProfileClick = (e) => {
        // link to user profile at the username in the post header
        e.preventDefault();
        let hrefString =process.env.PUBLIC_URL +'#/user/'+postDetails.creator;
        window.location.href=hrefString;
    }

    const postCommentClick = (e) => {
        // link to the post's comment section.
        e.preventDefault();
        let hrefString =process.env.PUBLIC_URL+'#/post/'+postDetails._id;
        window.location.href=hrefString;
    }
    return (
        <div className="postDiv">
            <div className="votesDiv">
                <label className="labelVote">
                    <input type="radio" className="voteRadio voteRadioUp" name="vote" value={voteValue} checked={(voteValue == 1)} onClick={upvoteFunc}/>
                    <h2 className={(voteValue === 1)  ? "colorUpVote": undefined}><FaArrowUp/></h2>
                </label>
                <h3>{voteSum + voteValue}</h3> {/*Rather than callback the current votesum and have confusing vote total changes (If other users voted simultaneously, we adjust the total locally*/}
                <label class="labelVote">
                    <input type="radio" className="voteRadio" name="vote" value={voteValue} checked={(voteValue == -1)} onClick={downvoteFunc}/>
                    <h2 className={(voteValue === -1) ? "colorDownVote": undefined}><FaArrowDown/></h2>
                </label>
            </div>
            <div className="postContent">
                <div className="postHeaderandTitle">
                    <div className="postHeader">
                        <p>Created by <a className="pointer" onClick={userProfileClick}>{postDetails.creator}</a></p>
                        <p title={longDateTimeString(postDetails.createdAt)}>{timeCalculator(postDetails.createdAt)}</p>
                    </div>
                    {(isEditMode) ?
                        <input value={editTitle} className="editTitle postTitle" onChange={(e) =>handleChange(e, setEditTitle)} required/> : <h2 className="postTitle">{title}</h2>
                    }
                    {(isCommentSection)&&<> {/*If we are in the comment section we hide the comment section link and insert the description */}
                        {(isEditMode) ? <textarea form="newIssueForm" rows="6" className="descriptionInput postInput" value={editDescr} onChange={(e) =>handleChange(e, setEditDescr)} required/> :
                        <p className="postDescription">{descr}</p>
                        }</>
                    } 

                </div>
                <div className="postFooter">
                    {(!isCommentSection)&& /* If we are not in the comment section we display the link to the comment section*/
                        <h3 className="postComment" onClick={postCommentClick}>
                            <IconContext.Provider value={{ style: { verticalAlign: 'middle'} }}>
                                <BiMessageDetail/>
                            </IconContext.Provider>
                            Comments
                        </h3>}
                    {(viewerUser.username==postDetails.creator || viewerUser.username=='admin') &&<div className="editDeleteHolder">
                        {(isCommentSection) &&
                            <div className="editBtn" onClick={(e) => setIsEditMode((!isEditMode))}>
                                {(isEditMode) ?  <h5 className="editIcon">Cancel Edits</h5> : <BiEdit className="editIcon"/>}
                            </div>
                            }
                        <div className="deleteBtn" onClick={handleDelete}><BiTrash className="trashIcon"/></div>
                    </div>}
                    {(isEditMode) && <div className="editBtn" onClick={handleEdits}><h3>Submit Edits</h3></div>}
                </div>
            </div>
        </div>
    )
}

export default Post
