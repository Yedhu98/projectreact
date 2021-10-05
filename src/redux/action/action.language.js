export const SET_LANGUAGE = " SET_LANGUAGE"
export const getLanguage = () => {
    return (dispatch) => {
       fetch("http://localhost:4000/library/language/lan")
        .then(response => response.json())
        .then(data =>
            dispatch({
                type: SET_LANGUAGE,
                payload: data
            }))
    }
}