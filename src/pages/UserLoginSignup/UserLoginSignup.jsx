import React  from 'react';

import SignIn from 'components/SignIn/SignIn';
import SignUp from 'components/SignUp/SignUp';

import 'pages/UserLoginSignup/UserLoginSignup.scss';

const UserLoginSignup = () => (
	<div className="login-signup">
		<SignIn />
		<SignUp />
	</div>
);

export default UserLoginSignup;
