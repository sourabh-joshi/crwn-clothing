import React                        from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter }               from 'react-router-dom';

import CustomButton                 from 'components/CustomButton/CustomButton';
import CartItem                     from 'components/CartItem/CartItem';
import { selectCartItems }          from 'redux/cart/cartSelector';
import { toggleCartHidden }         from 'redux/cart/cartActions';

import 'components/CartDropdown/CartDropdown.scss';

const renderCartItemsList = (cartItems) => (
	cartItems.length ? cartItems.map((cartItem) => 
		<CartItem key={cartItem.id} item={cartItem} />
	) 
	: <span className="empty-message">Your cart is empty</span>
); 

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{renderCartItemsList(cartItems)}
		</div>
		<CustomButton onClick={() => { 
			history.push('/checkout');
			dispatch(toggleCartHidden());
		}}>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
