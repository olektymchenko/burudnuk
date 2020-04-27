import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER, LOADING_USER, SET_SELLER, BECOME_FACEBOOK_SELLER, STOP_LOADING_USER } from '../types';

const initialState = {
    authenticated: false,
    userdata: {},
    sellerdata: {},
    notifications: [],
    loading: false
***REMOVED***

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            ***REMOVED***
        case SET_UNAUTHENTICATED:
            return initialState;
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING_USER:
            return {
                ...state,
                loading: false
            }
        case SET_USER:
            return {
                ...state,
                userdata: action.payload,
                loading: false
            }
        case SET_SELLER:
            return {
                ...state,
                sellerdata: action.payload,
                loading: false
            }
        case BECOME_FACEBOOK_SELLER:
            return {
                ...state,
                userdata: {
                    ...state.userdata,
                    facebook: true
                }
            }
        default:
            return state;
    ***REMOVED***

}