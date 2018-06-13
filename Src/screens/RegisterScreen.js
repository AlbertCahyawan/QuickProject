import React, { Component } from 'react';
import { View, Platform, Image, KeyboardAvoidingView, } from 'react-native';

import {Button,Text} from 'native-base'

import { connectStyle } from 'native-base';

import RegisterForm from '../components/RegisterForm'

import Expo from 'expo'; 

import logo from '../assets/icons/pure-icon.png'; 
  
const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

export default class RegisterScreen extends Component {
   

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
          <Image source={logo}
                  style={styles.logoStyle} /> 
         </View>
          
         <RegisterForm/>  
       </KeyboardAvoidingView>
    );
  }
}

const styles = {
  buttonContainer: {  
    marginTop: 10,
    padding: 10, 
},  


  container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
    }, 

  logoStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40
  },


};
 
