
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_LIST_SUCCESS } from './actionTypes';

const initState = {
    data:{},
    list:[]
}

export const getProductsReducer = (state=initState,{type,payload})=>{
    switch (type) {
        case GET_PRODUCTS_SUCCESS:
            state.data = payload;
            return {...state}
    
        
        case GET_PRODUCTS_LIST_SUCCESS:
            state.list = payload;
            return {...state}
    
        
        default:
            return state
    }
}