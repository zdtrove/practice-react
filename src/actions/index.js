import * as types from '../constants/actionTypes';
import callApi from '../utils/callApi';

export const getAllListRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch({ type: types.GET_ALL_LIST, tasks: res.data });
        });
    };
}