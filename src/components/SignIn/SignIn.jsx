import React, { useState }  from 'react';

import FormInput            from 'components/FormInput/FormInput';
import CustomButton         from 'components/CustomButton/CustomButton';
import { signInWithGoogle } from 'firebase/firebase.utils';

import 'components/SignIn/SignIn.scss';

const SignIn = () => {
	const [email, setEmail]       = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => { 
		e.preventDefault();
		setEmail('');
		setPassword('');
	}

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput 
					name     = "email"
					type     = "email"
					value    = {email}
					onChange = {e => setEmail(e.target.value)}
					label    = "Email"
					required
				/>
				<FormInput 
					name     = "password"
					type     = "password"
					value    = {password}
					onChange = {e => setPassword(e.target.value)}
					label    = "Password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton> 
				</div>
			</form>
		</div>
	);
};

export default SignIn;
