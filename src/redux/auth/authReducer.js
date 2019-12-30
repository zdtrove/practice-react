import * as authTypes from './authTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case authTypes.LOGIN_REQUEST: return {
			status: 'Login request',
			loading: true,
		};
		case authTypes.LOGIN_SUCCESS: 
			return {
				status: 'Login success',
				loading: false,
				result: action.payload,
			};
		case authTypes.LOGIN_FAILURE: return {
			status: 'Login failure',
			result: action.payload,
		};
		case authTypes.SIGNUP_REQUEST: return {
			status: 'Signup request',
			loading: true,
		};
		case authTypes.SIGNUP_SUCCESS: return {
			status: 'Signup success',
			loading: false,
			result: action.payload,
		};
		case authTypes.SIGNUP_FAILURE: return {
			status: 'Signup failure',
			result: action.payload,
		};
		default: return state;
	}
}

export default reducer;