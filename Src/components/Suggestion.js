import React, { Component } from 'react';

import { Text, Avatar } from 'react-native-elements'
import { View, TouchableNativeFeedback } from 'react-native';

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
                size="xlarge"
                source={{
                  uri:
                    "data:image/jpeg;base64,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"
                }}
                activeOpacity={0.7}
                overlayContainerStyle={styles.dishImageOverlay}
              />
              <Text style={styles.dishTypeStyle} >Indonesian</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="xlarge"
                source={{ uri: "https://images.askmen.com/1080x540/2017/01/25-043929-can_you_make_chinese_takeout_healthy.jpg" }}
                activeOpacity={0.7}
                overlayContainerStyle={styles.dishImageOverlay}
              />
              <Text style={styles.dishTypeStyle}>Chinese</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="xlarge"
                source={{ uri: "https://www.eatatfrontstreet.net/ressources/images/182106c0fef0.jpg" }}
                activeOpacity={0.7}
                overlayContainerStyle={styles.dishImageOverlay}
              />
              <Text style={styles.dishTypeStyle}>American</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="xlarge"
                source={{
                  uri:
                    "https://i2.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2016/09/ratatouille-10-602x401.jpg?fit=602%2C401"
                }}
                activeOpacity={0.7}
                overlayContainerStyle={styles.dishImageOverlay}
              />
              <Text style={styles.dishTypeStyle}>French</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="xlarge"
                source={{
                  uri:
                    "https://www.rd.com/wp-content/uploads/2017/08/Attention-Sushi-Lovers-There-Are-Rules-About-Eating-Japanese-Food-That-You-Must-Follow_644962144-760x506.jpg"
                }}
                activeOpacity={0.7}
                overlayContainerStyle={styles.dishImageOverlay}
              />
              <Text style={styles.dishTypeStyle}>Japanese</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="xlarge"
                source={{ uri: "http://www.korean-food-recipe.com/wp-content/uploads/2014/02/cropped-cropped-header02-1.jpg" }}
                activeOpacity={0.7}
                overlayContainerStyle={styles.dishImageOverlay}
              />
              <Text style={styles.dishTypeStyle}>Korean</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="xlarge"
                source={{ uri: "https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/103/92/153775715.jpg" }}
                activeOpacity={0.7}
                overlayContainerStyle={styles.dishImageOverlay}
              />
              <Text style={styles.dishTypeStyle}>Indian</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="xlarge"
                source={{ uri: "http://themiddleeasternbridalshow.com/wp-content/uploads/2015/01/Middle-Eastern-Food.jpg" }}
                activeOpacity={0.7}
                overlayContainerStyle={styles.dishImageOverlay}
              />
              <Text style={styles.dishTypeStyle}>Middle-Eastern</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => alert("button pressed")}>
            <View
              style={{
                marginTop: 5, marginRight: 5, backgroundColor: 'white',
                height: 130, width: 108, justifyContent: 'center', alignItems: 'center'
              }}>
              <Avatar
                size="xlarge"
                source={{ uri: "https://s3-media2.fl.yelpcdn.com/bphoto/NzsxcOT8XHibzORIRB2MJQ/o.jpg" }}
                activeOpacity={0.7}
                overlayContainerStyle={styles.dishImageOverlay}
              />
              <Text style={styles.dishTypeStyle}>Italian</Text>
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
  dishTypeStyle: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  dishImageOverlay:{
    opacity:0.5
  }
};
