export const setHeight = (height) => async dispatch => {
    dispatch({ type: 'ADD_HEIGHT', payload: height })
}