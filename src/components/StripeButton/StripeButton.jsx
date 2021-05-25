import React          from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_51IuxzqSGN1LezoOWstBaRUaVUrFgocHQhgIqID2APz1dzdMh7QlKNXXDYGiwplhkIPUv9DLvLBXzeT3nuezHAbDZ00lBRhQZxW";

	const onToken = (token) => {
		console.log("Token", token);
		alert("Payment successful.");
	}

	return (
		<StripeCheckout 
			label       = "Pay Now"
			name        = "CRWN Clothing Ltd."
			description = {`Your total is $${price}`}
			amount      = {priceForStripe}
			panelLabel  = "Pay Now"
			token       = {onToken}
			stripeKey   = {publishableKey}
			billingAddress
			shippingAddress
		/>
	);
};

export default StripeCheckoutButton;
