import React, { Component } from 'react';
import { AppRegistry, Alert } from "react-native";
import { Container, Header , Title, Left, Body, Content, Right, Icon, Button, Text, Thumbnail, H1, H3,} from "native-base"; 

import Food from '../assets/restaurant.png';

  const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });

export default class SupportScreen extends Component {
  componentDidMount () {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([Food]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

  render() {
    return (     
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
            <Body>
              <Title>Profile</Title>
            </Body>
          <Right />
        </Header>

        <Content padder>
          <Body>
            <Text>support</Text>
            </Body>
          
        </Content>
      </Container>
    );
  }
} 

const styles = {

  profileImage:{ 
    marginLeft: 2,
  }

}; 