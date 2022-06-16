
import { SIGN_IN_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';

const authentication = JSON.parse(localStorage.getItem("authentication")) || {email:"",password:""}

const initState = {
    authentication:authentication,
    isAuth:false,
    name:{firstName:"",lastName:""}
}
export const authReducer =(state=initState,{type,payload})=>{
    switch (type) {
        case SIGN_IN_SUCCESS:{
            localStorage.setItem("authentication",JSON.stringify(payload))
            return {...state,isAuth:false,email:payload.email,password:payload.password,name:{firstName:payload.firstName,lastName:payload.lastName}}
        }
        case LOGOUT_SUCCESS:{
            return {...state,isAuth:false}
        }
        case LOGIN_SUCCESS:{
            const authentication = JSON.parse(localStorage.getItem("authentication"))
            if(payload.email === authentication.email){
                return {...state,isAuth:true}
            }
            return {...state}
        }
        default:
            return state
    }
}