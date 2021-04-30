import React, { Component } from 'react';

import { View, Image } from 'react-native';

import logo from '../assets/Logo.png';

export default class Splash extends Component {

  render() {
    return (
      <View style={styles.container}> 
          <Image
            source={logo}
            style={styles.logoStyle}
          />  
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  logoStyle: {
    marginTop: 20,
    marginLeft: 10,
  }, 
};
