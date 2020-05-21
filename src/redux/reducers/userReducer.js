import {
    SET_AUTHENTICATED, SET_UNAUTHENTICATED,
    SET_USER, LOADING_USER, SET_SELLER, BECOME_FACEBOOK_SELLER, BECOME_INSTAGRAM_SELLER, BECOME_TIKTOK_SELLER, BECOME_TELEGRAM_SELLER,
    STOP_LOADING_USER, SET_ANOTHER_USER, SET_ANOTHER_FACEBOOK,
    SET_ANOTHER_INSTAGRAM, SET_ANOTHER_TIKTOK, SET_ANOTHER_TELEGRAM,
    SET_LOADING_FACEBOOK, SET_LOADING_INSTAGRAM, SET_LOADING_TIKOK, SET_LOADING_TELEGRAM,
    STOP_LOADING_FACEBOOK, STOP_LOADING_INSTAGRAM, STOP_LOADING_TIKOK, STOP_LOADING_TELEGRAM,
    LIKE_SELLER, DISLIKE_SELLER, COMMENT_SELLER, STOP_LIKE_SELLER, STOP_DISLIKE_SELLER, STOP_COMMENT_SELLER,
    ADD_FACEBOOK_LIKE_COUNT, ADD_FACEBOOK_DISLIKE_COUNT, ADD_FACEBOOK_COMMENT_COUNT,
    ADD_INSTAGRAM_LIKE_COUNT, ADD_INSTAGRAM_DISLIKE_COUNT, ADD_INSTAGRAM_COMMENT_COUNT,
    ADD_TIKTOK_LIKE_COUNT, ADD_TIKTOK_DISLIKE_COUNT, ADD_TIKTOK_COMMENT_COUNT,
    ADD_TELEGRAM_LIKE_COUNT, ADD_TELEGRAM_DISLIKE_COUNT, ADD_TELEGRAM_COMMENT_COUNT,
    ADD_SELLER_DEAL_COUNT
} from '../types';

