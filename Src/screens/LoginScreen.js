import React, { Component } from 'react'; 

import LoginForm from '../components/LoginForm' 

import { connect } from 'react-redux';
import { View,Text } from 'react-native';
import { connectStyle} from 'native-base';


class LoginScreen extends Component { 
    
  render() { 
    if (this.props.isLoggedIn) {
      return (
        this.props.navigation.navigate('Home') 
      );
    }else {
      return ( 
        
        <LoginForm/>   
          
      );
    } 
  }
} 

const mapStateToProps = (state, ownProps) => {
  return {
      email : state.auth.email,
      isLoggedIn: state.auth.isLoggedIn
  };
}

 export default connect(mapStateToProps)(LoginScreen);

 
