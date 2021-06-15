import { createAction } from ".";
import {userServices} from "../../../Services"
import { FETCH_CREDENTIAL } from "./type";
export const login = (user) =>{
    return (dispatch)=>{
        userServices.signIn(user)
        .then((res)=>{
            //console.log(res);
            dispatch(createAction(FETCH_CREDENTIAL, res.data))
            localStorage.setItem('creadential', JSON.stringify(res.data))
        }).catch((err)=>{
        })
    };
};