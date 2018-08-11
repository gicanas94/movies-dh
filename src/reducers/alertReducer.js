export const alertReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_ALERT':
            return {
                type: action.alert.type,
                text: action.alert.text
            }
        case 'REMOVE_ALERT':
            return null
        default:
            return state
    }
}
