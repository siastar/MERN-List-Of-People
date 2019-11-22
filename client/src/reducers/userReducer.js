
import { GET_USERS, ADD_USER, DELETE_USER, USERS_LOADING } from '../actions/types.js';

const initialState = {

    users: [], // in the initial state the users array is empty, it will be filled fetching data from db.
    isLoading: false

};


export default function(state = initialState, action) {

    switch(action.type){

    case GET_USERS:
        return{
            ...state,
            users: action.payload,
            isLoading: false //once users have been loaded from db, the isLoading par goes back to false
        };

    case DELETE_USER:
        return{
            ...state,
            users: state.users.filter(user => user._id !== action.payload)
            //action.payload is the id of the user to delete and comed
            //from export deleteuser in userActions.js,
            //filter returns the array itself without the id filtered element
            //id could be any other object property
        };

    case ADD_USER:
        return{
            ...state,
            users: [action.payload, ...state.users]            
        };

    case USERS_LOADING:
        return{
            ...state,
            isLoading: true
        };
        
    default:
        return state;
    };
}