const initialState = {
    authenticated: false,
    userdata: {},
    anotheruser: {},
    anotherfacebook: {
        mainInfo: {
            commentCount: '',
            likeCount: '',
            dislikeCount: ''
        }
    },
    anotherinstagram: {
        mainInfo: {
            commentCount: '',
            likeCount: '',
            dislikeCount: ''
        }
    },
    anothertiktok: {
        mainInfo: {
            commentCount: '',
            likeCount: '',
            dislikeCount: '',

        }
    },
    anothertelegram: {
        mainInfo: {
            commentCount: '',
            likeCount: '',
            dislikeCount: ''
        }
    },
    sellerdata: {
        mainInfo: {
            dealsCount: ''
        }
    },
    notifications: [],
    loading: false,
    loadingfacebook: false,
    loadinginstagram: false,
    loadingtiktok: false,
    loadingtelegram: false
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

        /* Adding like to user with sending new request, in local state */
        case ADD_FACEBOOK_LIKE_COUNT:
            return {
                ...state,
                anotherfacebook: {
                    ...state.anotherfacebook,
                    mainInfo: {
                        ...state.anotherfacebook.mainInfo,
                        likeCount: state.anotherfacebook.mainInfo.likeCount + 1
                    }
                }
            }
        case ADD_INSTAGRAM_LIKE_COUNT:
            return {
                ...state,
                anotherinstagram: {
                    ...state.anotherinstagram,
                    mainInfo: {
                        ...state.anotherinstagram.mainInfo,
                        likeCount: state.anotherinstagram.mainInfo.likeCount + 1
                    }
                }
            }

        case ADD_TIKTOK_LIKE_COUNT:
            return {
                ...state,
                anothertiktok: {
                    ...state.anothertiktok,
                    mainInfo: {
                        ...state.anothertiktok.mainInfo,
                        likeCount: state.anothertiktok.mainInfo.likeCount + 1
                    }
                }
            }
        case ADD_TELEGRAM_LIKE_COUNT:
            return {
                ...state,
                anothertelegram: {
                    ...state.anothertelegram,
                    mainInfo: {
                        ...state.anothertelegram.mainInfo,
                        likeCount: state.anothertelegram.mainInfo.likeCount + 1
                    }
                }
            }
        /* Adding dislike to another user, without sending new server request */
        case ADD_FACEBOOK_DISLIKE_COUNT:
            return {
                ...state,
                anotherfacebook: {
                    ...state.anotherfacebook,
                    mainInfo: {
                        ...state.anotherfacebook.mainInfo,
                        dislikeCount: state.anotherfacebook.mainInfo.dislikeCount + 1
                    }
                }
            }
        case ADD_INSTAGRAM_DISLIKE_COUNT:
            return {
                ...state,
                anotherinstagram: {
                    ...state.anotherinstagram,
                    mainInfo: {
                        ...state.anotherinstagram.mainInfo,
                        dislikeCount: state.anotherinstagram.mainInfo.dislikeCount + 1
                    }
                }
            }

        case ADD_TIKTOK_DISLIKE_COUNT:
            return {
                ...state,
                anothertiktok: {
                    ...state.anothertiktok,
                    mainInfo: {
                        ...state.anothertiktok.mainInfo,
                        dislikeCount: state.anothertiktok.mainInfo.dislikeCount + 1
                    }
                }
            }
        case ADD_TELEGRAM_DISLIKE_COUNT:
            return {
                ...state,
                anothertelegram: {
                    ...state.anothertelegram,
                    mainInfo: {
                        ...state.anothertelegram.mainInfo,
                        dislikeCount: state.anothertelegram.mainInfo.dislikeCount + 1
                    }
                }
            }

        /* Add user comment count without page reload */

        case ADD_FACEBOOK_COMMENT_COUNT:
            return {
                ...state,
                anotherfacebook: {
                    ...state.anotherfacebook,
                    mainInfo: {
                        ...state.anotherfacebook.mainInfo,
                        commentCount: state.anotherfacebook.mainInfo.commentCount + 1
                    }
                }
            }
        case ADD_INSTAGRAM_COMMENT_COUNT:
            return {
                ...state,
                anotherinstagram: {
                    ...state.anotherinstagram,
                    mainInfo: {
                        ...state.anotherinstagram.mainInfo,
                        commentCount: state.anotherinstagram.mainInfo.commentCount + 1
                    }
                }
            }

        case ADD_TIKTOK_COMMENT_COUNT:
            return {
                ...state,
                anothertiktok: {
                    ...state.anothertiktok,
                    mainInfo: {
                        ...state.anothertiktok.mainInfo,
                        commentCount: state.anothertiktok.mainInfo.commentCount + 1
                    }
                }
            }
        case ADD_TELEGRAM_COMMENT_COUNT:
            return {
                ...state,
                anothertelegram: {
                    ...state.anothertelegram,
                    mainInfo: {
                        ...state.anothertelegram.mainInfo,
                        commentCount: state.anothertelegram.mainInfo.commentCount + 1
                    }
                }
            }

        /* Add accept deal if user accept deal without page reaload */
        case ADD_SELLER_DEAL_COUNT:
            return {
                ...state,
                sellerdata: {
                    ...state.sellerdata,
                    mainInfo: {
                        ...state.sellerdata.mainInfo,
                        dealsCount: state.sellerdata.mainInfo.dealsCount + 1
                    }
                }
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
        case BECOME_INSTAGRAM_SELLER:
            return {
                ...state,
                userdata: {
                    ...state.userdata,
                    instagram: true
                }
            }
        case BECOME_TIKTOK_SELLER:
            return {
                ...state,
                userdata: {
                    ...state.userdata,
                    tiktok: true
                }
            }
        case BECOME_TELEGRAM_SELLER:
            return {
                ...state,
                userdata: {
                    ...state.userdata,
                    telegram: true
                }
            }
        default:
            return state;
    };

}