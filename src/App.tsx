import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shoppage/Shoppage';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';

import firebase, { auth, createUser } from './firebase/firebase.utils';

import './App.scss';

export interface UserData {
  uid: string;
  displayName: string;
  email: string;
  createdAt: Date;
  photoURL: string;
}

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const query = await createUser(userAuth);
        if(query) {
          query.onSnapshot(snapshot => {
            console.log(snapshot.data());
            this.setState({
              currentUser: {...snapshot.data() as firebase.User}
            })
          });
        }
      }
      this.setState({currentUser: userAuth})
    });
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
      <div style={{height: "100%"}}>
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
