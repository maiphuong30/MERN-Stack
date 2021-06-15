import { FETCH_CREDENTIAL } from "../Action/type";

let initialState = {
  credentials: null,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDENTIAL:
      state.credentials = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default UserReducer;
