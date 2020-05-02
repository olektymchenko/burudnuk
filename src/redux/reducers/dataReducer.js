import { LOADING_DEALS, STOP_LOADING_DEALS, SET_DEALS } from '../types';

const initialState = {
    deals: [],
    loading: false
}
export default function (state = initialState, action) {

    switch (action.type) {
        case LOADING_DEALS:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING_DEALS:
            return {
                ...state,
                loading: false
            }
        case SET_DEALS:
            return {
                ...state,
                deals: action.payload,
                loading: false
            }
        default:
            return state;
    }
}