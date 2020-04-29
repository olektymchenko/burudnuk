import { SET_USER, SET_SELLER, LOADING_USER, STOP_LOADING_USER, CLEAR_ERRORS, SET_ERRORS, SET_UNAUTHENTICATED, SET_AUTHENTICATED, BECOME_FACEBOOK_SELLER, LOADING_UI, STOP_LOADING_UI } from '../types';
import axios from 'axios';

export const registerUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.post('/register', newUserData).then(res => {
        setAuthorizationHeader(res.data.token);
        dispatch({ type: CLEAR_ERRORS });
        history.push('/user');
    }).then(() => {
        dispatch({ type: SET_AUTHENTICATED })
    }).then(() => {
        axios.get('/users/seller')
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_USER })
    })
}

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_USER });
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
        dispatch({ type: STOP_LOADING_USER })
    })
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    dispatch({ type: CLEAR_ERRORS });
    localStorage.setItem('persist:root', null);
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
}


export const getOwnUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/users/owndata').then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_USER })
    })
}

export const updateProfile = (formData) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.post('/users/image', formData).then(res => {
        dispatch(getOwnUserData());
    }).catch(err => {
        console.log(err);
    })
}


export const getFacebookData = (userId) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get(`/users/${userId}/getfacebookdata`).then(res => {
        dispatch({
            type: SET_SELLER,
            payload: res.data
        })
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_USER })
    })
}

export const becomeFacebokSeller = (userId) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/users/facebook').then(res => {
        dispatch({ type: BECOME_FACEBOOK_SELLER })
        dispatch(getFacebookData(userId));
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_USER })
    })
}

export const updateFacebookData = (userData, userId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/users/updatefacebook', userData).then(res => {
        dispatch({ type: CLEAR_ERRORS });
    }).then(res => {
        dispatch({ type: STOP_LOADING_UI })
    }).then(res => {
        dispatch(getFacebookData(userId));
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_UI })
    })
}
const setAuthorizationHeader = (token) => {
    const FBIdToken = `Burunduk ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}