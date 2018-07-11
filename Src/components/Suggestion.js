import React, { Component } from 'react';

import { Text, Avatar } from 'react-native-elements'
import { View, TouchableNativeFeedback } from 'react-native';

import Food from '../assets/images.jpg';

export default class Suggestion extends Component {

  render() {

    return (

      <View style={{ margin: 10, height: 500, }}>

        <Text h4 style={{ color: 'grey' }}>Type of dish you want!</Text>
        <View style={{ justifyContent: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', }}>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="medium"
                source={{ uri: "https://cdnd.icons8.com/wp-content/uploads/2015/06/android_vector.jpg" }}
                activeOpacity={0.7}
              />
              <Text>Indonesian</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="medium"
                source={{ uri: "https://cdnd.icons8.com/wp-content/uploads/2015/06/android_vector.jpg" }}
                activeOpacity={0.7}
              />
              <Text>Chinese</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="medium"
                source={{ uri: "https://cdnd.icons8.com/wp-content/uploads/2015/06/android_vector.jpg" }}
                activeOpacity={0.7}
              />
              <Text>American</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="medium"
                source={{ uri: "https://cdnd.icons8.com/wp-content/uploads/2015/06/android_vector.jpg" }}
                activeOpacity={0.7}
              />
              <Text>French</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="medium"
                source={{ uri: "https://cdnd.icons8.com/wp-content/uploads/2015/06/android_vector.jpg" }}
                activeOpacity={0.7}
              />
              <Text>Japanese</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="medium"
                source={{ uri: "https://cdnd.icons8.com/wp-content/uploads/2015/06/android_vector.jpg" }}
                activeOpacity={0.7}
              />
              <Text>Korean</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="medium"
                source={{ uri: "https://cdnd.icons8.com/wp-content/uploads/2015/06/android_vector.jpg" }}
                activeOpacity={0.7}
              />
              <Text>Indian</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="medium"
                source={{ uri: "https://cdnd.icons8.com/wp-content/uploads/2015/06/android_vector.jpg" }}
                activeOpacity={0.7}
              />
              <Text>Middle Eastern</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="medium"
                source={{ uri: "https://cdnd.icons8.com/wp-content/uploads/2015/06/android_vector.jpg" }}
                activeOpacity={0.7}
              />
              <Text>Italian</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

      </View> 

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


