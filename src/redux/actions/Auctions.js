import {
    CLEAR_ERRORS, SET_ERRORS, START_USER_OFFER_AUCTION, START_LOADING_AUCTION, STOP_LOADING_AUCTION,
    START_LOADING_ALL_SEARCH_USER_AUCTIONS, STOP_LOADING_ALL_SEARCH_USER_AUCTIONS, SET_USER_ALL_SEARCH_AUCTIONS,
    START_LOADING_ACTIVE_SEARCH_USER_AUCTIONS, STOP_LOADING_ACTIVE_SEARCH_USER_AUCTIONS, SET_USER_ACTIVE_SEARCH_AUCTIONS,
    START_LOADING_ALL_OFFER_USER_AUCTIONS, STOP_LOADING_ALL_OFFER_USER_AUCTIONS, SET_USER_ALL_OFFER_AUCTIONS,
    START_LOADING_ACTIVE_OFFER_USER_AUCTIONS, STOP_LOADING_ACTIVE_OFFER_USER_AUCTIONS, SET_USER_ACTIVE_OFFER_AUCTIONS,
    START_LOADING_UNIQUE_AUCTION, STOP_LOADING_UNIQUE_AUCTION, SET_UNIQUE_AUCTION,
    START_LOADING_NEW_AUCTION_PRICE, STOP_LOADING_NEW_AUCTION_PRICE,
    START_LOADING_SNAPSHOT_AUCTION, STOP_LOADING_SNAPSHOT_AUCTION, SET_LOADING_SNAPSHOT_AUCTION,
    START_LOADING_ALL_AUCTIONS, STOP_LOADING_ALL_AUCTIONS,
    SET_ALL_FACEBOOK_AUCTIONS, SET_ALL_INSTAGRAM_AUCTIONS, SET_ALL_TIKTOK_AUCTIONS, SET_ALL_TELEGRAM_AUCTIONS,
    START_LOADING_USER_RANKING, STOP_LOADING_USER_RANKING, SET_USER_RANKING
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
    axios.post('/auction/telegram/create', data).then(res => {
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

////////////////////////////////////////// load user own search auctions
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
// load all active search auctions
export const loadUserActiveSearch = (type, data) => (dispatch) => {
    dispatch({ type: START_LOADING_ACTIVE_SEARCH_USER_AUCTIONS });
    axios.post(`/sellerauction/${type}/getactive`, data).then(res => {
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

// load own user offer auctions
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
// load all active search auctions
export const loadUserActiveOffer = (type, data) => (dispatch) => {
    dispatch({ type: START_LOADING_ACTIVE_OFFER_USER_AUCTIONS });
    axios.post(`/auction/${type}/getactive`, data).then(res => {
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
// get info about search auction using ID
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
// get info about search auction using ID
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

// Adding new price to auctions
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

export const updateAuctionData = (newData) => (dispatch) => {
    dispatch({ type: START_LOADING_SNAPSHOT_AUCTION });
    dispatch({
        type: SET_LOADING_SNAPSHOT_AUCTION,
        payload: newData
    });
    dispatch({ type: STOP_LOADING_SNAPSHOT_AUCTION })
}

export const getUsersRanking = (app, data) => (dispatch) => {
    dispatch({ type: START_LOADING_USER_RANKING })
    axios.post(`/ranking/${app}`, data).then(res => {
        dispatch({
            type: SET_USER_RANKING,
            payload: res.data
        })
    }).then(() => {
        dispatch({ type: CLEAR_ERRORS })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_USER_RANKING });
    })
}

export const getDataForMainPage = () => (dispatch) => {
    dispatch({ type: START_LOADING_ALL_AUCTIONS });
    axios.get(`/auction/home/facebook/getactive`).then(res => {
        dispatch({
            type: SET_ALL_FACEBOOK_AUCTIONS,
            payload: res.data
        })
    }).then(() => {
        axios.get(`/auction/home/instagram/getactive`).then(res => {
            dispatch({
                type: SET_ALL_INSTAGRAM_AUCTIONS,
                payload: res.data
            })
        }).then(() => {
            axios.get(`/auction/home/tiktok/getactive`).then(res => {
                dispatch({
                    type: SET_ALL_TIKTOK_AUCTIONS,
                    payload: res.data
                })
            }).then(() => {
                axios.get(`/auction/home/telegram/getactive`).then(res => {
                    dispatch({
                        type: SET_ALL_TELEGRAM_AUCTIONS,
                        payload: res.data
                    })
                }).then(() => {
                    dispatch({ type: STOP_LOADING_ALL_AUCTIONS })
                }).catch(err => {
                    dispatch({
                        type: SET_ERRORS,
                        payload: err.response.data
                    })
                    dispatch({ type: STOP_LOADING_ALL_AUCTIONS });
                })
            })
        })
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        dispatch({ type: STOP_LOADING_ALL_AUCTIONS });
    })
}