import React, { Component } from 'react';

import { StackNavigator, DrawerNavigator } from 'react-navigation';
 
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import RegisterScreen from '../screens/RegisterScreen';

import ProfileScreen from '../screens/ProfileScreen'
import HistoryScreen from '../screens/HistoryScreen'
import SupportScreen from '../screens/SupportScreen'

import ModalScreen from '../modals/ModalScreen';
import testScreen from '../screens/testScreen';

import SideBar from "../SideBar/SideBar.js";

const LoginNav = StackNavigator(
  { 

    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    ForgotPwd: { screen: ForgotPasswordScreen },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: () => ({
      header: null
    }),
  }
);

const MainNav = DrawerNavigator(
  { 

    Home: { screen: HomeScreen },
    Search: {screen: SearchScreen},
    Profile: { screen: ProfileScreen },
    History: { screen: HistoryScreen },
    Support: { screen: SupportScreen },

    MyModal: { screen: ModalScreen },
    test: { screen: testScreen },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />,
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#000',

      headerMode: 'none',
      navigationOptions: () => ({
        header: null
      })
    }
  }
);

const MainApp = StackNavigator(
  {
    LoginStack: { screen: LoginNav },
    HomeStack: { screen: MainNav },
  },
  {
    initialRouteName: 'LoginStack',
    headerMode: 'none',
    navigationOptions: () => ({
      header: null
    }),
  }
);

export default (MainApp)
