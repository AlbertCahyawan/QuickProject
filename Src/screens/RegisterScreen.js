import React, { Component } from 'react';
import { View, Image, KeyboardAvoidingView, } from 'react-native';

import RegisterForm from '../components/RegisterForm'

import logo from '../assets/LogoName.png';    

export default class RegisterScreen extends Component {

  render() { 

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
 
        <View style={styles.logoContainer}>
          <Image source={logo}
                  style={styles.logoStyle} /> 
         </View>
          
         <RegisterForm/>  
       </KeyboardAvoidingView>
    );
  }
}

const styles = {
  buttonContainer: {  
    marginTop: 10,
    padding: 10, 
},  

  container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
    }, 

  logoStyle: {
    marginTop: 20,
    marginLeft: 10, 
  },


};
 
