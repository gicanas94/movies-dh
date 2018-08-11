export const searchBarReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_BAR':
            return action.draft
        default:
            return state
    }
}
