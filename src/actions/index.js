export const setHeight = (height) => async dispatch => {
    dispatch({ type: 'ADD_HEIGHT', payload: height })
}

export const setSingleServiceid = (id) => async dispatch => {
    dispatch({ type: 'SET_SINGLE_SERVICE_ID', payload: id })
}