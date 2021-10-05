import axios from "axios"
export const SET_MEMBER=" SET_MEMBER"
export const EDIT_MEMBER="EDIT_MEMBER"
export const getMember=()=>{
    return(dispatch)=>{
      fetch('http://localhost:4000/member')
         .then(response=>response.json())
         .then(data=>
            dispatch({
                type: SET_MEMBER,
                payload:data
            }))
    }
}
export const addMember = (data) => {



    return (dispatch) => {

        axios.post('http://localhost:4000/member',data).then(response =>console.log(response));

    }

}
export const updateMember=(data)=>{

    return{

        type:EDIT_MEMBER,

        payload:data

    }

}
export const editMember=(data,id)=>{

    return (dispatch)=>{

        fetch(`http://localhost:4000/member/${id}`,{

            headers:{

                'accept':'application/json',

                'content-type':'application/json'

            },

            method:'PUT',

            body:JSON.stringify(data)

        })

        .then(response=>response.json())

        .then(response=>{console.log(response)})

    }

}

export const deleteMember=(id)=>{

    return (dispatch)=>{

        fetch(`http://localhost:4000/member/${id}`,{

            headers:{

                'accept':'application/json',

                'content-type':'application/json'

            },

            method:'DELETE'

        })

        .then(response=>response.json())

        .then(response=>{console.log(response)})

    }

}
