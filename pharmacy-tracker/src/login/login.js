import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const errors = {
        username: "Please enter a valid username",
        pass: "Please enter a valid password"
    };
    const database = [
        {
          username: "user",
          password: "pass"
        },
        {
          username: "user2",
          password: "pass2"
        }
    ];
    const generateErrorMessage = (name) =>
        name === errorMessages.name && (
            <div classname="error">{errorMessages.message}</div>
        );
    
    // JSX Code for the login form
    
    const loginForm = (
        <div className="login-form">
        <form onSubmit={ handleSubmit }>
        <div classname="title"> Sign in </div>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="username" required />
                {generateErrorMessage("username")}
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {generateErrorMessage("pass")}
            </div>
            <div className="button-container">
                <input type="submit" />
            </div>
        </form>
      </div>

    );
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        var { username, pass } = document.forms[0];
    
        //Find user login info
        //Test connection
        const userData = database.find((user) => user.username === username.value);
    
        //Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                //Invalid password
                setErrorMessages({name : "pass", message: errors.pass});
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({name: "username", message: errors.username});
        }
    };

    return (
        <div className="loginSuccess">
          <div className="loginSuccessform">
            <div className="title">Sign In</div>
            {isSubmitted ? <div>User is successfully logged in</div> : loginForm}
          </div>
        </div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(Login, rootElement);