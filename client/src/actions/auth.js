import axios from  'axios';
import {setAlert} from './alert';
import setAuthToken from '../utills/setAuthToken'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT,
    EDIT_PROFILE,
    PROFILE_ERROR
} from './types';


//  load  login user 
export const loadUser = ()=> async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/users/me');

        dispatch({
            type:USER_LOADED,
            payload: res.data
        });

        
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// Register user 

export const register = ({name,email,password,  newsLetters}) => async dispatch =>{
    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password, newsLetters})

    try {
        const res = await axios.post('/api/users/signUp', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}


// login User

export const login = (email, password) => async dispatch => {
    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
       
    }

    const body = JSON.stringify({ email, password});

    try{
        const res = await axios.post('/api/users/logIn', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser())
    } catch(err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}


// log out 
export const logout =()=> dispatch=>{
    dispatch({type: LOG_OUT});

}


// edit user 

export const editProfile = (formData, history)=> async dispatch => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json"
            }
          };
        const res = await axios.patch("/api/users/updateMe", formData, config);
        dispatch({
            type:EDIT_PROFILE,
            payload: res.data
        })
        dispatch(setAlert( "Profile Updated" , "success" ));
        
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
          }

        console.log(err);
        

          dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.errors  }
          });
    }
}