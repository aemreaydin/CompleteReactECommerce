import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shoppage/Shoppage';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';

import { setCurrentUserAction } from './redux/user/actions';
import firebase, { auth, createUser } from './firebase/firebase.utils';

import './App.scss';
import { FirebaseUser } from './redux/user/types';
import { AppState } from './redux';

interface AppProps {
  currentUser: FirebaseUser;
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
          <Route path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInSignUpPage />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  currentUser: state.userReducer.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: FirebaseUser) => dispatch(setCurrentUserAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
