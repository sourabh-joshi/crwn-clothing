import ShopActionTypes from 'redux/shop/shopActionTypes';

export const updateCollections = (collectionsMap) => ({
	type    : ShopActionTypes.UPDATE_COLLECTIONS,
	payload : collectionsMap
});
