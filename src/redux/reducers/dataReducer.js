import { LOADING_DEALS, STOP_LOADING_DEALS, SET_DEALS, LOADING_ACCEPTED_DEALS, STOP_LOADING_ACCEPTED_DEALS, SET_ACCEPTED_DEALS } from '../types';

const initialState = {
    deals: [],
    acceptedDeals: [],
    loading: false,
    calendarloading: false
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
        case LOADING_ACCEPTED_DEALS:
            return {
                ...state,
                calendarloading: true
            }
        case STOP_LOADING_ACCEPTED_DEALS:
            return {
                ...state,
                calendarloading: false
            }
        case SET_ACCEPTED_DEALS:
            return {
                ...state,
                acceptedDeals: action.payload,
                calendarloading: false
            }
        default:
            return state;
    }
}