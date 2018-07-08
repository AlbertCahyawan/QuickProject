import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Src/store';

import { Root } from "native-base";

import AppNavigation from './Src/Navigation/AppNavigation';
import NavigationService from './Src/Navigation/NavigationService';
import Splash from './Src/screens/SplashScreen'
 
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {

    if (!this.state.isReady) {
      return (
        <Splash/>
      );
    }
    return (
      <Provider store={store}>
        <Root>
          <AppNavigation ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
        </Root>
      </Provider>
    );
  }
}

