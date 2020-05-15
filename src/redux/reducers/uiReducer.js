import {
    SET_ERRORS, CLEAR_ERRORS, LOADING_UI, STOP_LOADING_UI, DEAL_SUCCESS, SET_COMMENT_SUCCESS,
    START_USER_OFFER_AUCTION, START_USER_LOOKING_AUCTION,
    START_LOADING_AUCTION, STOP_LOADING_AUCTION
} from '../types';

const initialState = {
    loading: false,
    errors: null,
    success: false,
    general: null,
    loadingauction: false

};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null,
                general: null
            }
        case DEAL_SUCCESS:
            return {
                ...state,
                success: true,
                general: action.payload
            }
        case START_USER_OFFER_AUCTION:
            return {
                ...state,
                general: action.payload,
                errors: null
            }
        case START_USER_LOOKING_AUCTION:
            return {
                ...state,
                general: action.payload,
                errors: null
            }
        case SET_COMMENT_SUCCESS:
            return {
                ...state,
                general: action.payload
            }
        case START_LOADING_AUCTION:
            return {
                ...state,
                loadingauction: true
            }

        case STOP_LOADING_AUCTION:
            return {
                ...state,
                loadingauction: false
            }

        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false,
                success: false
            }
        default:
            return state;
    }
}