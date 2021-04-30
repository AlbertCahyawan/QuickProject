import React, { Component } from 'react'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import { connectStyle, Content, Form, Item, Input, Text, Button,} from 'native-base';
import { withNavigation } from 'react-navigation'; 

class ForgotPasswordForm extends Component {
  render() {
    return (
    <Content style={styles.container}>  
        <Form>

            <Item  rounded bordered
                 style={styles.input}>
                <Input 
                placeholder="email"
                placeholderTextColor="grey"
                returnKeyType="next"
                onSubmitEDITING={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} /> 
            </Item>
 

            <Button block rounded info  
                    onPress={() => this.props.navigation.navigate('Login',)}
                    style={styles.buttonContainer}>
                    <Text> Reset Password </Text>
            </Button>
             
        </Form>

        <Button block rounded info  
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

export default withNavigation(ForgotPasswordForm);