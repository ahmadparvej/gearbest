
import { SIGN_IN_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';

const initState = {
    token:"",
    email:"",

}
export const authReducer =(state=initState,{type,payload})=>{
    switch (type) {
        case SIGN_IN_SUCCESS:{
            return state
        }
        case LOGOUT_SUCCESS:{
            return state={...state,token:""}
        }
        case LOGIN_SUCCESS:{
            return state={...state,email:payload.email,token:payload.token}
        }
        default:
            return state
    }
}