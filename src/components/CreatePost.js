import { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { UserContext } from "../UserContext";
import { useContext } from 'react';
import { FaPaperPlane } from 'react-icons/fa'

import '../static/CreatePost.css'

// GraphQL mutation for sending a new post.
const POST_POST = gql`
    mutation postPost($title: String!, $description: String!, $creator: String!) {
        postPost(title: $title, description: $description,creator:$creator) {
         _id
        }
    }
`;

const CreatePost = () => {
    // Create Post form page component

    // setting up form states and calling the user for sending in the query/mutation
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const creatorUser = useContext(UserContext);

    const handleChange = (e, funct) => { // handles changes in form inputs
        funct(e.target.value)
    }

    const [postPost] = useMutation(POST_POST, {onCompleted: data => {
        // Graph QL Function for sending new posts in
        let hrefString = process.env.PUBLIC_URL +'#/post/' + data.postPost._id // link string to new posts url 
        window.location.href=hrefString;
    }});

    const onSubmit = (e) => {
        e.preventDefault();
        let formBody = {"title":title,"description":description,"creator":creatorUser.username};
        postPost({ variables: formBody}) // no need to clear state because we leave the page at the end of this request
    }

    return (
        <div className="container">
            <form className="form" id="newIssueForm" onSubmit={onSubmit}>
                <div className="createDiv">
                        <h2 id="formTitle">Create Issue:</h2>
                        <label className="screenHiddenLabel" htmlFor="postTitle">Title*</label>
                        <input type="text" name="postTitle" className="postTitle postInput" placeholder="Enter Issue Title" value={title} onChange={(e) =>handleChange(e, setTitle)} required/>
                        <label className="screenHiddenLabel" htmlFor="issueDescription">Description*</label>
                        <textarea form="newIssueForm" rows="6" className="descriptionInput postInput" name="issueDescription" placeholder="Enter Issue Description" value={description} onChange={(e) =>handleChange(e, setDescription)} required/>
                    <button className="submit" form="newIssueForm" type="submit" >Create Issue <FaPaperPlane/></button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost

