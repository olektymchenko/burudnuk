import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import firebase from './fireconfig';
import Container from 'react-bootstrap/Container';
//REDUX
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';


//Components
import Navbar from './components/layout/Navbar';
import AuthRoute from './utill/AuthRoute'
import UserRoute from './utill/UserRoute'

//Pages
import home from './pages/home';
import user from './pages/user';
import login from './pages/login';
import anotherUser from './pages/anotherUser';
import register from './pages/register';
import facebook from './pages/facebook';
import instagram from './pages/instagram';
import tiktok from './pages/tiktok';
import telegram from './pages/telegram';
import messeges from './pages/messeges';
import offerauction from './pages/createoffer';
import lookforauction from './pages/createsearch';
import userauctions from './pages/userauctions';
import allauctions from './pages/allauctions';
import auction from './pages/auction';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser } from './redux/actions/userActions';

axios.defaults.baseURL = "https://europe-west2-burunduk-fb67a.cloudfunctions.net/api";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    firebase.auth().signOut();
    window.location.href = '/login';
  }
  else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
  }
}
if (!token) {
  store.dispatch(logoutUser());
  firebase.auth().signOut();
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <PersistGate persistor={persistor}>
            <Container fluid className="navigation" id='navigation-menu-width'><Navbar /></Container>
            <Container fluid>
              <Switch>
                <Route exact path="/" component={home} />
                {/* Home page */}
                <Route exact path="/home" component={home} />
                {/* Show  info about user with id = userId */}
                <Route exact path='/users/:userId' component={anotherUser} />
                {/* Main routes */}
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/register" component={register} />
                {/* Show logged user info */}
                <UserRoute exact path="/user" component={user} />
                {/* Marketplace */}
                <UserRoute exact path="/facebook" component={facebook} />
                <UserRoute exact path="/instagram" component={instagram} />
                <UserRoute exact path="/tiktok" component={tiktok} />
                <UserRoute exact path="/telegram" component={telegram} />
                {/* Messages */}
                <UserRoute exact path="/messages" component={messeges} />
                {/* Creating offers */}
                <UserRoute exact path="/createoffer" component={offerauction} />
                <UserRoute exact path="/createsearch" component={lookforauction} />
                {/* Auctions created by user */}
                <UserRoute exact path="/myauctions" component={userauctions} />
                {/* Auctions */}
                <Route exact path='/allauctions' component={allauctions} />
                <Route exact path='/auctions/:app/:auctionId/:type' component={auction} />
              </Switch>
            </Container>

          </PersistGate>
        </Router>
      </Provider>
    );
  }
}

export default App;
