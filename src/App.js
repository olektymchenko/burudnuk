import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import Container from 'react-bootstrap/Container'
//REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

//Components
import Navbar from './components/layout/Navbar'
import AuthRoute from './utill/AuthRoute'

//Pages
import home from './pages/home';
import user from './pages/user';
import login from './pages/login';
import register from './pages/register';
import client from './pages/client';
import seller from './pages/seller';
import clientdeals from './pages/clientdeals';
import sellerdeals from './pages/sellerdeals';
import makedeal from './pages/makedeal';
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from './redux/types';
import { logoutUser } from './redux/actions/userActions';
axios.default.baseURL = "https://europe-west2-burunduk-fb67a.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
  else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container fluid className="navigation"><Navbar /></Container>
          <Container fluid>
            <Switch>
              <Route exact path="/" component={home} />
              <AuthRoute exact path="/login" component={login} />
              <AuthRoute exact path="/register" component={register} />
              <Route exact path="/home" component={home} />
              <Route exact path="/user" component={user} />
              <Route exact path="/client" component={client} />
              <Route exact path="/seller" component={seller} />
              <Route exact path="/clientdeals" component={clientdeals} />
              <Route exact path="/sellerdeals" component={sellerdeals} />
              <Route exact path="/makedeal" component={makedeal} />
            </Switch>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
