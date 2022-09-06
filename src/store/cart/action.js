import {
  ADD_TO_CART_SUCCESS,
  CHECKOUT_CART_SUCCESS,
  DELETE_CART_SUCCESS,
} from "./actionTypes";
export const addToCart = (payload) => (dispatch) =>
  dispatch({ type: ADD_TO_CART_SUCCESS, payload });

export const checkout = () => (dispatch) =>
  dispatch({ type: CHECKOUT_CART_SUCCESS });

export const deleteCart = (id) => (dispatch) =>
  dispatch({ type: DELETE_CART_SUCCESS, payload:id });
