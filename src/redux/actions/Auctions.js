import {
    CLEAR_ERRORS, SET_ERRORS, START_USER_OFFER_AUCTION, START_LOADING_AUCTION, STOP_LOADING_AUCTION,
    START_LOADING_ALL_SEARCH_USER_AUCTIONS, STOP_LOADING_ALL_SEARCH_USER_AUCTIONS, SET_USER_ALL_SEARCH_AUCTIONS,
    START_LOADING_ACTIVE_SEARCH_USER_AUCTIONS, STOP_LOADING_ACTIVE_SEARCH_USER_AUCTIONS, SET_USER_ACTIVE_SEARCH_AUCTIONS,
    START_LOADING_ALL_OFFER_USER_AUCTIONS, STOP_LOADING_ALL_OFFER_USER_AUCTIONS, SET_USER_ALL_OFFER_AUCTIONS,
    START_LOADING_ACTIVE_OFFER_USER_AUCTIONS, STOP_LOADING_ACTIVE_OFFER_USER_AUCTIONS, SET_USER_ACTIVE_OFFER_AUCTIONS,
    START_LOADING_UNIQUE_AUCTION, STOP_LOADING_UNIQUE_AUCTION, SET_UNIQUE_AUCTION,
    START_LOADING_NEW_AUCTION_PRICE, STOP_LOADING_NEW_AUCTION_PRICE
} from '../types';
import axios from 'axios';

//User selling ads
export const startOfferingFacebookAuction = (data) => (dispatch) => {
    dispatch({ type: START_LOADING_AUCTION });
    axios.post('/auction/facebook/create', data).then(res => {
        dispatch({
            type: START_USER_OFFER_AUCTION,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: STOP_LOADING_AUCTION })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_AUCTION });
    })
}

export const startOfferingInstagramAuction = (data) => (dispatch) => {
    dispatch({ type: START_LOADING_AUCTION });
    axios.post('/auction/instagram/create', data).then(res => {
        dispatch({
            type: START_USER_OFFER_AUCTION,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: STOP_LOADING_AUCTION })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_AUCTION });
    })
}

export const startOfferingTikTokAuction = (data) => (dispatch) => {
    dispatch({ type: START_LOADING_AUCTION });
    axios.post('/auction/tiktok/create', data).then(res => {
        dispatch({
            type: START_USER_OFFER_AUCTION,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: STOP_LOADING_AUCTION })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_AUCTION });
    })
}

export const startOfferingTelegramAuction = (data) => (dispatch) => {
    dispatch({ type: START_LOADING_AUCTION });
    axios.post('/auction/facebook/create', data).then(res => {
        dispatch({
            type: START_USER_OFFER_AUCTION,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: STOP_LOADING_AUCTION })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_AUCTION });
    })
}

// User looking ads
export const startLookingFacebookAuction = (data) => (dispatch) => {
    dispatch({ type: START_LOADING_AUCTION });
    axios.post('/sellerauction/facebook/create', data).then(res => {
        dispatch({
            type: START_USER_OFFER_AUCTION,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: STOP_LOADING_AUCTION })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_AUCTION });
    })
}

export const startLookingInstagramAuction = (data) => (dispatch) => {
    dispatch({ type: START_LOADING_AUCTION });
    axios.post('/sellerauction/instagram/create', data).then(res => {
        dispatch({
            type: START_USER_OFFER_AUCTION,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: STOP_LOADING_AUCTION })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_AUCTION });
    })
}

export const startLookingTikTokAuction = (data) => (dispatch) => {
    dispatch({ type: START_LOADING_AUCTION });
    axios.post('/sellerauction/tiktok/create', data).then(res => {
        dispatch({
            type: START_USER_OFFER_AUCTION,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: STOP_LOADING_AUCTION })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_AUCTION });
    })
}

export const startLookingTelegramAuction = (data) => (dispatch) => {
    dispatch({ type: START_LOADING_AUCTION });
    axios.post('/sellerauction/telegram/create', data).then(res => {
        dispatch({
            type: START_USER_OFFER_AUCTION,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: STOP_LOADING_AUCTION })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS });
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_AUCTION });
    })
}

//////////////////////////////////////////
export const loadUserAllSearch = (type) => (dispatch) => {
    dispatch({ type: START_LOADING_ALL_SEARCH_USER_AUCTIONS });
    axios.get(`/sellerauction/${type}/user`).then(res => {
        dispatch({
            type: SET_USER_ALL_SEARCH_AUCTIONS,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_ALL_SEARCH_USER_AUCTIONS });
    })
}

export const loadUserActiveSearch = (type) => (dispatch) => {
    dispatch({ type: START_LOADING_ACTIVE_SEARCH_USER_AUCTIONS });
    axios.get(`/sellerauction/${type}/getactive`).then(res => {
        dispatch({
            type: SET_USER_ACTIVE_SEARCH_AUCTIONS,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_ACTIVE_SEARCH_USER_AUCTIONS });
    })
}

export const loadUserAllOffer = (type) => (dispatch) => {
    dispatch({ type: START_LOADING_ALL_OFFER_USER_AUCTIONS });
    axios.get(`/auction/${type}/user`).then(res => {
        dispatch({
            type: SET_USER_ALL_OFFER_AUCTIONS,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_ALL_OFFER_USER_AUCTIONS });
    })
}

export const loadUserActiveOffer = (type) => (dispatch) => {
    dispatch({ type: START_LOADING_ACTIVE_OFFER_USER_AUCTIONS });
    axios.get(`/auction/${type}/getactive`).then(res => {
        dispatch({
            type: SET_USER_ACTIVE_OFFER_AUCTIONS,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_ACTIVE_OFFER_USER_AUCTIONS });
    })
}

export const getAuctionSearchData = (app, auctionId) => (dispatch) => {
    dispatch({ type: START_LOADING_UNIQUE_AUCTION });
    axios.get(`/sellerauction/${app}/${auctionId}`).then(res => {
        dispatch({
            type: SET_UNIQUE_AUCTION,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_UNIQUE_AUCTION });
    })
}

export const getAuctionOfferData = (app, auctionId) => (dispatch) => {
    dispatch({ type: START_LOADING_UNIQUE_AUCTION });
    axios.get(`/auction/${app}/${auctionId}`).then(res => {
        dispatch({
            type: SET_UNIQUE_AUCTION,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_UNIQUE_AUCTION });
    })
}


export const addNewOfferPrice = (newPrice, auctionId, app) => (dispatch) => {
    dispatch({ type: START_LOADING_NEW_AUCTION_PRICE });
    axios.post(`/auction/${app}/newprice/${auctionId}`, newPrice).then(() => {
        dispatch({ type: STOP_LOADING_NEW_AUCTION_PRICE })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_NEW_AUCTION_PRICE });
    })
}

export const addNewSearchPrice = (newPrice, auctionId, app) => (dispatch) => {
    dispatch({ type: START_LOADING_NEW_AUCTION_PRICE });
    axios.post(`/sellerauction/${app}/newprice/${auctionId}`, newPrice).then(() => {
        dispatch({ type: STOP_LOADING_NEW_AUCTION_PRICE })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_NEW_AUCTION_PRICE });
    })
}