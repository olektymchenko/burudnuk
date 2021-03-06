import {
  SET_USER,
  SET_SELLER,
  LOADING_USER,
  STOP_LOADING_USER,
  CLEAR_ERRORS,
  SET_ERRORS,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_ANOTHER_USER,
  BECOME_FACEBOOK_SELLER,
  BECOME_INSTAGRAM_SELLER,
  BECOME_TIKTOK_SELLER,
  BECOME_TELEGRAM_SELLER,
  SET_ANOTHER_FACEBOOK,
  SET_ANOTHER_INSTAGRAM,
  SET_ANOTHER_TIKTOK,
  SET_ANOTHER_TELEGRAM,
  SET_LOADING_FACEBOOK,
  SET_LOADING_INSTAGRAM,
  SET_LOADING_TIKOK,
  SET_LOADING_TELEGRAM,
  STOP_LOADING_FACEBOOK,
  STOP_LOADING_INSTAGRAM,
  STOP_LOADING_TIKOK,
  STOP_LOADING_TELEGRAM,
  LIKE_SELLER,
  DISLIKE_SELLER,
  STOP_LIKE_SELLER,
  STOP_DISLIKE_SELLER,
  DEAL_SUCCESS,
  ADD_FACEBOOK_LIKE_COUNT,
  ADD_FACEBOOK_DISLIKE_COUNT,
  ADD_FACEBOOK_COMMENT_COUNT,
  ADD_INSTAGRAM_LIKE_COUNT,
  ADD_INSTAGRAM_DISLIKE_COUNT,
  ADD_INSTAGRAM_COMMENT_COUNT,
  ADD_TIKTOK_LIKE_COUNT,
  ADD_TIKTOK_DISLIKE_COUNT,
  ADD_TIKTOK_COMMENT_COUNT,
  ADD_TELEGRAM_LIKE_COUNT,
  ADD_TELEGRAM_DISLIKE_COUNT,
  ADD_TELEGRAM_COMMENT_COUNT,
  SET_COMMENT_SUCCESS,
  LOADING_USER_NOTIFICATIONS,
  STOP_LOADING_USER_NOTIFiCATIONS,
  SET_USER_NOTIFICATIONS,
  CLEAR_NOTIFICATIONS,
} from "../types";
import axios from "axios";
import { persistor } from "../store";

/* Register user /////////////////////////////////////////////////////////////////////////// */
export const registerUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/register", newUserData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch({ type: CLEAR_ERRORS });
      history.push("/user");
    })
    .then(() => {
      dispatch({ type: SET_AUTHENTICATED });
    })
    .then(() => {
      axios.get("/users/seller").then((r) => console.log(r));
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};
/* Login user /////////////////////////////////////////////////////////// */
export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch({ type: CLEAR_ERRORS });
      history.push("/user");
    })
    .then(() => {
      dispatch({ type: SET_AUTHENTICATED });
    })
    .then(() => {
      dispatch(getUserNotifications());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};
/* Logout user ///////////////////////////////////////////////// */
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  persistor.purge();
  dispatch({ type: CLEAR_ERRORS });
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};
/* Get use notifications */

export const getUserNotifications = () => (dispatch) => {
  dispatch({ type: LOADING_USER_NOTIFICATIONS });
  axios
    .get("/deals/getusernotifications")
    .then((res) => {
      dispatch({
        type: SET_USER_NOTIFICATIONS,
        payload: res.data,
      });
    })
    .then(() => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER_NOTIFiCATIONS });
    });
};

