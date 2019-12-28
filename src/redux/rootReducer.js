import { combineReducers } from'redux';
import postReducer from './post/postReducer';
import authReducer from './auth/authReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	post: postReducer,
	auth: authReducer,
	form: formReducer,
});

export default rootReducer;