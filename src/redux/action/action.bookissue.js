import axios from "axios"
export const SET_BOOK_ISSUE=" SET_BOOK_ISSUE"
export const EDIT_BOOK=" EDIT_BOOK"
export const getBook=()=>{
    return(dispatch)=>{
        fetch('http://localhost:4000/book/issue/iss')
         .then(response=>response.json())
         .then(data=>
            dispatch({
                type: SET_BOOK_ISSUE,
                payload:data
            }))
    }
}

export const addBook = (data) => {



    return (dispatch) => {

        axios.post('http://localhost:4000/book',data).then(response =>console.log(response));

    }

}
export const updateBook=(data)=>{

    return{

        type:EDIT_BOOK,

        payload:data

    }

}
export const editBook=(data,id)=>{

    return (dispatch)=>{

        fetch(`http://localhost:4000/book/${id}`,{

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
export const deleteBook=(id)=>{

    return (dispatch)=>{

       

            axios.delete(`http://localhost:4000/book/delete/${id}`).then(response =>console.log(response));
    
        }

    }


