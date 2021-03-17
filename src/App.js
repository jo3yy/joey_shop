import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { auth } from './firebase/firebase.utils'

import Homepage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register.component'

import './App.css'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegister} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
