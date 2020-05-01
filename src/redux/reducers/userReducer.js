import {
    SET_AUTHENTICATED, SET_UNAUTHENTICATED,
    SET_USER, LOADING_USER, SET_SELLER, BECOME_FACEBOOK_SELLER,
    STOP_LOADING_USER, SET_ANOTHER_USER, SET_ANOTHER_FACEBOOK,
    SET_ANOTHER_INSTAGRAM, SET_ANOTHER_TIKTOK, SET_ANOTHER_TELEGRAM,
    SET_LOADING_FACEBOOK, SET_LOADING_INSTAGRAM, SET_LOADING_TIKOK, SET_LOADING_TELEGRAM,
    STOP_LOADING_FACEBOOK, STOP_LOADING_INSTAGRAM, STOP_LOADING_TIKOK, STOP_LOADING_TELEGRAM,
    LIKE_SELLER, DISLIKE_SELLER, COMMENT_SELLER, STOP_LIKE_SELLER, STOP_DISLIKE_SELLER, STOP_COMMENT_SELLER
} from '../types';

const initialState = {
    authenticated: false,
    userdata: {},
    anotheruser: {},
    anotherfacebook: {},
    anotherinstagram: {},
    anothertiktok: {},
    anothertelegram: {},
    sellerdata: {},
    notifications: [],
    loading: false,
    loadingfacebook: false,
    loadinginstagram: false,
    loadingtiktok: false,
    loadingtelegram: false
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
        /* Working with like/dislik/comment action/////////////////////////// */
        case LIKE_SELLER:
            return {
                ...state,
                loadingfacebook: true,
                loadinginstagram: true,
                loadingtiktok: true,
                loadingtelegram: true
            }

        case DISLIKE_SELLER:
            return {
                ...state,
                loadingfacebook: true,
                loadinginstagram: true,
                loadingtiktok: true,
                loadingtelegram: true
            }

        case COMMENT_SELLER:
            return {
                ...state,
                loadingfacebook: true,
                loadinginstagram: true,
                loadingtiktok: true,
                loadingtelegram: true
            }

        case STOP_LIKE_SELLER:
            return {
                ...state,
                loadingfacebook: false,
                loadinginstagram: false,
                loadingtiktok: false,
                loadingtelegram: false
            }

        case STOP_DISLIKE_SELLER:
            return {
                ...state,
                loadingfacebook: false,
                loadinginstagram: false,
                loadingtiktok: false,
                loadingtelegram: false
            }
        case STOP_COMMENT_SELLER:
            return {
                ...state,
                loadingfacebook: false,
                loadinginstagram: false,
                loadingtiktok: false,
                loadingtelegram: false
            }
        /* Action to get another user data ///////////////////////////////////////////// */
        case SET_ANOTHER_USER:
            return {
                ...state,
                anotheruser: action.payload,
                loading: false
            }
        /* Actions to get another user seller data */
        case SET_ANOTHER_FACEBOOK:
            return {
                ...state,
                anotherfacebook: action.payload,
                loadingfacebook: false
            }
        case SET_ANOTHER_INSTAGRAM:
            return {
                ...state,
                anotherinstagram: action.payload,
                loadinginstagram: false
            }
        case SET_ANOTHER_TIKTOK:
            return {
                ...state,
                anothertiktok: action.payload,
                loadingtiktok: false
            }
        case SET_ANOTHER_TELEGRAM:
            return {
                ...state,
                anothertelegram: action.payload,
                loadingtelegram: false
            }
        case SET_LOADING_FACEBOOK:
            return {
                ...state,
                loadingfacebook: true
            }
        case SET_LOADING_INSTAGRAM:
            return {
                ...state,
                loadinginstagram: true
            }
        case SET_LOADING_TIKOK:
            return {
                ...state,
                loadingtiktok: true
            }

        case SET_LOADING_TELEGRAM:
            return {
                ...state,
                loadingtelegram: true
            }

        case STOP_LOADING_FACEBOOK:
            return {
                ...state,
                loadingfacebook: false
            }
        case STOP_LOADING_INSTAGRAM:
            return {
                ...state,
                loadinginstagram: false
            }
        case STOP_LOADING_TIKOK:
            return {
                ...state,
                loadingtiktok: false
            }

        case STOP_LOADING_TELEGRAM:
            return {
                ...state,
                loadingtelegram: false
            }

        /* Action to start selling on facebook */
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