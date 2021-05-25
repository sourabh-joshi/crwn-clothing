import React                                from 'react';
import { connect }                          from 'react-redux';
import { createStructuredSelector }         from 'reselect';

import { selectCartItems, selectCartTotal } from 'redux/cart/cartSelector';
import CheckoutItem                         from 'components/CheckoutItem/CheckoutItem';

import 'pages/Checkout/Checkout.scss';

const renderCartItemsList = (cartItems) => (
	cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)
)

const Checkout = ({ cartItems, cartTotal }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{renderCartItemsList(cartItems)}
		<div className="total">
			<span>TOTAL: ${cartTotal}</span>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
