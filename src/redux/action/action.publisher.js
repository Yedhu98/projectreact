export const SET_PUBLISHER = " SET_PUBLISHER"
export const getPublisher= () => {
    return (dispatch) => {
       fetch("http://localhost:4000/library/publisher/pub")
        .then(response => response.json())
        .then(data =>
            dispatch({
                type: SET_PUBLISHER,
                payload: data
            }))
    }
}