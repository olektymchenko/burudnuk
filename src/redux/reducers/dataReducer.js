import {
    LOADING_DEALS, STOP_LOADING_DEALS, SET_DEALS,
    LOADING_ACCEPTED_DEALS, STOP_LOADING_ACCEPTED_DEALS, SET_ACCEPTED_DEALS,
    LOADING_USER_NOTIFICATIONS, STOP_LOADING_USER_NOTIFiCATIONS, SET_USER_NOTIFICATIONS, CLEAR_NOTIFICATIONS,
    START_LOADING_SELLER_DEALSLIST, STOP_LOADING_SELLER_DEALSLIST, SET_SELLER_DEALSLIST,
    START_LOADING_CLIENT_DEALSLIST, STOP_LOADING_CLIENT_DEALSLIST, SET_CLIENT_DEALSLIST,
    START_LOADING_MESSAGES, STOP_LOADING_MESSAGES, SET_MESSAGES
} from '../types';

const initialState = {
    deals: [],
    acceptedDeals: [],
    notifications: [],
    loading: false,
    calendarloading: false,
    notificationsloading: false,
    listofsellerdeals: [],
    listofclientdeals: [],
    listofmessages: [],
    loadinglistofsellerdeals: false,
    loadinglistofclientdeals: false,
    loadinglistofmessages: false
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
        case CLEAR_NOTIFICATIONS:
            return {
                ...state,
                notifications: []
            }
        // Working with messages

        case START_LOADING_SELLER_DEALSLIST: // working with list of accepted deals by user
            return {
                ...state,
                loadinglistofsellerdeals: true
            }
        case STOP_LOADING_SELLER_DEALSLIST:
            return {
                ...state,
                loadinglistofsellerdeals: false
            }
        case SET_SELLER_DEALSLIST:
            return {
                ...state,
                listofsellerdeals: action.payload,
                loadinglistofsellerdeals: false
            }

        case START_LOADING_CLIENT_DEALSLIST: // working with list of accepted deals sended by user
            return {
                ...state,
                loadinglistofclientdeals: true
            }
        case STOP_LOADING_CLIENT_DEALSLIST:
            return {
                ...state,
                loadinglistofclientdeals: false
            }
        case SET_CLIENT_DEALSLIST:
            return {
                ...state,
                listofclientdeals: action.payload,
                loadinglistofclientdeals: false
            }


        case START_LOADING_MESSAGES: // loading all messages connected to unique deal
            return {
                ...state,
                loadinglistofmessages: true
            }
        case STOP_LOADING_MESSAGES:
            return {
                ...state,
                loadinglistofmessages: false
            }
        case SET_MESSAGES:
            return {
                ...state,
                listofmessages: action.payload,
                loadinglistofmessages: false
            }

        default:
            return state;
    }
}