export const markNotificationRead = (offersId) => (dispatch) => {
  axios
    .post("/deals/marknotificationread", offersId)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .then(() => {
      dispatch({ type: CLEAR_NOTIFICATIONS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

/* Get own user profile data /////////////////////////////////////////////////////////////// */
export const getOwnUserData = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: LOADING_USER });
  axios
    .get("/users/owndata")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};
/* Get another user profile data ///////////////////////////////////////////////////// */
export const getAnotherUserData = (userId) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`/users/${userId}/userdata`)
    .then((res) => {
      dispatch({
        type: SET_ANOTHER_USER,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};

/* Update user profile ///////////////////////////////////////////////////////// */
export const updateProfile = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/users/image", formData)
    .then((res) => {
      dispatch(getOwnUserData());
    })
    .catch((err) => {
      console.log(err);
    });
};

/* Get own user data /////////////////////////////////////////////////////////////// */
export const getFacebookData = (userId) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`/users/${userId}/getfacebookdata`)
    .then((res) => {
      dispatch({
        type: SET_SELLER,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};
export const getInstagramData = (userId) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`/users/${userId}/getinstagramdata`)
    .then((res) => {
      dispatch({
        type: SET_SELLER,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};
export const getTikTokData = (userId) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`/users/${userId}/gettiktokdata`)
    .then((res) => {
      dispatch({
        type: SET_SELLER,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};
export const getTelegramData = (userId) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`/users/${userId}/gettelegramdata`)
    .then((res) => {
      dispatch({
        type: SET_SELLER,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};

/* Get another user data //////////////////////////////////////////////////////// */
export const getAnotherFacebookData = (userId) => (dispatch) => {
  dispatch({ type: SET_LOADING_FACEBOOK });
  axios
    .get(`/users/${userId}/getfacebookdata`)
    .then((res) => {
      dispatch({
        type: SET_ANOTHER_FACEBOOK,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_FACEBOOK });
    });
};
export const getAnotherInstagramData = (userId) => (dispatch) => {
  dispatch({ type: SET_LOADING_INSTAGRAM });
  axios
    .get(`/users/${userId}/getinstagramdata`)
    .then((res) => {
      dispatch({
        type: SET_ANOTHER_INSTAGRAM,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_INSTAGRAM });
    });
};
export const getAnotherTikTokData = (userId) => (dispatch) => {
  dispatch({ type: SET_LOADING_TIKOK });
  axios
    .get(`/users/${userId}/gettiktokdata`)
    .then((res) => {
      dispatch({
        type: SET_ANOTHER_TIKTOK,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_TIKOK });
    });
};
export const getAnotherTelegramData = (userId) => (dispatch) => {
  dispatch({ type: SET_LOADING_TELEGRAM });
  axios
    .get(`/users/${userId}/gettelegramdata`)
    .then((res) => {
      dispatch({
        type: SET_ANOTHER_TELEGRAM,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_TELEGRAM });
    });
};

/* Start selling Facebook ads ///////////////////////////////////////////////////////////// */
export const becomeFacebokSeller = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/users/facebook")
    .then((res) => {
      dispatch({ type: BECOME_FACEBOOK_SELLER }); // change facebook to true
      dispatch({ type: CLEAR_ERRORS });
    })
    .then(() => {
      dispatch(getFacebookData());
    })
    .then(() => {
      dispatch({ type: STOP_LOADING_USER });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};
/* Start selling Instagram ads ///////////////////////////////////////////////////////////// */
export const becomeInstagramSeller = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/users/instagram")
    .then((res) => {
      dispatch({ type: BECOME_INSTAGRAM_SELLER });
      dispatch({ type: CLEAR_ERRORS });
    })
    .then(() => {
      dispatch(getInstagramData());
    })
    .then(() => {
      dispatch({ type: STOP_LOADING_USER });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};
/* Start selling TikTok ads ///////////////////////////////////////////////////////////// */
export const becomeTikTokSeller = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/users/tiktok")
    .then((res) => {
      dispatch({ type: BECOME_TIKTOK_SELLER });
      dispatch({ type: CLEAR_ERRORS });
    })
    .then(() => {
      dispatch(getTikTokData());
    })
    .then(() => {
      dispatch({ type: STOP_LOADING_USER });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};
/* Start selling Telegram ads ///////////////////////////////////////////////////////////// */
export const becomeTelegramSeller = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/users/telegram")
    .then((res) => {
      dispatch({ type: BECOME_TELEGRAM_SELLER });
      dispatch({ type: CLEAR_ERRORS });
    })
    .then(() => {
      dispatch(getTelegramData());
    })
    .then(() => {
      dispatch({ type: STOP_LOADING_USER });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_USER });
    });
};
/* Update user profile data //////////////////////////////////////////////////////////////////// */
export const updateFacebookData = (userData, userId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/users/updatefacebook", userData)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .then((res) => {
      dispatch({ type: STOP_LOADING_UI });
    })
    .then((res) => {
      dispatch(getFacebookData(userId));
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    });
};
/* Add like to user profile ////////////////////////////////////////////////////////////////////*/
export const addFacebookSellerLike = (userId) => (dispatch) => {
  dispatch({ type: LIKE_SELLER });
  axios
    .get(`/users/${userId}/likefacebook`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .then((res) => {
      dispatch({ type: ADD_FACEBOOK_LIKE_COUNT });
    })
    .then((res) => {
      dispatch({ type: STOP_LIKE_SELLER });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LIKE_SELLER });
    });
};
export const addInstagramSellerLike = (userId) => (dispatch) => {
  dispatch({ type: LIKE_SELLER });
  axios
    .get(`/users/${userId}/likeinstagram`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .then((res) => {
      dispatch({ type: ADD_INSTAGRAM_LIKE_COUNT });
    })
    .then((res) => {
      dispatch({ type: STOP_LIKE_SELLER });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LIKE_SELLER });
    });
};
export const addTikTokSellerLike = (userId) => (dispatch) => {
  dispatch({ type: LIKE_SELLER });
  axios
    .get(`/users/${userId}/liketiktok`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .then((res) => {
      dispatch({ type: ADD_TIKTOK_LIKE_COUNT });
    })
    .then((res) => {
      dispatch({ type: STOP_LIKE_SELLER });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LIKE_SELLER });
    });
};
export const addTelegramSellerLike = (userId) => (dispatch) => {
  dispatch({ type: LIKE_SELLER });
  axios
    .get(`/users/${userId}/liketelegram`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .then((res) => {
      dispatch({ type: STOP_LIKE_SELLER });
    })
    .then((res) => {
      dispatch({ type: ADD_TELEGRAM_LIKE_COUNT });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LIKE_SELLER });
    });
};
/* Dislike seller profile ///////////////////////////////////////////////////////////////////*/
export const addFacebookSellerDislike = (userId) => (dispatch) => {
  dispatch({ type: DISLIKE_SELLER });
  axios
    .get(`/users/${userId}/dislikefacebook`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .then((res) => {
      dispatch({ type: STOP_DISLIKE_SELLER });
    })
    .then((res) => {
      dispatch({ type: ADD_FACEBOOK_DISLIKE_COUNT });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_DISLIKE_SELLER });
    });
};
export const addInstagramSellerDislike = (userId) => (dispatch) => {
  dispatch({ type: DISLIKE_SELLER });
  axios
    .get(`/users/${userId}/dislikeinstagram`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .then((res) => {
      dispatch({ type: STOP_DISLIKE_SELLER });
    })
    .then((res) => {
      dispatch({ type: ADD_INSTAGRAM_DISLIKE_COUNT });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_DISLIKE_SELLER });
    });
};
export const addTikTokSellerDislike = (userId) => (dispatch) => {
  dispatch({ type: DISLIKE_SELLER });
  axios
    .get(`/users/${userId}/disliketiktok`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .then((res) => {
      dispatch({ type: STOP_DISLIKE_SELLER });
    })
    .then((res) => {
      dispatch({ type: ADD_TIKTOK_DISLIKE_COUNT });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_DISLIKE_SELLER });
    });
};
export const addTelegramSellerDislike = (userId) => (dispatch) => {
  dispatch({ type: DISLIKE_SELLER });
  axios
    .get(`/users/${userId}/disliketelegram`)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .then((res) => {
      dispatch({ type: STOP_DISLIKE_SELLER });
    })
    .then((res) => {
      dispatch({ type: ADD_TELEGRAM_DISLIKE_COUNT });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_DISLIKE_SELLER });
    });
};

