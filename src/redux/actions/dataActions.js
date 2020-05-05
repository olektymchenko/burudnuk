import {
    LOADING_DEALS, STOP_LOADING_DEALS, SET_DEALS,
    SET_ERRORS, CLEAR_ERRORS, LOADING_UI, STOP_LOADING_UI,
    ADD_SELLER_DEAL_COUNT, LOADING_ACCEPTED_DEALS,
    STOP_LOADING_ACCEPTED_DEALS, SET_ACCEPTED_DEALS
} from '../types';

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
/* Loading seller accepted deals */

export const acceptedFacebookDeals = () => (dispatch) => {
    dispatch({ type: LOADING_ACCEPTED_DEALS });
    axios.get('/deals/facebookdone').then(res => {
        dispatch({
            type: SET_ACCEPTED_DEALS,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_ACCEPTED_DEALS })
    })
}

export const acceptedInstagramDeals = () => (dispatch) => {
    dispatch({ type: LOADING_ACCEPTED_DEALS });
    axios.get('/deals/instagramdone').then(res => {
        dispatch({
            type: SET_ACCEPTED_DEALS,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_ACCEPTED_DEALS })
    })
}

export const acceptedTikTokDeals = () => (dispatch) => {
    dispatch({ type: LOADING_ACCEPTED_DEALS });
    axios.get('/deals/tiktokdone').then(res => {
        dispatch({
            type: SET_ACCEPTED_DEALS,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_ACCEPTED_DEALS })
    })
}
export const acceptedTelegramDeals = () => (dispatch) => {
    dispatch({ type: LOADING_ACCEPTED_DEALS });
    axios.get('/deals/telegramdone').then(res => {
        dispatch({
            type: SET_ACCEPTED_DEALS,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_ACCEPTED_DEALS })
    })
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
        }).then(res => {
            dispatch({ type: ADD_SELLER_DEAL_COUNT });
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
        }).then(res => {
            dispatch({ type: ADD_SELLER_DEAL_COUNT });
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
        }).then(res => {
            dispatch({ type: ADD_SELLER_DEAL_COUNT });
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
        }).then(res => {
            dispatch({ type: ADD_SELLER_DEAL_COUNT });
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
