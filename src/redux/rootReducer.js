import { combineReducers } from 'redux';

import userReducer         from 'redux/user/userReducer';

export default combineReducers({
	user: userReducer
});
