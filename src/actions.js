import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';
import * as api from './api';
import { getUserName } from "./selectors";

const startLogin = createAction(actionTypes.LOGIN_START);
const endLogin = createAction(actionTypes.LOGIN_END);

export function login({ username, password}){
    return (dispatch, getState) => {
        dispatch(startLogin());
        return api
            .login( {username, password} )
            .then((data) => {
                if (data.ok){
                    dispatch(endLogin({username: data.username}));
                } else {
                    dispatch(endLogin( new Error(data.errors.join('\n'))));
                }
            })
            .catch((error) => {
                dispatch(endLogin(new Error('Netword errors')));
            })
    }
}

export const logout = createAction(actionTypes.LOGOUT);