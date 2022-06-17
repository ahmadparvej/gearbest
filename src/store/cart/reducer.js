import { ADD_TO_CART_SUCCESS, CHECKOUT_CART_SUCCESS, DELETE_CART_SUCCESS } from './actionTypes';

const cart = JSON.parse(localStorage.getItem("cart"))

const initState = {
    cart:cart|| [],
    sum:0
}

export const cartReducer = (state=initState,{type,payload})=>{
    switch (type) {
        case ADD_TO_CART_SUCCESS:{
            const cart = JSON.parse(localStorage.getItem("cart"))||[]
            cart.push(payload)
            localStorage.setItem("cart",JSON.stringify(cart))
            return {...state,cart:[...state.cart,payload],sum:state.sum+Number(payload.price)}
        }
        case CHECKOUT_CART_SUCCESS:{
            localStorage.removeItem("cart");
            return {...state,cart:[],sum:0}
        }
        case DELETE_CART_SUCCESS:{
            let newCart = state.cart.filter((item)=>{
                if(item.id===payload){
                    state.sum=state.sum-Number(item.price);
                }else if(item.id!==payload){
                    return item
                }else{
                    return item
                }
            })
            state.cart=newCart;
            return {...state}
        }
        default:
            return state
    }
}