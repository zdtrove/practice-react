import todos from './todos.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos
});

export default rootReducer;