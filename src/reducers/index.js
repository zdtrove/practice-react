import { combineReducers } from 'redux';
import postReducer from './modules/postReducer';

export default combineReducers({
	posts: postReducer
});