import {GET_USERS, ADD_USER, DELETE_USER, USERS_LOADING} from './types.js';
import axios from 'axios';

//---------------------------------------------------------------------------------------------------

export const getUsers = () => (dispatch) => {
    dispatch(setUsersLoading());
    axios
        .get('/api/userslist') //defined in server.js
        .then(res =>
              dispatch({
                  type: GET_USERS,
                  payload: res.data
              }))
    
    return {

    };
};

//---------------------------------------------------------------------------------------------------

export const addUser = (user) => (dispatch) => {
    axios
        .post('/api/userslist' , user) // defined in server.js - posts the 'user' object on the route
        .then((res) => dispatch({
            type: ADD_USER,
            payload: res.data
            // data comes out from user.js  .then(user =>  res.json(user)) 
        }))
    return {
        
        type: ADD_USER, // check the action.type from userReducer.js
        payload: user
    };
};

//---------------------------------------------------------------------------------------------------

export const deleteUser = (id) => (dispatch) => {
       
    axios
        .delete(`/api/userslist/${id}`)
        .then((res) => dispatch ({
            type: DELETE_USER,
            payload: id
        }))        
    };

//---------------------------------------------------------------------------------------------------

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING //which it can be false or true
    }    
}

//---------------------------------------------------------------------------------------------------
