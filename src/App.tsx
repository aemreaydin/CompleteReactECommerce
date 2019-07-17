import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shoppage/Shoppage';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';

import firebase, { auth } from './firebase/firebase.utils';

import './App.scss';

interface AppState {
  currentUser: firebase.User | null;
}
interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    if(this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  signOutUser() {
    auth.signOut()
      .then(() => console.log("User signed out"))
      .catch(error => console.log(error));
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header user={currentUser} signOutUser={this.signOutUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
