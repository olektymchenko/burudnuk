import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, STOP_LOADING_UI, DEAL_SUCCESS } from '../types';

const initialState = {
    loading: false,
    errors: null,
    success: false,
    general: null
***REMOVED***

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            ***REMOVED***
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