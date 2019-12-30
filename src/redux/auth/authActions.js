import * as authTypes from './authTypes';
import axios from 'axios';
import * as constants from '../../constants';

axios.defaults.baseURL = constants.API_BASE_URL;

export const loginRequest = () => {
	return {
		type: authTypes.LOGIN_REQUEST
	}
}

export const loginSuccess = users => {
	return {
		type: authTypes.LOGIN_SUCCESS,
		payload: users,
	}
}

export const loginFailure = error => {
	return {
		type: authTypes.LOGIN_FAILURE,
		payload: error,
	}
}

export const login = (loginData) => {
	return (dispatch) => {
		dispatch(loginRequest());
		axios.post(`account/login`, loginData)
		.then(response => {
			const login = response.data;
			dispatch(loginSuccess(login));
			localStorage.setItem('login', 'login');
		})
		.catch(error => {
			const errorMsg = error.message;
			dispatch(loginFailure(errorMsg));
		})
	}
}

export const signupRequest = () => {
	return {
		type: authTypes.SIGNUP_REQUEST
	}
}

export const signupSuccess = users => {
	return {
		type: authTypes.SIGNUP_SUCCESS,
		payload: users,
	}
}

export const signupFailure = error => {
	return {
		type: authTypes.SIGNUP_FAILURE,
		payload: error,
	}
}

export const signup = (signupData) => {
	return (dispatch) => {
		dispatch(signupRequest());
		axios.post(`account/register`, signupData)
		.then(response => {
			const signup = response.data;
			dispatch(signupSuccess(signup));
		})
		.catch(error => {
			const errorMsg = error.message;
			dispatch(signupFailure(errorMsg));
		})
	}
}