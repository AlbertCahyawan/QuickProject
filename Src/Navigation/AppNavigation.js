import React, { Component } from 'react';
  
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux'; 

import {addNavigationHelpers,DrawerNavigator } from 'react-navigation'; 

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';   
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import RegisterScreen from '../screens/RegisterScreen';
  
import ProfileScreen from '../screens/ProfileScreen'
import HistoryScreen from '../screens/HistoryScreen'
import SupportScreen from '../screens/SupportScreen'

import ModalScreen from '../modals/ModalScreen';
import testScreen from '../screens/testScreen';

import SideBar from "../SideBar/SideBar.js";   

const LoginNav = DrawerNavigator(
  {
    Splash: { screen: SplashScreen }, 

    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    ForgotPwd: { screen: ForgotPasswordScreen }, 
  },
  { 
    initialRouteName: 'Login', 
  }
);

const MainNav = DrawerNavigator(
    {
      Splash: { screen: SplashScreen },  

      Home: { screen: HomeScreen },
      Profile: { screen: ProfileScreen },
      History: { screen: HistoryScreen},
      Support: { screen: SupportScreen},

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

const MainApp = DrawerNavigator(
  {
    Login: { screen: LoginNav }, 
    Home: { screen: MainNav }, 
  },
  { 
    initialRouteName: 'Home',  
  }
);

export default (MainApp)
