import { UserActionTypes } from 'redux/user/userActionTypes';

export const setCurrentUser = user => ({
	type    : UserActionTypes.SET_CURRENT_USER,
	payload : user
});
