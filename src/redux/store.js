import {createStore, combineReducers} from 'redux';

const initialState = {
    users: [],
    comments: []
}

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

function usersReducer(state = initialState.users, action) {
    switch(action.type) {
        case FETCH_USERS_SUCCESS:
            return action.payload

        default:
            return state
    }
}

function commentReducer(state = initialState.comments, action) {
        switch(action.type) {
            case FETCH_USERS_SUCCESS:
                return action.payload

                default:
                    return state
        }
}


const reducers = combineReducers({
    users: usersReducer,
    comments: commentReducer,
    
})
const store = createStore(reducers,initialState);

export default store;