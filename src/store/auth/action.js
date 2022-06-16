
import { SIGN_IN_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';
export const signIn = (payload) =>(dispatch)=>(dispatch({type:SIGN_IN_SUCCESS,payload}))
export const login = (payload) =>(dispatch)=>(dispatch({type:LOGIN_SUCCESS,payload}))
export const logout = () =>(dispatch)=>(dispatch({type:LOGOUT_SUCCESS}))