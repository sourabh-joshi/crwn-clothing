import React, { useState }                 from 'react';

import FormInput                           from 'components/FormInput/FormInput';
import CustomButton                        from 'components/CustomButton/CustomButton';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import 'components/SignUp/SignUp.scss';

const initialSignUpData =  {
	displayName     : '',
	email           : '',
	password        : '',
	confirmPassword : ''
};

const SignUp = () => {
	const [signUpData, setSignUpData] = useState(initialSignUpData);
	const handleChange = ({ target }) => setSignUpData({
		...signUpData, 
		[target.name]: target.value
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = signUpData;

		if(password !== confirmPassword){
			alert("password don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			setSignUpData(initialSignUpData);
		} catch(error) {
			console.log(error);
		}
	}

	const { displayName, email, password, confirmPassword } = signUpData;

	return (
		<div className="sign-up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type     = "text"
					name     = "displayName"
					value    = {displayName}
					onChange = {handleChange}
					label    = "Display Name"
					required
				/>
				<FormInput
					type     = "email"
					name     = "email"
					value    = {email}
					onChange = {handleChange}
					label    = "Email"
					required
				/>
				<FormInput
					type     = "password"
					name     = "password"
					value    = {password}
					onChange = {handleChange}
					label    = "Password"
					required
				/>
				<FormInput
					type     = "password"
					name     = "confirmPassword"
					value    = {confirmPassword}
					onChange = {handleChange}
					label    = "Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
}

export default SignUp;
