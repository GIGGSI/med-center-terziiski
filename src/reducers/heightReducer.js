
export const heightReducer = (state = 0, action) => {

    switch (action.type) {
        case 'ADD_HEIGHT':
            return action.payload;

        default:
            return state
    }

}