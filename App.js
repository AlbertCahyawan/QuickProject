import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import store from './store';
import MainScreen from './screens/MainScreen';

export default class App extends Component {
  render() {
      const MainNavigator = StackNavigator ({
        Main: { screen: MainScreen }
      });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

/*

<View style={styles.container}>

  <View style={styles.top}>
  </View>

  <Text> ass </Text>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


  top:{
    height: '20%',
    backgroundColor: 'green',
  },
});
*/
