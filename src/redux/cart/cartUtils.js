export const addItemToCart = (existingItems, newItem) => {
	const existingCartItem = existingItems.find(
		cartItem => cartItem.id === newItem.id 
	);

	if (existingCartItem) {
		return existingItems.map(cartItem =>
			cartItem.id === newItem.id
			? { ...cartItem, quantity: cartItem.quantity + 1}
			: cartItem
		)	
	}

	return [...existingItems, { ...newItem, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map(cartItem => 
		cartItem.id === cartItemToRemove.id ?
		{...cartItem, quantity: cartItem.quantity - 1 }
		: cartItem
	);
}
