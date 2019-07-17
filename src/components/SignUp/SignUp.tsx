import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUser } from '../../firebase/firebase.utils';

import './SignUp.scss';

interface SignUpState {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface SignUpProps {}

class SignUp extends React.Component<SignUpProps, SignUpState> {
    constructor(props: SignUpProps) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        } as any);
    }

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }
        try {
            const userCredentials = await auth.createUserWithEmailAndPassword(email, password)
            const { user } = userCredentials;
            if(user) {
                await createUser(user, displayName);

                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
            }
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="sign-up__title">Create an Account</h2>
                <span className="sign-up__span">Sign up with your email and password</span>
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        label="Username"
                        type="text"
                        id="signup-username"
                        value={displayName}
                        placeholder="Enter a username"
                        htmlFor="signup-username"
                        onChange={this.handleChange} />
                    <FormInput
                        name="email"
                        type="email"
                        id="signup-email"
                        label="email"
                        value={email}
                        placeholder="Enter your email"
                        htmlFor="signup-email"
                        onChange={this.handleChange} />
                    <FormInput
                        name="password"
                        type="password"
                        id="signup-password"
                        label="password"
                        value={password}
                        placeholder="Enter your password"
                        htmlFor="signup-password"
                        onChange={this.handleChange} />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        id="signup-confirm-password"
                        label="Confirm Password"
                        value={confirmPassword}
                        placeholder="Confirm your password"
                        htmlFor="signup-confirm-password"
                        onChange={this.handleChange} />
                    <div className="submit-container">
                        <CustomButton className="btn btn-submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;