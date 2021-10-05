export const SET_CATEGORY = " SET_CATEGORY"
export const getCategory = () => {
    return (dispatch) => {
       fetch("http://localhost:4000/library/category/cat")
        .then(response => response.json())
        .then(data =>
            dispatch({
                type: SET_CATEGORY,
                payload: data
            }))
    }
}