import React, { Component } from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
  // const { cardStyle } = styles;
  return (
      <View style={styles.container}>
        {props.children}
      </View>
  )
}
const styles={
  container: {
    borderBottomWidth:1,
    padding: 5,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection:'row',
    borderColor:'#ddd',
    position:'relative'
  }
}

export { CardSection } ;
