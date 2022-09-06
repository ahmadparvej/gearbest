import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LOADING,
} from "./actionTypes";

const initState = {
  data: [],
  list: [],
  loading: false,
  error: false,
};

export const getProductsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return (state = {
        ...state,
        data: payload[0].data,
        loading: false,
        error: false,
      });
    case GET_PRODUCTS_LOADING:
      return (state = { ...state, loading: true });
    case GET_PRODUCTS_LIST_SUCCESS:
      if (Object.keys(payload)?.length <= 0) {
        return (state = { ...state, list: [], loading: false, error: false });
      }
      return (state = {
        ...state,
        list: payload[0].data,
        loading: false,
        error: false,
      });
    default:
      return state;
  }
};
