import React                      from 'react';
import { Link }                   from 'react-router-dom';
import { connect }                from 'react-redux';

import { auth }                   from 'firebase/firebase.utils';
import { ReactComponent as Logo } from 'assets/crown.svg';
import CartIcon                   from 'components/CartIcon/CartIcon';
import CartDropdown               from 'components/CartDropdown/CartDropdown';

import 'components/Header/Header.scss';

const renderAuthButton = (user) => (
	user 
	? <div 
		className='option' 
		onClick={() => auth.signOut()}
		>
		SIGN OUT
	  </div> 
	: <Link className="option" to='/signin'>SIGN IN</Link>
);



const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link to='/' className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">SHOP</Link>
			<Link className="option" to="/shop">CONTACT</Link>
			{renderAuthButton(currentUser)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
	currentUser,
	hidden
}); 

export default connect(mapStateToProps)(Header);
