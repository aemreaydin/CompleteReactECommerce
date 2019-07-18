import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shoppage/Shoppage';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';

import { setCurrentUserAction } from './redux/userReducer/actions';
import firebase, { auth, createUser } from './firebase/firebase.utils';

import './App.scss';
import { FirebaseUser } from './redux/userReducer/types';

interface AppProps {
  setCurrentUser: typeof setCurrentUserAction;
}

class App extends React.Component<AppProps> {
  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const { setCurrentUser } = this.props;
      if(userAuth) {
        const query = await createUser(userAuth);
        if(query) {
          query.onSnapshot(snapshot => {
            setCurrentUser(snapshot.data() as FirebaseUser)
          });
        }
      }
      setCurrentUser(userAuth)
    });
  }

  componentWillUnmount() {
    if(this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  // setCurrentUser = (user: FirebaseUser) => {
  //   this.props.setCurrentUser(user);
  // }

  render() {
    return (
      <div style={{height: "100%"}}>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: FirebaseUser) => dispatch(setCurrentUserAction(user))
});

export default connect(null, mapDispatchtoProps)(App);
