import React                        from 'react';
import { Link }                     from 'react-router-dom';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth }                     from 'firebase/firebase.utils';
import { ReactComponent as Logo }   from 'assets/crown.svg';
import CartIcon                     from 'components/CartIcon/CartIcon';
import CartDropdown                 from 'components/CartDropdown/CartDropdown';
import { selectCurrentUser }        from 'redux/user/userSelector';
import { selectCartHidden }         from 'redux/cart/cartSelector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from 'components/Header/header.styles';

const renderAuthButton = (user) => (
	user 
	? <OptionLink
		as="div"
		onClick={() => auth.signOut()}
		>
		SIGN OUT
	  </OptionLink> 
	: <OptionLink to='/signin'>SIGN IN</OptionLink>
);



const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/shop">CONTACT</OptionLink>
			{renderAuthButton(currentUser)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser,
	hidden      : selectCartHidden
}); 

export default connect(mapStateToProps)(Header);
