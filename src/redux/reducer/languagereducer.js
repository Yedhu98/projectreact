
import { SET_LANGUAGE } from "../action/action.language";
export const languageReducer=(state=[],action)=>{
    let{type,payload}=action;

    switch(type){

        case SET_LANGUAGE :

            return payload;
            default:
                return state}}