import {EDIT_BOOK, SET_BOOK_ISSUE} from "../action/action.bookissue"


export const BookReducer=(state={bookissue:[],editData:{}},action)=>{

    let{type,payload}=action;

    switch(type){

        case SET_BOOK_ISSUE :

            return {...state,bookissue:payload};

        case EDIT_BOOK:

            console.log(state.editData)

            return{...state,editData:payload}

        default:

            return state

    }

}