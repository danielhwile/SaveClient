import { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
/* Query for log in and registration */
const ACCOUNT_POST = gql`
    mutation postUser($username: String!, $password: String!, $email: String) {
        postUser(username: $username, password:$password,email:$email) {
            username
            jwt
        }
    } 
`;


const AccountForm = ({ submit, title, isRegister, registerStatus }) => {
    // setting form inputs state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (e, funct) => {
        // handles changes in form inputs
        funct(e.target.value)
    }

    const [postUser] = useMutation(ACCOUNT_POST, {onCompleted: data => {
        // graphQL fx for log in and registration using the query above
        localStorage.setItem('authToken',data.postUser.jwt)
        window.location.href='/';
    }});


    const onSubmit = (e) => {
        // On Submit we collect the data for sending via the postUser mutation above
        e.preventDefault();
        let formBody = {"username":username,"password":password};
        if (isRegister) {
            formBody.email = email;
        }
        postUser({ variables: formBody})
    }

    return (
        <form className="accountForm" onSubmit={onSubmit}>
            <div className="accountForm">
                <h2>{title}:</h2>

                <div className="formItem">
                    <label htmlFor="Username">Username:</label>
                    <input className="formInput" type="username" id={title+"Username"} name="Username" placeholder="Enter Username" value={username} onChange={(e) =>handleChange(e, setUsername)} required/>
                </div>

                <div className="formItem">
                    <label htmlFor="Password">Password:</label>
                    <input className="formInput" type="password" id={title+"Password"} name="Password" placeholder="Enter Password" value={password} onChange={(e) =>handleChange(e, setPassword)} required/>
                </div>

                {isRegister && <div className="formItem"> 
                    <label htmlFor="Email">Email:</label> 
                    <input className="formInput" type="email" id="Email" name="Email" placeholder="Enter Email" value={email} onChange={(e) =>handleChange(e, setEmail)} required/>
                </div>}

                <input className="accFormBtn" type="submit" name={title} value={title}/>
            </div>
        </form>
    )
}

export default AccountForm
