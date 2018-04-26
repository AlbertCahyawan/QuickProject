import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { DrawerNavigator } from 'react-navigation'; 

import store from './Src/store';

import SplashScreen from './Src/screens/SplashScreen';
import HomeScreen from './Src/screens/HomeScreen';
import LoginScreen from './Src/screens/LoginScreen';   
import ForgotPasswordScreen from './Src/screens/ForgotPasswordScreen';
import RegisterScreen from './Src/screens/RegisterScreen';
  
import ModalScreen from './Src/modals/ModalScreen';
import testScreen from './Src/screens/testScreen';

import SideBar from "./Src/SideBar/SideBar.js";  
  
import Expo from "expo";  

  
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

      const MainScreenRouter = DrawerNavigator(
      {
        Home: { screen: HomeScreen },  
        Login: { screen: LoginScreen },
        Register: { screen: RegisterScreen },
        ForgotPwd: { screen: ForgotPasswordScreen },

        
        Splash: { screen: SplashScreen }, 
        MyModal: { screen: ModalScreen },
        test: { screen: testScreen },   
      },
      {
        initialRouteName: 'Home', 
        contentComponent: props => <SideBar {...props} />,
        drawerPosition: 'left',
        contentOptions: {
        activeTintColor: '#000',
        }
      }
      );  
 
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    } 
    return ( 
        <MainScreenRouter /> 
    );
  }
}


// <Provider store={store}>
//         <MainNavigator />
//       </Provider>
