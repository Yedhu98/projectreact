import { SET_PUBLISHER } from "../action/action.publisher";

export const publisherReducer=(state=[],action)=>{
    let{type,payload}=action;

    switch(type){

        case SET_PUBLISHER :

            return payload;
            default:
                return state}}