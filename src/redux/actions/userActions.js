import {
    SET_USER, SET_SELLER, LOADING_USER, STOP_LOADING_USER,
    CLEAR_ERRORS, SET_ERRORS, SET_UNAUTHENTICATED, SET_AUTHENTICATED,
    LOADING_UI, STOP_LOADING_UI, SET_ANOTHER_USER,
    SET_ANOTHER_FACEBOOK, SET_ANOTHER_INSTAGRAM, SET_ANOTHER_TIKTOK, SET_ANOTHER_TELEGRAM,
    SET_LOADING_FACEBOOK, SET_LOADING_INSTAGRAM, SET_LOADING_TIKOK, SET_LOADING_TELEGRAM,
    STOP_LOADING_FACEBOOK, STOP_LOADING_INSTAGRAM, STOP_LOADING_TIKOK, STOP_LOADING_TELEGRAM
} from '../types';
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

export const getAnotherUserData = (userId) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get(`/users/${userId}/userdata`).then(res => {
        dispatch({
            type: SET_ANOTHER_USER,
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
export const getInstagramData = (userId) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get(`/users/${userId}/getinstagramdata`).then(res => {
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
export const getTikTokData = (userId) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get(`/users/${userId}/gettiktokdata`).then(res => {
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
export const getTelegramData = (userId) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get(`/users/${userId}/gettelegramdata`).then(res => {
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
export const getAnotherFacebookData = (userId) => (dispatch) => {
    dispatch({ type: SET_LOADING_FACEBOOK });
    axios.get(`/users/${userId}/getfacebookdata`).then(res => {
        dispatch({
            type: SET_ANOTHER_FACEBOOK,
            payload: res.data
        })
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_FACEBOOK })
    })
}
export const getAnotherInstagramData = (userId) => (dispatch) => {
    dispatch({ type: SET_LOADING_INSTAGRAM });
    axios.get(`/users/${userId}/getinstagramdata`).then(res => {
        dispatch({
            type: SET_ANOTHER_INSTAGRAM,
            payload: res.data
        })
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_INSTAGRAM })
    })
}
export const getAnotherTikTokData = (userId) => (dispatch) => {
    dispatch({ type: SET_LOADING_TIKOK });
    axios.get(`/users/${userId}/gettiktokdata`).then(res => {
        dispatch({
            type: SET_ANOTHER_TIKTOK,
            payload: res.data
        })
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_TIKOK })
    })
}
export const getAnotherTelegramData = (userId) => (dispatch) => {
    dispatch({ type: SET_LOADING_TELEGRAM });
    axios.get(`/users/${userId}/gettelegramdata`).then(res => {
        dispatch({
            type: SET_ANOTHER_TELEGRAM,
            payload: res.data
        })
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_TELEGRAM })
    })
}



export const becomeFacebokSeller = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/users/facebook').then(res => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_USER })
    })
}
export const becomeInstagramSeller = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/users/instagram').then(res => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_USER })
    })
}
export const becomeTikTokSeller = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/users/tiktok').then(res => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_USER })
    })
}
export const becomeTelegramSeller = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/users/telegram').then(res => {
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