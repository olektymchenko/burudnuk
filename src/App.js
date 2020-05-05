import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import Container from 'react-bootstrap/Container'
//REDUX
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';


//Components
import Navbar from './components/layout/Navbar'
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
import makedeal from './pages/makedeal';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser } from './redux/actions/userActions';

axios.defaults.baseURL = "https://europe-west2-burunduk-fb67a.cloudfunctions.net/api";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

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
if (!token) {
  store.dispatch(logoutUser());
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <PersistGate persistor={persistor}>
            <Container fluid className="navigation"><Navbar /></Container>
            <Container fluid>
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/home" component={home} />
                <Route exact path='/users/:userId' component={anotherUser} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/register" component={register} />
                <UserRoute exact path="/user" component={user} />
                <UserRoute exact path="/facebook" component={facebook} />
                <UserRoute exact path="/instagram" component={instagram} />
                <UserRoute exact path="/tiktok" component={tiktok} />
                <UserRoute exact path="/telegram" component={telegram} />
                <UserRoute exact path="/makedeal" component={makedeal} />
              </Switch>
            </Container>
          </PersistGate>
        </Router>
      </Provider>
    );
  }
}

export default App;
