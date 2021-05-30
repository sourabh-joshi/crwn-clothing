import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect }          from 'react-router-dom';
import { connect }                          from 'react-redux';
import { createStructuredSelector }         from 'reselect';

import { auth, createUserProfileDocument }  from 'firebase/firebase.utils';
import Header                               from 'components/Header/Header';
import { setCurrentUser }                   from 'redux/user/userActions';
import { selectCurrentUser }                from 'redux/user/userSelector';
import HomePage                             from 'pages/HomePage/HomePage';
import Spinner                              from 'components/Spinner/Spinner';
import ErrorBoundary                        from 'components/ErrorBoundary/ErrorBoundary';

import 'App.css';

const ShopPage            = lazy(() => import('pages/Shop/Shop'));
const UserLoginSignupPage = lazy(() => import('pages/UserLoginSignup/UserLoginSignup'));
const CheckoutPage        = lazy(() => import('pages/Checkout/Checkout'));

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
	}, [setCurrentUser]);
	return	(
		<div>
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path="/" component={HomePage} />
						<Route path="/shop" component={ShopPage} />
						<Route exact path="/signin" render={() => renderSigninPath(currentUser)}/>
						<Route exact path="/checkout" component={CheckoutPage}/>
					</Suspense>
				</ErrorBoundary>
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
