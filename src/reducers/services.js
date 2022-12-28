
export const servicesReducer = (state = 1, action) => {
    switch (action.type) {
        case 'SET_SINGLE_SERVICE_ID':
            return action.payload;

        default:
            return state
    }

}