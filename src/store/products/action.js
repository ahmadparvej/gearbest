
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_LIST_SUCCESS } from './actionTypes';

export const getProducts = (key)=> (dispatch)=>{
    fetch(`https://gearbest-json-api.herokuapp.com/${key}`)
    .then((res)=>res.json())
    .then((data)=>dispatch({type:GET_PRODUCTS_SUCCESS,payload:data}))
}

export const getProductListItems = (payload) =>(dispatch)=>(dispatch({type:GET_PRODUCTS_LIST_SUCCESS,payload}))