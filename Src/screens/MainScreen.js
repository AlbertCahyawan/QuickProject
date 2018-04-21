import React, { Component } from 'react';
import { Platform, image  } from 'react-native';
import Expo from 'expo';
import icon from '../assets/icons/pure-icon.png';
import { STATUS_BAR_HEIGHT } from '../constants'; 

import { Container, Root, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";


const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

export default class MainScreen extends Component {
   

  state = {
    appIsReady: false
  }

  componentDidMount () {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([icon]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

  render() {  
    const { params } = this.props.navigation.state;
    const Name = params ? params.itemId : null;
    
    return ( 
      <Container
      style={styles.container}> 

        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header> 

        <Content padder> 
        <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
            <Text>Go back</Text>
        </Button>
        
        <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('MyModal', ) }>
            <Text>Modal</Text>
        </Button>

        <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('test' ) }>
            <Text>Tabs</Text>
        </Button> 

        <Text> sendfromlogin:{JSON.stringify(Name)} </Text>  
        </Content> 
      </Container>
        
        
      
    );
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor:'lightblue',
  },

  imageStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40
  },
  header:{
    height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
    backgroundColor: '#2196F3'
  },
  headertitle:{
    marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
    color: 'white'
  }


};

 
