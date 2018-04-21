import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StatusBar, } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import { connectStyle } from 'native-base';
import { withNavigation } from 'react-navigation'; 

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            barStyle="light-content"/>

        <TextInput
        placeholder="username or email"
        placeholderTextColor="grey"
        returnKeyType="next"
        onSubmitEDITING={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}>

        </TextInput>
        
        <TextInput
        placeholder="Password"
        placeholderTextColor="grey"
        returnKeyType="send"
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}>
            
        </TextInput>

        <Text
         style={styles.forgotPassword}
        >Forgot password</Text>

        <TouchableOpacity
        style={styles.buttonContainer}>
        <Button  
          title="Login"
          onPress={() => this.props.navigation.navigate('Main')}
        />   
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonContainer}>
        <Button  
          title="SignUp"
          onPress={() => this.props.navigation.navigate('Main')}
        />   
        </TouchableOpacity>

        <View style={styles.socialMediaButtonContainer} >
        
        <TouchableOpacity
        style={styles.socialMediaButton}>
        <Button 
          
          title="Facebook"
          onPress={() => this.props.navigation.navigate('Main')}
        />   
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.socialMediaButton}>
        <Button 
          
          title="Google"
          onPress={() => this.props.navigation.navigate('Main')}
        />   
        </TouchableOpacity>
        </View>
        
        </View>
    );
  }
}

const styles = {
  container: {
        padding: 20
    }, 
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: 'white',
        color: 'white', 
        borderColor: '#d6d7da',
        borderStyle: 'solid',
    },
    buttonContainer: {
        paddingHorizontal: 10,
        marginTop: 10,
        padding: 10, 
    },
    forgotPassword: {
        textAlign: 'center',  
    }, 
    socialMediaButtonContainer: { 
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',  
    }, 

    socialMediaButton: { 
       width: '50%',
       padding: 10,    
    }, 
 
}; 

export default withNavigation(LoginForm);