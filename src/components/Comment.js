import { UserContext } from "../UserContext";
import { useContext } from 'react';
import '../static/Comment.css'
import { timeCalculator,longDateTimeString } from "../utils";

const Comment = ({commentDetails}) => {

    const userProfileClick = (e) => {
        // links to the user profile when clicking on posting user's name
        e.preventDefault();
        let hrefString ='/user/'+commentDetails.creator;
        window.location.href=hrefString;
    }

    const viewerUser = useContext(UserContext); // storing the logged in viewer from context

    return (
        <div className={commentDetails.creator===viewerUser.username?"commentDiv opComment":"commentDiv"}>
            <div className="commentHeader">
                <p>Created By <a className="pointer" onClick={userProfileClick}>{commentDetails.creator}{(commentDetails.creator===viewerUser.username)&&" (you!)"}</a></p>
                <p title={longDateTimeString(commentDetails.createdAt)}>{timeCalculator(commentDetails.createdAt)}</p>
            </div>
            <h3>{commentDetails.content}</h3>
        </div>
    )
}

export default Comment
