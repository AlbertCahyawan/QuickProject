import React, { Component } from 'react';  

import { connectStyle, Content, Form, Item, Input, Text, Button, Icon, Left, Body, Right} from 'native-base';
import { withNavigation } from 'react-navigation'; 

class LoginForm extends Component {
  render() {
    return (
      
      <Content style={styles.container}>
        <Form>

          <Item  rounded bordered
                 style={styles.input}>
            <Input 
            placeholder="username or email"
            placeholderTextColor="grey"
            returnKeyType="next"
            onSubmitEDITING={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false} 
             />
          </Item>

          <Item rounded bordered
                style={styles.input}>
            <Input 
            placeholder="Password"
            placeholder="Password"
            placeholderTextColor="grey"
            returnKeyType="send"
            secureTextEntry
            ref={(input) => this.passwordInput = input} 
            />
          </Item>

          <Text
         style={styles.forgotPassword}
         onPress={() => this.props.navigation.navigate('ForgotPwd')}
        >Forgot password</Text>

          <Button block primary  
                  onPress={() => this.props.navigation.navigate('Main', { Name: 'Jane' })}
                  style={styles.buttonContainer}>
            <Text> Login </Text>
          </Button>

        </Form>  
        <Button block primary  
                  onPress={() => this.props.navigation.navigate('RegisterScreen', { Name: 'Jane' })}
                  style={styles.buttonContainer}>
            <Text> SignUp </Text>
        </Button> 

        <Body style={styles.socialMediaButtonContainer}> 
          <Left>
            <Button iconLeft Primary
                    onPress={() => this.props.navigation.navigate('Main', { Name: 'Jane' })}
                    style={styles.socialMediaButton}>
                <Icon name='logo-facebook' />
                <Text>Facebook</Text>
            </Button>
          </Left>

          <Right>
            <Button iconLeft light
                    onPress={() => this.props.navigation.navigate('Main', { Name: 'Jane' })}
                    style={styles.socialMediaButton}>
                <Icon name="logo-google" />
                <Text>Google</Text>
            </Button>
          </Right> 

        </Body> 
        
         
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
    forgotPassword: {
        textAlign: 'center',  
    }, 
    socialMediaButtonContainer: {  
        alignItems:'center',
        justifyContent:'center', 
        flexDirection: 'row',
    }, 

    socialMediaButton: {  
      marginTop: 10,
      padding: 10,   
    }, 
 
}; 

export default withNavigation(LoginForm);