import { SET_USER, LOADING_UI, CLEAR_ERRORS, SET_ERRORS, SET_UNAUTHENTICATED, SET_AUTHENTICATED, LOADING_USER } from '../types';
import axios from 'axios';

export const registerUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/register', newUserData).then(res => {
        setAuthorizationHeader(res.data.token);
        dispatch({ type: CLEAR_ERRORS });
        history.push('/user');
    }).then(() => {
        dispatch({ type: SET_AUTHENTICATED })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/login', userData).then(res => {
        setAuthorizationHeader(res.data.token);
        dispatch({ type: CLEAR_ERRORS });
        history.push('/user');
    }).then(() => {
        dispatch({ type: SET_AUTHENTICATED })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
}

export const getOwnUserData = (userId) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/users/owndata').then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Burunduk ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}