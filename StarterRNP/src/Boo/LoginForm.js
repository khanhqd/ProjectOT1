/**
 * @file LoginForm.js
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
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { LoginBackground, LoginInput, Button, Spinner } from '../common/';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failedAuthenticationText: '',
      user: '',
      password: '',
      loading: false
    };
    console.log('RETURN_LOGIN_FORM');
  }

  onButtonPressed() {
    const { user, password } = this.state;

    this.setState({ failedAuthenticationText: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(user, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
          this.setState({ failedAuthenticationText: 'Authentication Failed.' });
          console.log(this.state.failedAuthenticationText.toUpperCase());
      //   firebase.auth().createUserWithEmailAndPassword(user, password)
      //     .then(this.onLoginSuccess.bind(this))
      //     .catch(() => {
      //       this.onLoginFail.bind(this);
      //       console.log(this.state.failedAuthenticationText.toUpperCase());
      //  });
      }
    );
  }

  onLoginFail() {
    this.setState({
      failedAuthenticationText: 'Authentication Failed.'
    });
  }

  onLoginSuccess() {
    console.log('LOGIN_SUCCESS');
    this.setState({
      user: '',
      password: '',
      loading: false,
      failedAuthenticationText: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <Button
        label='login'
        onHandlePress={() => {
          this.onButtonPressed.bind(this);
          console.log('LOGIN_BUTTON_PRESSED!\n' +
          'USER_INPUT: ' + this.state.user + '\n' +
          'PASSWORD_INPUT: ' + this.state.password);
        }}
      />
    );
  }

  render() {
    const container = {
      flex: 1
    };

    const emptyView = {
      flex: 2
    };

    const backgroundContainer = {
      flexDirection: 'column'
    };

    const inputContainer = {
      flex: 4,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'
    };

    const failedAuthenticationTextStyle = {
      color: 'red',
      fontSize: 17,
      fontWeight: 'bold'
    };

    const createAccountTextStyle = {
      color: '#eee',
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 15,
      elevation: 1.5
    };

    return (
      <View style={container}>
        <LoginBackground style={backgroundContainer}>
          <View style={emptyView} />
          <View style={inputContainer}>
            <LoginInput
              inputHeight={55}
              inputWidth={350}
              label='username@gmail.com'
              icon='user'
              spacing={0}
              value={this.state.user}
              onChangeText={user => this.setState({ user })}
            />
            <LoginInput
              inputHeight={55}
              inputWidth={350}
              label='**********'
              icon='lock'
              isSecure
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <Text style={failedAuthenticationTextStyle}>{this.state.failedAuthenticationText}</Text>
              {this.renderButton()}
            <Text
              onPress={() => console.log('Create an account pressed!')}
              style={createAccountTextStyle}
            >
              Create an account
            </Text>
          </View>
          <View style={emptyView} />
        </LoginBackground>
      </View>
    );
  }
}

export default LoginForm;
