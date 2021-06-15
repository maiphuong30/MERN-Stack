import {combineReducers} from "redux"
import ProductReducer from "./product";
import UserReducer from "./user"
const RootReducer = combineReducers({
    product: ProductReducer,
    user: UserReducer
})
export default RootReducer;