/* Comment another user profile ///////////////////////////////////////////////////////////////////////// */

export const addFacebookSellerComment = (userId, comment) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/users/${userId}/commentfacebook`, comment)
    .then((res) => {
      dispatch({
        type: SET_COMMENT_SUCCESS,
        payload: res.data,
      });
    })
    .then((res) => {
      dispatch({ type: STOP_LOADING_UI });
    })
    .then((res) => {
      dispatch({ type: ADD_FACEBOOK_COMMENT_COUNT });
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    });
};

export const addInstagramSellerComment = (userId, comment) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/users/${userId}/commentinstagram`, comment)
    .then((res) => {
      dispatch({
        type: SET_COMMENT_SUCCESS,
        payload: res.data,
      });
    })
    .then((res) => {
      dispatch({ type: STOP_LOADING_UI });
    })
    .then((res) => {
      dispatch({ type: ADD_INSTAGRAM_COMMENT_COUNT });
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    });
};

export const addTikTokSellerComment = (userId, comment) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/users/${userId}/commenttiktok`, comment)
    .then((res) => {
      dispatch({
        type: SET_COMMENT_SUCCESS,
        payload: res.data,
      });
    })
    .then((res) => {
      dispatch({ type: STOP_LOADING_UI });
    })
    .then((res) => {
      dispatch({ type: ADD_TIKTOK_COMMENT_COUNT });
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    });
};

export const addTelegramSellerComment = (userId, comment) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/users/${userId}/commenttelegram`, comment)
    .then((res) => {
      dispatch({
        type: SET_COMMENT_SUCCESS,
        payload: res.data,
      });
    })
    .then((res) => {
      dispatch({ type: STOP_LOADING_UI });
    })
    .then((res) => {
      dispatch({ type: ADD_TELEGRAM_COMMENT_COUNT });
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    });
};
/* Sent deal to another user */
export const sentFacebookDeal = (userId, deal) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/deals/${userId}/facebook`, deal)
    .then((res) => {
      dispatch({
        type: DEAL_SUCCESS,
        payload: res.data,
      });
    })
    .then((res) => {
      dispatch({ type: STOP_LOADING_UI });
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    });
};

export const sentInstagramDeal = (userId, deal) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/deals/${userId}/instagram`, deal)
    .then((res) => {
      dispatch({
        type: DEAL_SUCCESS,
        payload: res.data,
      });
    })
    .then((res) => {
      dispatch({ type: STOP_LOADING_UI });
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    });
};

export const sentTikTokDeal = (userId, deal) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/deals/${userId}/tiktok`, deal)
    .then((res) => {
      dispatch({
        type: DEAL_SUCCESS,
        payload: res.data,
      });
    })
    .then((res) => {
      dispatch({ type: STOP_LOADING_UI });
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    });
};
export const sentTelegramDeal = (userId, deal) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/deals/${userId}/telegram`, deal)
    .then((res) => {
      dispatch({
        type: DEAL_SUCCESS,
        payload: res.data,
      });
    })
    .then((res) => {
      dispatch({ type: STOP_LOADING_UI });
    })
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    });
};

/* Set authorization header */
const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
