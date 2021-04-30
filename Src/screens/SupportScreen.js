import React, { Component } from 'react';

import { View, TouchableNativeFeedback } from 'react-native';
import { Avatar,Button } from 'react-native-elements';

import { ImagePicker } from 'expo';

export default class SupportScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: { uri: "http://188.166.210.104:3000/profileimage/profileimage-1529340914314.png" },
    };
  }

  UploadImage() {
    const formData = new FormData();
    formData.append('id', 1)
    formData.append('profileimage', {
      uri: this.state.image.uri,
      type: 'image/png',
      name: 'nama.jpg',
    });

    fetch("http://188.166.210.104:3000/uploads/profileimage", {
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
  };

  render() {
    //let { image } = this.state;

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '25%' }}>

        <TouchableNativeFeedback onPress={this._pickImage}>
          <Avatar
            size="medium"
            rounded
            source={{ uri: this.state.image.uri }}
          />
        </TouchableNativeFeedback>

        <Button title="test"
        onPress={() => this.UploadImage()}/>
      </View>
    );
  }
}


