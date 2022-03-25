import React from "react";
import { Login, LoginForm } from "react-admin";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import ForgotPasswordButton from './forgotPassword'

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '#/'
};

const SignInScreen = () => <StyledFirebaseAuth
  firebaseAuth={firebase.auth()}
  uiConfig={uiConfig}
/>;

const CustomLoginForm = props => (
  <div>
    <div style={{fontFamily: "monospace", marginLeft: '15px'}}>
    </div>
    <LoginForm {...props} />
    <SignInScreen />
    <ForgotPasswordButton {...props} />
  </div>
);

const CustomLoginPage = props => (
  <Login {...props}>
    <CustomLoginForm {...props}/>
  </Login>
);

export default CustomLoginPage;