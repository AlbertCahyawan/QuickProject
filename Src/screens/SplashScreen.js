import React, { Component } from 'react';

import { connect } from 'react-redux';
 
import Splash from '../components/Splash'

class SplashScreen extends Component {           
  render() { 

    if (this.props.isLoggedIn) {
        return (
          this.props.navigation.navigate('Home')
        );
    } else {
        return (
          this.props.navigation.navigate('Login')
        );
    }
       
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
}

 export default connect(mapStateToProps)(SplashScreen);
