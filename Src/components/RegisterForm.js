import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StatusBar, } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import { connectStyle } from 'native-base';
import { withNavigation } from 'react-navigation'; 

class RegisterForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            barStyle="light-content"/>

        <TextInput
        placeholder="Email"
        placeholderTextColor="grey"
        returnKeyType="next"
        onSubmitEDITING={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}> 
        </TextInput>

        <TextInput
        placeholder="Username"
        placeholderTextColor="grey"
        returnKeyType="next"
        onSubmitEDITING={() => this.passwordInput.focus()} 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}> 
        </TextInput>

        <TextInput
        placeholder="PhoneNumber"
        placeholderTextColor="grey"
        returnKeyType="next"
        onSubmitEDITING={() => this.passwordInput.focus()}
        keyboardType="phone-pad"
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
 
        <TouchableOpacity
        style={styles.buttonContainer}>
        <Button  
          title="Register"
          onPress={() => this.props.navigation.navigate('Main')}
        />   
        </TouchableOpacity>
 
        
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

export default withNavigation(RegisterForm);