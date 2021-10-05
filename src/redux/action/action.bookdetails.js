import axios from "axios"
export const SET_BOOK_DETAILS = " SET_DETAILS"
export const EDIT_DETAILS = " EDIT_DETAILS"
export const getDetails = () => {
    return (dispatch) => {
       fetch("http://localhost:4000/library/book")
        .then(response => response.json())
        .then(data =>
            dispatch({
                type: SET_BOOK_DETAILS,
                payload: data
            }))
    }
}
export const addDetails = (data) => {



    return (dispatch) => {

        axios.post('http://localhost:4000/library',data).then(response =>console.log(response));

    }

}
export const updateDetails=(data)=>{

    return{

        type:EDIT_DETAILS,

        payload:data

    }

}
export const editDetails=(data,id)=>{

    return (dispatch)=>{

        fetch(`http://localhost:4000/library/${id}`,{

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
export const deleteDetails=(id)=>{

    return (dispatch)=>{

        fetch(`http://localhost:4000/library/${id}`,{

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
