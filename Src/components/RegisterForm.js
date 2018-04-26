import React, { Component } from 'react';  

import { connectStyle, Content, Form, Item, Input, Text, Button,} from 'native-base';
import { withNavigation } from 'react-navigation'; 

class RegisterForm extends Component {
  render() {
    return (
    <Content style={styles.container}>
        <Form>

            <Item  rounded bordered
                style={styles.input}>
                <Input 
                placeholder="Email"
                placeholderTextColor="grey"
                returnKeyType="next"
                onSubmitEDITING={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} /> 
            </Item>

            <Item rounded bordered
                style={styles.input}>
                <Input 
                placeholder="Username"
                placeholderTextColor="grey"
                returnKeyType="next"
                onSubmitEDITING={() => this.passwordInput.focus()} 
                autoCapitalize="none"
                autoCorrect={false} />  
            </Item>

            <Item rounded bordered
                style={styles.input}>
                <Input 
                placeholder="PhoneNumber"
                placeholderTextColor="grey"
                returnKeyType="next"
                onSubmitEDITING={() => this.passwordInput.focus()}
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false} />  
            </Item>

            <Item rounded bordered
                style={styles.input}>
                <Input 
                placeholder="Password"
                placeholderTextColor="grey"
                returnKeyType="send"
                secureTextEntry 
                ref={(input) => this.passwordInput = input}/> 
            </Item>

            <Button block info  
                  onPress={() => this.props.navigation.navigate('Login',)}
                  style={styles.buttonContainer}>
                <Text> Register </Text>
            </Button>
             
        </Form> 

        <Button block info  
                  onPress={() => this.props.navigation.goBack()}
                  style={styles.buttonContainer}>
            <Text> Back </Text>
        </Button>  
    
    </Content>
    );
  }
}

const styles = {
    container: {
        padding: 20
    }, 
    input: {
        marginBottom: 10, 
        backgroundColor: 'white',  
    },
    
    buttonContainer: {  
        marginTop: 10,
        padding: 10, 
    },  
 
 
}; 

export default withNavigation(RegisterForm);