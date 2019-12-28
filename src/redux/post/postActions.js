import * as postTypes from './postTypes';
import axios from 'axios';

export const fetchPostsRequest = () => {
	return {
		type: postTypes.FETCH_POSTS_REQUEST
	}
}

export const fetchPostsSuccess = users => {
	return {
		type: postTypes.FETCH_POSTS_SUCCESS,
		payload: users,
	}
}

export const fetchPostsFailure = error => {
	return {
		type: postTypes.FETCH_POSTS_FAILURE,
		payload: error,
	}
}

export const fetchPosts = () => {
	return (dispatch) => {
		dispatch(fetchPostsRequest);
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
			const posts = response.data;
			dispatch(fetchPostsSuccess(posts));
		})
		.catch(error => {
			const errorMsg = error.message;
			dispatch(fetchPostsFailure(errorMsg));
		})
	}
}