import React, { Component } from 'react';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Item, Thumbnail, H1 } from "native-base";

import Suggestion from '../components/Suggestion'

import Food from '../assets/images.jpg';

const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});


export default class HomeScreen extends Component {

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

        <Button style={{ margin: 10 }}
            block info onPress={() => this.props.navigation.navigate("Search")}>
            <Text>Seach for restaurant</Text>
            <Icon name="ios-search" />
          </Button>
        
        <Content style={{ backgroundColor: 'lightblue' }}>
        <Suggestion/>
        </Content>

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


