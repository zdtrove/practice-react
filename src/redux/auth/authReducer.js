import * as authTypes from './authTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case authTypes.LOGIN_REQUEST: return {
			status: 'Login request',
			loading: true,
		};
		case authTypes.LOGIN_SUCCESS: return {
			status: 'Login success',
			loading: false,
			result: action.payload,
		};
		case authTypes.LOGIN_FAILURE: return {
			status: 'Login failure',
			result: action.payload,
		};
		default: return state;
	}
}

export default reducer;