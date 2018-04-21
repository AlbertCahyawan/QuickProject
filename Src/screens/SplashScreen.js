import React, { Component } from 'react';

import { View, Image, Text } from 'react-native';
import Expo from 'expo';

import logo from '../assets/icons/pure-icon.png';

const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });
  
export default class SplashScreen extends Component {
    static navigationOptions = () => ({
        header: null
      });
    
      state = {
        appIsReady: false
      }
     
      componentWillMount() {
        this._loadAssetsAsync();
      }
      async _loadAssetsAsync() {
        const imageAssets = cacheImages([logo]);
        await Promise.all([...imageAssets]);
        this.setState({ appIsReady: true });
      }

  render() {
    return (
      <View behavior="padding" style={styles.container}>
 
        <View style={styles.logoContainer}>
          <Image
            source={logo}
            style={styles.logoStyle}
          />
         </View>
          
       </View>
    );
  }
}

const styles = {
    container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center', 
          backgroundColor: '#2c3e50',
      },
      logoContainer:{
          alignItems: 'center',
          justifyContent: 'center', 
      },  
    logoStyle: {
      marginTop: 20,
      marginLeft: 10,
      width: 40,
      height: 40
    },
  
  
  };