//Main reducers type
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';

//UI reducer types
export const SET_ERRORS = 'SET_ERRORS';
export const LOADING_UI = 'LOADING_UI';
export const STOP_LOADING_UI = 'STOP_LOADING_UI';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const LOADING_DATA = 'LOADING_DATA';
export const SET_COMMENT_SUCCESS = 'SET_COMMENT_SUCCESS';

//Users reducer
export const LOADING_USER = 'LOADING_USER';
export const STOP_LOADING_USER = 'STOP_LOADING_USER'
export const SET_USER = 'SET_USER';
export const BECOME_FACEBOOK_SELLER = 'BECOME_FACEBOOK_SELLER';
export const BECOME_INSTAGRAM_SELLER = 'BECOME_INSTAGRAM_SELLER';
export const BECOME_TIKTOK_SELLER = 'BECOME_TIKTOK_SELLER';
export const BECOME_TELEGRAM_SELLER = 'BECOME_TELEGRAM_SELLER';
export const SET_ANOTHER_USER = 'SET_ANOTHER_USER';
export const SET_ANOTHER_FACEBOOK = 'SET_ANOTHER_FACEBOOK';
export const SET_ANOTHER_INSTAGRAM = 'SET_ANOTHER_INSTAGRAM';
export const SET_ANOTHER_TIKTOK = 'SET_ANOTHER_TIKTOK';
export const SET_ANOTHER_TELEGRAM = 'SET_ANOTHER_TELEGRAM';
export const SET_LOADING_FACEBOOK = 'SET_LOADING_FACEBOOK';
export const SET_LOADING_INSTAGRAM = 'SET_LOADING_INSTAGRAM';
export const SET_LOADING_TIKOK = 'SET_LOADING_TIKOK';
export const SET_LOADING_TELEGRAM = 'SET_LOADING_TELEGRAM'

export const STOP_LOADING_FACEBOOK = 'STOP_LOADING_FACEBOOK';
export const STOP_LOADING_INSTAGRAM = 'STOP_LOADING_INSTAGRAM';
export const STOP_LOADING_TIKOK = 'STOP_LOADING_TIKOK';
export const STOP_LOADING_TELEGRAM = 'STOP_LOADING_TELEGRAM';

//Seller reducer types

export const SET_SELLER = 'SET_SELLER';
export const LOADING_SELLER = 'LOADING_SELLER';
export const LOADING_SELLER_DEALS = 'LOADING_SELLER_DEALS';
export const ADD_SELLER_DEAL_COUNT = 'ADD_SELLER_DEAL_COUNT';

//Data reducer
export const LIKE_SELLER = 'LIKE_SELLER';
export const DISLIKE_SELLER = 'DISLIKE_SELLER';
export const COMMENT_SELLER = 'COMMENT_SELLER';
export const STOP_LIKE_SELLER = 'STOP_LIKE_SELLER';
export const STOP_DISLIKE_SELLER = 'STOP_DISLIKE_SELLER';
export const STOP_COMMENT_SELLER = 'STOP_COMMENT_SELLER';

export const ADD_FACEBOOK_LIKE_COUNT = 'ADD_FACEBOOK_LIKE_COUNT';
export const ADD_FACEBOOK_DISLIKE_COUNT = 'ADD_FACEBOOK_DISLIKE_COUNT';
export const ADD_FACEBOOK_COMMENT_COUNT = 'ADD_FACEBOOK_COMMENT_COUNT';

export const ADD_INSTAGRAM_LIKE_COUNT = 'ADD_INSTAGRAM_LIKE_COUNT';
export const ADD_INSTAGRAM_DISLIKE_COUNT = 'ADD_INSTAGRAM_DISLIKE_COUNT';
export const ADD_INSTAGRAM_COMMENT_COUNT = 'ADD_INSTAGRAM_COMMENT_COUNT';

export const ADD_TIKTOK_LIKE_COUNT = 'ADD_TIKTOK_LIKE_COUNT';
export const ADD_TIKTOK_DISLIKE_COUNT = 'ADD_TIKTOK_DISLIKE_COUNT';
export const ADD_TIKTOK_COMMENT_COUNT = 'ADD_TIKTOK_COMMENT_COUNT';

export const ADD_TELEGRAM_LIKE_COUNT = 'ADD_TELEGRAM_LIKE_COUNT';
export const ADD_TELEGRAM_DISLIKE_COUNT = 'ADD_TELEGRAM_DISLIKE_COUNT';
export const ADD_TELEGRAM_COMMENT_COUNT = 'ADD_TELEGRAM_COMMENT_COUNT';




//DEALS

export const DEAL_SUCCESS = 'DEAL_SUCCESS';
// LOADING DEALS SENDED TO CLIENT
export const LOADING_DEALS = 'LOADING_DEALS';
export const SET_DEALS = 'SET_DEALS';
export const STOP_LOADING_DEALS = 'STOP_LOADING_DEALS';
export const LOADING_ACCEPTED_DEALS = 'LOADING_ACCEPTED_DEALS';
export const STOP_LOADING_ACCEPTED_DEALS = 'STOP_LOADING_ACCEPTED_DEALS';
export const SET_ACCEPTED_DEALS = 'SET_ACCEPTED_DEALS';
//WORKING WITH NOTIFICATIONS
export const SET_USER_NOTIFICATIONS = 'GET_USER_NOTIFICATIONS';
export const LOADING_USER_NOTIFICATIONS = 'LOADING_USER_NOTIFICATIONS';
export const STOP_LOADING_USER_NOTIFiCATIONS = 'STOP_LOADING_USER_NOTIFiCATIONS';
export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';


