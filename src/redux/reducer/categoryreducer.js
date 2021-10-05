import { SET_CATEGORY } from "../action/action.category";
export const categoryReducer=(state=[],action)=>{
    let{type,payload}=action;

    switch(type){

        case SET_CATEGORY :

            return payload;
            default:
                return state}}