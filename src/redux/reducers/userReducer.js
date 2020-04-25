import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER, LOADING_USER } from '../types';

const initialState = {
    authenticated: false,
    userdata: {},
    clientdata: {},
    sellerdata: {},
    notifications: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState;
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        case SET_USER:
            return {
                ...state,
                userdata: action.payload,
                loading: false
            }
        default:
            return state;
    };

}