import React, { Component } from 'react';
import { Container, Icon, Button, Body, Content, Text, Thumbnail, H1 } from "native-base";

import { View } from 'react-native';

import Food from '../assets/images.jpg';

const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});


export default class Suggestion extends Component {

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([Food]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

  render() {

    return (  
        
          <Container style={{ margin: 10, height: 500, }}>

            <H1 style={{ color: 'grey' }}>Type of dish you want!</H1>
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', }}>
              
              <Button 
                onPress={() => alert("button pressed")}
                style={{ marginTop: 5,marginRight: 5, backgroundColor: 'white', height: 130, width: 108 }}>
                <Body>
                  <Thumbnail square source={{ uri: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg' }} />
                  <Text>Indonesian</Text>
                </Body>
              </Button>

              <Button 
                onPress={() => alert("button pressed")}
                style={{ marginTop: 5,marginRight: 5, backgroundColor: 'white', height: 130, width: 108 }}>
                <Body>
                  <Thumbnail square source={{ uri: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg' }} />
                  <Text>Chinese</Text>
                </Body>
              </Button>

              <Button 
                onPress={() => alert("button pressed")}
                style={{ marginTop: 5,marginRight: 5, backgroundColor: 'white', height: 130, width: 108 }}>
                <Body>
                  <Thumbnail square source={{ uri: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg' }} />
                  <Text>American</Text>
                </Body>
              </Button>

              <Button 
                onPress={() => alert("button pressed")}
                style={{ marginTop: 5,marginRight: 5, backgroundColor: 'white', height: 130, width: 108 }}>
                <Body>
                  <Thumbnail square source={{ uri: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg' }} />
                  <Text>French</Text>
                </Body>
              </Button>

              <Button 
                onPress={() => alert("button pressed")}
                style={{ marginTop: 5,marginRight: 5, backgroundColor: 'white', height: 130, width: 108 }}>
                <Body>
                  <Thumbnail square source={{ uri: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg' }} />
                  <Text>Japanese</Text>
                </Body>
              </Button>

              <Button 
                onPress={() => alert("button pressed")}
                style={{ marginTop: 5,marginRight: 5, backgroundColor: 'white', height: 130, width: 108 }}>
                <Body>
                  <Thumbnail square source={{ uri: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg' }} />
                  <Text>Korean</Text>
                </Body>
              </Button>

              <Button 
                onPress={() => alert("button pressed")}
                style={{ marginTop: 5,marginRight: 5, backgroundColor: 'white', height: 130, width: 108 }}>
                <Body>
                  <Thumbnail square source={{ uri: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg' }} />
                  <Text>Indian</Text>
                </Body>
              </Button>

              <Button 
                onPress={() => alert("button pressed")}
                style={{ marginTop: 5,marginRight: 5, backgroundColor: 'white', height: 130, width: 108 }}>
                <Body>
                  <Thumbnail square source={{ uri: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg' }} />
                  <Text>Middle Easter</Text>
                </Body>
              </Button>

              <Button 
                onPress={() => alert("button pressed")}
                style={{ marginTop: 5,marginRight: 5, backgroundColor: 'white', height: 130, width: 108 }}>
                <Body>
                  <Thumbnail square source={{ uri: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg' }} />
                  <Text>Italian</Text>
                </Body>
              </Button> 
            </View>
            
          </Container>
 

    );
  }
}

const styles = {
  container: {
    height: '100%',
    backgroundColor: 'white',
  },

  suggestion: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};


