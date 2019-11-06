import * as types from './../constants/actionTypes';

var initialState = [];

var tasks = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_LIST:
            console.log(action);
            state = action.tasks;
            return [...state];
        default: return state;
    }
};

export default tasks;