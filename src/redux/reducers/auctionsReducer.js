import {
    START_LOADING_ALL_SEARCH_USER_AUCTIONS, STOP_LOADING_ALL_SEARCH_USER_AUCTIONS, SET_USER_ALL_SEARCH_AUCTIONS,
    START_LOADING_ACTIVE_SEARCH_USER_AUCTIONS, STOP_LOADING_ACTIVE_SEARCH_USER_AUCTIONS, SET_USER_ACTIVE_SEARCH_AUCTIONS,
    START_LOADING_ALL_OFFER_USER_AUCTIONS, STOP_LOADING_ALL_OFFER_USER_AUCTIONS, SET_USER_ALL_OFFER_AUCTIONS,
    START_LOADING_ACTIVE_OFFER_USER_AUCTIONS, STOP_LOADING_ACTIVE_OFFER_USER_AUCTIONS, SET_USER_ACTIVE_OFFER_AUCTIONS,
    START_LOADING_UNIQUE_AUCTION, STOP_LOADING_UNIQUE_AUCTION, SET_UNIQUE_AUCTION,
    START_LOADING_NEW_AUCTION_PRICE, STOP_LOADING_NEW_AUCTION_PRICE,
    START_LOADING_SNAPSHOT_AUCTION, STOP_LOADING_SNAPSHOT_AUCTION, SET_LOADING_SNAPSHOT_AUCTION
} from '../types';

const initialState = {
    userSearchAll: null,
    userSearchActive: null,
    userOfferAll: null,
    userOfferActive: null,
    uniqueAuction: null,
    loadingauctions: false,
    loadingnewprice: false,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case START_LOADING_ALL_SEARCH_USER_AUCTIONS: // WORKING WITH ALL USER SEARCH AUCTIONS
            return {
                ...state,
                loadingauctions: true,
                userSearchAll: [],
                userSearchActive: [],
                userOfferAll: [],
                userOfferActive: [],
            }

        case STOP_LOADING_ALL_SEARCH_USER_AUCTIONS: // WORKING WITH ALL USER SEARCH AUCTIONS
            return {
                ...state,
                loadingauctions: false
            }
        case SET_USER_ALL_SEARCH_AUCTIONS: // WORKING WITH ALL USER SEARCH AUCTIONS
            return {
                ...state,
                userSearchAll: action.payload,
                loadingauctions: false
            }
        case START_LOADING_ACTIVE_SEARCH_USER_AUCTIONS: // WORKING WITH ACTIVE SEARCH AUCTIONS
            return {
                ...state,
                loadingauctions: true,
                userSearchAll: [],
                userSearchActive: [],
                userOfferAll: [],
                userOfferActive: [],
            }
        case STOP_LOADING_ACTIVE_SEARCH_USER_AUCTIONS: // WORKING WITH ACTIVE SEARCH AUCTIONS
            return {
                ...state,
                loadingauctions: false
            }
        /////////////////////////////////////////////////////////////////////////////////////////////

        case SET_USER_ACTIVE_SEARCH_AUCTIONS: // WORKING WITH ACTIVE SEARCH AUCTIONS
            return {
                ...state,
                userSearchActive: action.payload,
                loadingauctions: false
            }
        case START_LOADING_ALL_OFFER_USER_AUCTIONS: // WORKING WITH ALL OFFER AUCTIONS
            return {
                ...state,
                loadingauctions: true,
                userSearchAll: [],
                userSearchActive: [],
                userOfferAll: [],
                userOfferActive: [],
            }
        case STOP_LOADING_ALL_OFFER_USER_AUCTIONS: // WORKING WITH ALL OFFER AUCTIONS
            return {
                ...state,
                loadingauctions: false
            }
        case SET_USER_ALL_OFFER_AUCTIONS: // WORKING WITH ALL OFFER AUCTIONS
            return {
                ...state,
                userOfferAll: action.payload,
                loadingauctions: false
            }

        case START_LOADING_ACTIVE_OFFER_USER_AUCTIONS:
            return {
                ...state,
                loadingauctions: true,
                userSearchAll: [],
                userSearchActive: [],
                userOfferAll: [],
                userOfferActive: [],
            }
        case STOP_LOADING_ACTIVE_OFFER_USER_AUCTIONS:
            return {
                ...state,
                loadingauctions: false
            }
        case SET_USER_ACTIVE_OFFER_AUCTIONS:
            return {
                ...state,
                userOfferActive: action.payload,
                loadingauctions: false
            }
        case START_LOADING_UNIQUE_AUCTION:
            return {
                ...state,
                loadingauctions: true
            }
        case STOP_LOADING_UNIQUE_AUCTION:
            return {
                ...state,
                loadingauctions: false
            }
        case SET_UNIQUE_AUCTION:
            return {
                ...state,
                uniqueAuction: action.payload,
                loadingauctions: false
            }
        case START_LOADING_NEW_AUCTION_PRICE:
            return {
                ...state,
                loadingnewprice: true
            }
        case STOP_LOADING_NEW_AUCTION_PRICE:
            return {
                ...state,
                loadingnewprice: false
            }
        case START_LOADING_SNAPSHOT_AUCTION:
            return {
                ...state,
                loadingauctions: true
            }
        case STOP_LOADING_SNAPSHOT_AUCTION:
            return {
                ...state,
                loadingauctions: false
            }
        case SET_LOADING_SNAPSHOT_AUCTION:
            return {
                ...state,
                uniqueAuction: action.payload,
                loadingauctions: false
            }
        default:
            return state;

    }
}