import React, { useEffect }                from 'react';
import { Switch, Route, Redirect }         from 'react-router-dom';
import { connect }                         from 'react-redux';
import { createStructuredSelector }        from 'reselect';

import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
import Header                              from 'components/Header/Header';
import HomePage                            from 'pages/HomePage/HomePage';
import ShopPage                            from 'pages/Shop/Shop';
import UserLoginSignupPage                 from 'pages/UserLoginSignup/UserLoginSignup';
import CheckoutPage                        from 'pages/Checkout/Checkout';
import { setCurrentUser }                  from 'redux/user/userActions';
import { selectCurrentUser }               from 'redux/user/userSelector';

import 'App.css';

const renderSigninPath = (currentUser) => { 
	return currentUser ? <Redirect to='/' /> : <UserLoginSignupPage />;
}; 

const App = ({ currentUser, setCurrentUser }) => {
	useEffect(() => {
		return auth.onAuthStateChanged(async user => {
			if(user) {
				const userRef = await createUserProfileDocument(user);

				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else {
				setCurrentUser(null);
			}
		});
	}, []);
	return	(
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" render={() => renderSigninPath(currentUser)}/>
				<Route exact path="/checkout" component={CheckoutPage}/>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
