import React, { Component } from 'react';
import { View, Platform, Image, Text, KeyboardAvoidingView, Button } from 'react-native';
import { connectStyle } from 'native-base';

import Expo from 'expo'; 

import logo from '../assets/icons/pure-icon.png'; 
import ForgotPasswordForm from '../components/ForgotPasswordForm';
  
const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

export default class ForgotPasswordScreen extends Component {
    
  state = {
    appIsReady: false
  }
  
  componentDidMount () {
    this._loadAssetsAsync();
  }
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([logo]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

  render() { 

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
 
        <View style={styles.logoContainer}>
          <Image
            source={logo}
            style={styles.logoStyle}
          />
         
         </View> 
         
         <ForgotPasswordForm/> 
         
       </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
    }, 

  logoStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40
  },


};
 
