import { EDIT_DETAILS, SET_BOOK_DETAILS } from "../action/action.bookdetails"


export const DetailsReducer=(state={bookdetails:[],editData:{}},action)=>{
    let{type,payload}=action
    switch(type){

        case SET_BOOK_DETAILS :

            return {...state,bookdetails:payload};

        case EDIT_DETAILS:

            console.log(state.editData)

            return{...state,editData:payload}

        default:

            return state

    }

}