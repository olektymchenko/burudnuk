import { LOADING_DEALS, STOP_LOADING_DEALS, SET_DEALS, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, STOP_LOADING_UI } from '../types';

import axios from 'axios';

export const loadingFacebookDeals = () => (dispatch) => {
    dispatch({ type: LOADING_DEALS });
    axios.get('/deals/sellerfacebookdeals').then(res => {
        dispatch({
            type: SET_DEALS,
            payload: res.data
        })
    }).then(res => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
    dispatch({ type: STOP_LOADING_DEALS });
}

export const loadingInstagramDeals = () => (dispatch) => {
    dispatch({ type: LOADING_DEALS });
    axios.get('/deals/sellerinstagramdeals').then(res => {
        dispatch({
            type: SET_DEALS,
            payload: res.data
        })
    }).then(res => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
    dispatch({ type: STOP_LOADING_DEALS });
}
export const loadingTikTokDeals = () => (dispatch) => {
    dispatch({ type: LOADING_DEALS });
    axios.get('/deals/sellertiktokdeals').then(res => {
        dispatch({
            type: SET_DEALS,
            payload: res.data
        })
    }).then(res => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
    dispatch({ type: STOP_LOADING_DEALS });
}
export const loadingTelegramDeals = () => (dispatch) => {
    dispatch({ type: LOADING_DEALS });
    axios.get('/deals/sellertelegramdeals').then(res => {
        dispatch({
            type: SET_DEALS,
            payload: res.data
        })
    }).then(res => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
    dispatch({ type: STOP_LOADING_DEALS });
}
/* Accepting deals */
export const acceptFacebookDeal = (dealId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get(`/deals/accept/${dealId}/facebook`)
        .then(res => {
            dispatch({ type: CLEAR_ERRORS });
        }).then(res => {
            dispatch({ type: STOP_LOADING_UI });
        }).then(res => {
            dispatch(loadingFacebookDeals());
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
            dispatch({ type: STOP_LOADING_UI })
        })
}

export const acceptInstagramDeal = (dealId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get(`/deals/accept/${dealId}/instagram`)
        .then(res => {
            dispatch({ type: CLEAR_ERRORS });
        }).then(res => {
            dispatch({ type: STOP_LOADING_UI });
        }).then(res => {
            dispatch(loadingInstagramDeals());
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
            dispatch({ type: STOP_LOADING_UI })
        })
}

export const acceptTikTokDeal = (dealId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get(`/deals/accept/${dealId}/tiktok`)
        .then(res => {
            dispatch({ type: CLEAR_ERRORS });
        }).then(res => {
            dispatch({ type: STOP_LOADING_UI });
        }).then(res => {
            dispatch(loadingTikTokDeals());
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
            dispatch({ type: STOP_LOADING_UI })
        })
}
export const acceptTelegramDeal = (dealId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get(`/deals/accept/${dealId}/telegram`)
        .then(res => {
            dispatch({ type: CLEAR_ERRORS });
        }).then(res => {
            dispatch({ type: STOP_LOADING_UI });
        }).then(res => {
            dispatch(loadingTelegramDeals());
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
            dispatch({ type: STOP_LOADING_UI })
        })
}

/* Rejecting deals */
export const rejectFacebookDeal = (dealId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get(`/deals/reject/${dealId}/facebook`)
        .then(res => {
            dispatch({ type: CLEAR_ERRORS });
        }).then(res => {
            dispatch({ type: STOP_LOADING_UI });
        }).then(res => {
            dispatch(loadingFacebookDeals());
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
            dispatch({ type: STOP_LOADING_UI })
        })
}

export const rejectInstagramDeal = (dealId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get(`/deals/reject/${dealId}/instagram`)
        .then(res => {
            dispatch({ type: CLEAR_ERRORS });
        }).then(res => {
            dispatch({ type: STOP_LOADING_UI });
        }).then(res => {
            dispatch(loadingInstagramDeals());
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
            dispatch({ type: STOP_LOADING_UI })
        })
}

export const rejectTikTokDeal = (dealId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get(`/deals/reject/${dealId}/tiktok`)
        .then(res => {
            dispatch({ type: CLEAR_ERRORS });
        }).then(res => {
            dispatch({ type: STOP_LOADING_UI });
        }).then(res => {
            dispatch(loadingTikTokDeals());
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
            dispatch({ type: STOP_LOADING_UI })
        })
}
export const rejectTelegramDeal = (dealId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get(`/deals/reject/${dealId}/telegram`)
        .then(res => {
            dispatch({ type: CLEAR_ERRORS });
        }).then(res => {
            dispatch({ type: STOP_LOADING_UI });
        }).then(res => {
            dispatch(loadingTelegramDeals());
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
            dispatch({ type: STOP_LOADING_UI })
        })
}
