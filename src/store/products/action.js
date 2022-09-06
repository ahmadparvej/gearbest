import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LOADING,
} from "./actionTypes";

let BASE_URL = "https://gearbest-json-api.herokuapp.com/api"

export const getProducts = (subcategory, item) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  fetch(`${BASE_URL}/${subcategory}/?name=${item}`)
    .then((res) => res.json())
    .then((data) => dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data }))
    .catch((err) => console.log(err));
};
export const getProductsByCategory = (subcategory, item) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  fetch(`${BASE_URL}/${subcategory}/?name=${item}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: GET_PRODUCTS_LIST_SUCCESS, payload: data })
    );
};
