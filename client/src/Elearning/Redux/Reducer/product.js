import { FETCH_PRODUCT, FETCH_DETAIL } from "../Action/type";

let initialState = {
  products: [],
  productDetail: null,
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT: {
      state.products = action.payload;
      return { ...state };
    }
    case FETCH_DETAIL: {
        state.productDetail = action.payload;
        return {...state};
    }
    default:
      return state;
  }
};
export default ProductReducer;
