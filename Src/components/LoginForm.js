import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StatusBar, } from 'react-native'; 
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
        placeholder="username or email"
        placeholderTextColor="grey"
        returnKeyType="send"
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}>
            
        </TextInput>

        <TouchableOpacity>
        <Button 
          style={styles.buttonContainer}
          title="Login"
          onPress={() => this.props.navigation.navigate('Main')}
        />   
        </TouchableOpacity>

        <Text
         style={styles.ForgotPassword}
        >Forgot password</Text>
       </View>
    );
  }
}

const styles = {
  container: {
        padding: 20
    }, 
    input: {
        marginBottom: 20,
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: 'lightblue',
        color: 'white',
    },
    buttonContainer: {
        textAlign: 'center', 
        backgroundColor: 'blue',
    },
    ForgotPassword: {
        textAlign: 'center',  
    }, 


}; 

export default withNavigation(LoginForm);