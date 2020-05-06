import {
    LOADING_DEALS, STOP_LOADING_DEALS, SET_DEALS,
    LOADING_ACCEPTED_DEALS, STOP_LOADING_ACCEPTED_DEALS, SET_ACCEPTED_DEALS,
    LOADING_USER_NOTIFICATIONS, STOP_LOADING_USER_NOTIFiCATIONS, SET_USER_NOTIFICATIONS
} from '../types';

const initialState = {
    deals: [],
    acceptedDeals: [],
    notifications: [],
    loading: false,
    calendarloading: false,
    notificationsloading: false
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
        case LOADING_USER_NOTIFICATIONS:
            return {
                ...state,
                notificationsloading: true
            }
        case STOP_LOADING_USER_NOTIFiCATIONS:
            return {
                ...state,
                notificationsloading: false
            }
        case SET_USER_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload,
                notificationsloading: false
            }
        default:
            return state;
    }
}