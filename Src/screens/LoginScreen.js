import React, { Component } from 'react'; 

import LoginForm from '../components/LoginForm'; 

import { connect } from 'react-redux'; 

import NavigationService from '../Navigation/NavigationService';

class LoginScreen extends Component { 
  constructor(props) {
    super(props); 
  }

  render() { 
    if (this.props.isLoggedIn) {
      return (
        this.props.navigation.navigate('HomeStack')
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

 