//Messages
// LOADING LIST OF MESSAGES SENDED TO SELLER
export const START_LOADING_SELLER_DEALSLIST = 'START_LOADING_SELLER_DEALSLIST';
export const STOP_LOADING_SELLER_DEALSLIST = 'STOP_LOADING_SELLER_DEALSLIST';
export const SET_SELLER_DEALSLIST = 'SET_SELLER_DEALSLIST';

// LOADING LIST OF MESSAGES SENDED BY SELLER
export const START_LOADING_CLIENT_DEALSLIST = 'START_LOADING_CLIENT_DEALSLIST';
export const STOP_LOADING_CLIENT_DEALSLIST = 'STOP_LOADING_CLIENT_DEALSLIST';
export const SET_CLIENT_DEALSLIST = 'SET_CLIENT_DEALSLIST';

//LOADING ALL MESSAGES CONNECTED WITH DEAL
export const START_LOADING_MESSAGES = 'START_LOADING_MESSAGES';
export const STOP_LOADING_MESSAGES = 'STOP_LOADING_MESSAGES';
export const SET_MESSAGES = 'SET_MESSAGES';

// Auctions
// MAKING AUCTION FORMS
export const START_USER_OFFER_AUCTION = 'START_USER_OFFER_AUCTION';
export const START_USER_LOOKING_AUCTION = 'START_USER_LOOKING_AUCTION';
export const START_LOADING_AUCTION = 'START_LOADING_AUCTION';
export const STOP_LOADING_AUCTION = 'STOP_LOADING_AUCTION';

// LOAD AND SEARCH ALL USER SEARCH AUCTIONS
export const START_LOADING_ALL_SEARCH_USER_AUCTIONS = 'START_LOADING_ALL_SEARCH_USER_AUCTIONS';
export const STOP_LOADING_ALL_SEARCH_USER_AUCTIONS = 'STOP_LOADING_ALL_SEARCH_USER_AUCTIONS';
export const SET_USER_ALL_SEARCH_AUCTIONS = 'SET_USER_ALL_SEARCH_AUCTIONS';

// LOAD AND SEARCH ACTIVE USER SEARCH AUCTIONS
export const START_LOADING_ACTIVE_SEARCH_USER_AUCTIONS = 'START_LOADING_ACTIVE_SEARCH_USER_AUCTIONS';
export const STOP_LOADING_ACTIVE_SEARCH_USER_AUCTIONS = 'STOP_LOADING_ACTIVE_SEARCH_USER_AUCTIONS';
export const SET_USER_ACTIVE_SEARCH_AUCTIONS = 'SET_USER_ACTIVE_SEARCH_AUCTIONS';
////////////////////////////////////////////////////////////////////////////////////////////
// LOAD AND SEARCH ALL USER OFFER AUCTIONS
export const START_LOADING_ALL_OFFER_USER_AUCTIONS = 'START_LOADING_ALL_OFFER_USER_AUCTIONS';
export const STOP_LOADING_ALL_OFFER_USER_AUCTIONS = 'STOP_LOADING_ALL_OFFER_USER_AUCTIONS';
export const SET_USER_ALL_OFFER_AUCTIONS = 'SET_USER_ALL_OFFER_AUCTIONS';

//LOAD AND SEARCH ACTIVE USER OFFER AUCTIONS
export const START_LOADING_ACTIVE_OFFER_USER_AUCTIONS = 'START_LOADING_ACTIVE_OFFER_USER_AUCTIONS';
export const STOP_LOADING_ACTIVE_OFFER_USER_AUCTIONS = 'STOP_LOADING_ACTIVE_OFFER_USER_AUCTIONS';
export const SET_USER_ACTIVE_OFFER_AUCTIONS = 'SET_USER_ACTIVE_OFFER_AUCTIONS';

//LOADING DATA FOR UNIQUE AUCTION

export const START_LOADING_UNIQUE_AUCTION = 'START_LOADING_UNIQUE_AUCTION';
export const STOP_LOADING_UNIQUE_AUCTION = 'STOP_LOADING_UNIQUE_AUCTION';
export const SET_UNIQUE_AUCTION = 'SET_UNIQUE_AUCTION';

//OFFERING NEW PRICE

export const START_LOADING_NEW_AUCTION_PRICE = 'START_LOADING_NEW_AUCTION_PRICE';
export const STOP_LOADING_NEW_AUCTION_PRICE = 'STOP_LOADING_NEW_AUCTION_PRICE';

// UPDATING AUCTION REALTIME

export const START_LOADING_SNAPSHOT_AUCTION = 'START_LOADING_SNAPSHOT_AUCTION';
export const STOP_LOADING_SNAPSHOT_AUCTION = 'STOP_LOADING_SNAPSHOT_AUCTION';
export const SET_LOADING_SNAPSHOT_AUCTION = 'SET_LOADING_SNAPSHOT_AUCTION';
//Loading auction on main page

export const START_LOADING_ALL_AUCTIONS = 'START_LOADING_ALL_AUCTIONS';
export const STOP_LOADING_ALL_AUCTIONS = 'STOP_LOADING_ALL_AUCTIONS';

export const SET_ALL_FACEBOOK_AUCTIONS = 'SET_ALL_FACEBOOK_AUCTIONS';
export const SET_ALL_INSTAGRAM_AUCTIONS = 'SET_ALL_INSTAGRAM_AUCTIONS';
export const SET_ALL_TIKTOK_AUCTIONS = 'SET_ALL_TIKTOK_AUCTIONS';
export const SET_ALL_TELEGRAM_AUCTIONS = 'SET_ALL_TELEGRAM_AUCTIONS';

// LOADING USER RANKING

export const START_LOADING_USER_RANKING = 'START_LOADING_USER_RANKING';
export const STOP_LOADING_USER_RANKING = 'STOP_LOADING_USER_RANKING';
export const SET_USER_RANKING = 'SET_USER_RANKING';
