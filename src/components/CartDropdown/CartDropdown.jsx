import React               from 'react';
import { connect }         from 'react-redux';

import CustomButton        from 'components/CustomButton/CustomButton';
import CartItem            from 'components/CartItem/CartItem';
import { selectCartItems } from 'redux/cart/cartSelector';

import 'components/CartDropdown/CartDropdown.scss';

const renderCartItemsList = (cartItems) => (
	cartItems.map((cartItem) => 
		<CartItem key={cartItem.id} item={cartItem} />
	)
); 

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{renderCartItemsList(cartItems)}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
