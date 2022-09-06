import { SIGN_IN_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';
import axios from "axios"

let BASE_URL = "https://gearbest-backend.herokuapp.com/auth"

export const signIn = (payload) =>(dispatch)=>{
    axios.post(BASE_URL+"/signup",payload)
    .then((res)=>dispatch({type:SIGN_IN_SUCCESS,payload}))
    .catch((e)=>console.log(e))
}
export const login = (payload) =>(dispatch)=>{
    axios.post(BASE_URL+"/login",payload)
    .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:{token:res.data.token,email:payload.email}}))
    .catch((e)=>console.log(e))
}
export const logout = () =>(dispatch)=>(dispatch({type:LOGOUT_SUCCESS}))