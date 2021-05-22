import React               from 'react';
import { Switch, Route }   from 'react-router-dom';

import Header              from 'components/Header/Header';
import HomePage            from 'pages/HomePage/HomePage';
import ShopPage            from 'pages/Shop/Shop';
import UserLoginSignupPage from 'pages/UserLoginSignup/UserLoginSignup';

import 'App.css';

const App = () => (
	<div>
		<Header />
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/shop" component={ShopPage} />
			<Route exact path="/signin" component={UserLoginSignupPage} />
		</Switch>
	</div>
);

export default App;
