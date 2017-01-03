/**
 * @file LoadingBackground.js
 *
 * @author Nguyen Thanh Trung
 * @version 1.0.0
 *
 * @DESCRIPTION
 *
 * Just a PlayGround for react-native
 * @flow
 */

import React from 'react';
import { View, Image, Dimensions, StatusBar } from 'react-native';

const { maxHeight, maxWidth } = Dimensions.get('window');
const background = require('../../../res/img/supersalers-login-background.png');

const LoadingBackground = (props) => {
    const { backgroundContainer } = styles;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
           backgroundColor="#21993C"
           barStyle="light-content"
        />
        <Image
          style={backgroundContainer}
          source={background}
          resizeMode='stretch'
        >
          {props.children}
        </Image>
      </View>
    );
};

const styles = {
  backgroundContainer: {
    flex: 1,
    height: maxHeight,
    width: maxWidth
  }
};

export { LoadingBackground };
