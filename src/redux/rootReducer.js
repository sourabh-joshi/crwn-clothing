import { combineReducers } from 'redux';
import { persistReducer }  from 'redux-persist';
import storage             from 'redux-persist/lib/storage';

import userReducer         from 'redux/user/userReducer';
import cartReducer         from 'redux/cart/cartReducer';
import directoryReducer    from 'redux/directory/directoryReducer';
import shopReducer         from 'redux/shop/shopReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	user      : userReducer,
	cart      : cartReducer,
	directory : directoryReducer,
	shop      : shopReducer
});

export default persistReducer(persistConfig, rootReducer); 
