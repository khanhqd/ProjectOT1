/**
 * @file App.js
 *
 * @author Nguyen Thanh Trung
 * @version 1.0.0
 *
 * @DESCRIPTION
 *
 * Just a PlayGround for react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/scenes/LoginForm';
import HomeScene from './components/scenes/HomeScene';
import { Spinner } from './components/common';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: null
      };
  }

  componentWillMount() {
      const config = {
        apiKey: 'AIzaSyBK1nBzzaih0cHtZT6OTom1J82TbSu_vQk',
        authDomain: 'supersalers-a293b.firebaseapp.com',
        databaseURL: 'https://supersalers-a293b.firebaseio.com',
        storageBucket: 'supersalers-a293b.appspot.com',
        messagingSenderId: '6614845255'
      };
      firebase.initializeApp(config);
      console.log('FIREBASE_START');
      console.log(config);

      firebase.auth().onAuthStateChanged((user) => {
        console.log('USER: ', user);
        if (user) {
          console.log('isLoggedIn[USER_EXIST]: ', this.state.isLoggedIn);
          this.setState({ isLoggedIn: true });
        } else {
          console.log('isLoggedIn[INVALID_USER]: ', this.state.isLoggedIn);
          this.setState({ isLoggedIn: false });
        }
      });
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true:
        console.log('isLoggedIn[HOME]: ', this.state.isLoggedIn);
        return <HomeScene />;
      case false:
        console.log('isLoggedIn[LOGIN]: ', this.state.isLoggedIn);
        return <LoginForm />;
      default:
        console.log('isLoggedIn[SPINNER]: ', this.state.isLoggedIn);
        return <Spinner />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
