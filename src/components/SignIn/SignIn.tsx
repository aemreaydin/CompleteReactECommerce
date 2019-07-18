import React from 'react';

import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import { signInWithGoogle, signInWithGithub, auth } from '../../firebase/firebase.utils';

import './SignIn.scss';

interface SignInProps {}
interface SignInState {
    email: string;
    password: string;
}

class SignIn extends React.Component<SignInProps, SignInState> {
    constructor(props: SignInProps) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error) {
            console.log(error);
        }

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        } as any);
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2 className="sign-in__title">I already have an account</h2>
                <span className="sign-in__span">Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit} className="form-container">
                    <FormInput name="email"
                            type="email"
                            value={email}
                            label="email"
                            id="email"
                            htmlFor="email"
                            placeholder="Enter your email"
                            onChange={this.handleChange}/>
                    <FormInput name="password"
                            type="password"
                            value={password}
                            label="password"
                            id="password"
                            htmlFor="password"
                            placeholder="Enter your password"
                            onChange={this.handleChange} />
                    <div className="submit-container">
                        <CustomButton className="btn btn-submit">Sign In With Email</CustomButton>
                        <CustomButton type="button" className="btn btn-submit btn-submit--google" onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                        <CustomButton type="button" className="btn btn-submit btn-submit--github" onClick={signInWithGithub}>Sign In With Github</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;