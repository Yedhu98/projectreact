import { EDIT_MEMBER, SET_MEMBER } from "../action/action.member"




export const MemberReducer=(state={memberdetails:[],editData:{}},action)=>{
    let{type,payload}=action
    switch(type){

        case SET_MEMBER :

            return {...state,memberdetails:payload};

        case EDIT_MEMBER:

            console.log(state.editData)

            return{...state,editData:payload}

        default:

            return state

    }

}