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
