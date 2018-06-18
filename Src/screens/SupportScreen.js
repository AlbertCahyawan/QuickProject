import React, { Component } from 'react';
import { Container, Header, Title, Left, Body, Content, Right, Icon, Button, Thumbnail, Text, } from "native-base";

import { ImagePicker } from 'expo';


export default class SupportScreen extends Component {
  componentDidMount() {
  }

  state = {
    image: null,
  };

  test() {
    const formData = new FormData();
    formData.append('avatar', {
      uri: this.state.image.uri,
      type: 'image/png',
      name: 'nama.jpg',
    });

    fetch("http://188.166.210.104:3000/uploads", {
      method: 'POST',
      body: formData,
      headers: { 
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(JSON.stringify(responseJson))
      })
      .catch((error) => {
        console.error(error);
      });

  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result });
    }
    alert(result.uri.length )
  };

  render() {
    let { image } = this.state;
 
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

          <Button onPress={this._pickImage}><Text>Pick an image from camera rolll</Text></Button>
          {image &&
            <Thumbnail source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}

          <Button onPress={() => this.test()}><Text>test123</Text></Button>

          <Thumbnail square source={{ uri: 'http://188.166.210.104:3000/image/avatar-1529329532947.png' }} />

          <Thumbnail square source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
          <Thumbnail square source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTA" +
              "qAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBg" +
              "YGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
          }} />
        </Content>
      </Container>
    );
  }
}


