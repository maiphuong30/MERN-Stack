import { createAction } from ".";
import { courseServices } from "../../../Services";
import { FETCH_PRODUCT, FETCH_DETAIL } from "./type";

export const fetchProduct = () =>{
    return dispatch =>{
        courseServices.fetchProduct()
        .then((res)=>{
            console.log(res.data)
           dispatch(
                createAction(FETCH_PRODUCT, res.data)
            )
        }).catch((err)=>{
            console.log(err);
        });
    }
}
export const fetchDetail = (id) =>{
    return dispatch =>{
        courseServices.fetchDetail(id)
        .then((res)=>{
             // console.log(res)
             dispatch(createAction(FETCH_DETAIL, res.data))
         }).catch((err)=>{
             console.log(err)
         });
    }
}