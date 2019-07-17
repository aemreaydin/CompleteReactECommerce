import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SignInSignUpPage.scss';

const SignInSignUpPage : React.FC = () => (
    <div className="sign-in-up-page">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUpPage;