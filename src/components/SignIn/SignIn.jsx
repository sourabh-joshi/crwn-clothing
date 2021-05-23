import React, { useState }  from 'react';

import FormInput            from 'components/FormInput/FormInput';
import CustomButton         from 'components/CustomButton/CustomButton';
import { auth, signInWithGoogle } from 'firebase/firebase.utils';

import 'components/SignIn/SignIn.scss';

const initialLoginData = {
	email    : '',
	password : ''
};

const SignIn = () => {
	const [loginData, setLoginData] = useState(initialLoginData);
	const { email, password } = loginData;

	const handleSubmit = async (e) => { 
		e.preventDefault();
		
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setLoginData(initialLoginData);
		} catch(error) {
			console.log(error);
		}
	};

	const handleChange = ({ target }) => setLoginData({ 
		...loginData, 
		[target.name]: target.value
	});

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput 
					name     = "email"
					type     = "email"
					value    = {email}
					onChange = {handleChange}
					label    = "Email"
					required
				/>
				<FormInput 
					name     = "password"
					type     = "password"
					value    = {password}
					onChange = {handleChange}
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
