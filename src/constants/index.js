export const ALERTS = {
    'API_ERROR': {
        type: 'error',
        text: 'There was an error trying to retrieve the list of movies. You can see the error in the console.'
    },
    'MOVIE_DELETED_FROM_LIST': {
        type: 'success',
        text: 'The movie was deleted from the list.'
    },
    'MOVIE_ADDED_TO_MYLIST': {
        type: 'success',
        text: 'The movie was added to your list.'
    },
    'MOVIE_DELETED_FROM_MYLIST': {
        type: 'success',
        text: 'The movie was deleted from your list.'
    },
    'MYLIST_EMPTY': {
        type: 'warning',
        text: 'Oops, your list is empty.'
    }
}
