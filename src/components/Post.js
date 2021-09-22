import { BiMessageDetail, BiEdit, BiTrash} from "react-icons/bi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { UserContext } from "../UserContext";
import { useContext } from 'react';
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

const Post = ({postDetails, isCommentSection}) => {
    // component for individual posts, both at the top of their comments section and on post query pages

    // setting vote states
    const [voteValue, setVoteValue] = useState(postDetails.userVote.vote);
    const [voteSum, setVoteSum] = useState(postDetails.voteSum-postDetails.userVote.vote);

    //logged in user is needed for applying their votes to the right person
    const viewerUser = useContext(UserContext);

    const [putVote] = useMutation(VOTE_PUT); // fx to send the vote mutation in the upvote and downvote fxs

    const upvoteFunc = (e) => {
            //sends an upvote to the server from the logged in user on click
            setVoteValue(1);
            putVote({ variables: {username:viewerUser.username,post_id:postDetails._id,vote:1}});
    }
    const downvoteFunc = (e) => {
            //sends a downvote to the server from the logged in user on click
            setVoteValue(-1);
            putVote({ variables: {username:viewerUser.username,post_id:postDetails._id,vote:-1}});
    }

    const userProfileClick = (e) => {
        // link to user profile at the username in the post header
        e.preventDefault();
        let hrefString ='/user/'+postDetails.creator;
        window.location.href=hrefString;
    }

    const postCommentClick = (e) => {
        // link to the post's comment section.
        e.preventDefault();
        let hrefString ='/post/'+postDetails._id;
        window.location.href=hrefString;
    }
    return (
        <div className="postDiv">
            <div className="votesDiv">
                <label class="labelVote">
                    <input type="radio" className="voteRadio voteRadioUp" name="vote" value={voteValue} checked={(voteValue == 1)} onChange={upvoteFunc}/>
                    <h2 className={(voteValue === 1) && "colorUpVote"}><FaArrowUp/></h2>
                </label>
                <h3>{voteSum + voteValue}</h3> {/*Rather than callback the current votesum and have confusing vote total changes (If other users voted simultaneously, we adjust the total locally*/}
                <label class="labelVote">
                    <input type="radio" className="voteRadio" name="vote" value={voteValue} checked={(voteValue == -1)} onChange={downvoteFunc}/>
                    <h2 className={(voteValue === -1) && "colorDownVote"}><FaArrowDown/></h2>
                </label>
            </div>
            <div className="postContent">
                <div className="postHeaderandTitle">
                    <div className="postHeader">
                        <p>Created by <a className="pointer" onClick={userProfileClick}>{postDetails.creator}</a></p>
                        <p title={longDateTimeString(postDetails.createdAt)}>{timeCalculator(postDetails.createdAt)}</p>
                    </div>
                    <h2 className="postTitle">{postDetails.title}</h2>
                    {isCommentSection&& /*If we are in the comment section we hide the comment section link and insert the description */
                        <p className="postDescription">{postDetails.description}</p>}
                </div>
                <div className="postFooter">
                    {(!isCommentSection)&& /* If we are not in the comment section we display the link to the comment section*/
                        <h3 className="postComment" onClick={postCommentClick}>
                            <IconContext.Provider value={{ style: { verticalAlign: 'middle'} }}>
                                <BiMessageDetail/>
                            </IconContext.Provider>
                            Comments
                        </h3>}
                    {/*NOTE: ADD LATER FOR PORTFOLIO VERSION NOT OUTLINED IN PORJECT <h3><BiEdit/></h3>  <h3><BiTrash/></h3>*/}
                </div>
            </div>
        </div>
    )
}

export default Post
