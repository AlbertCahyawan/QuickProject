import React, { Component } from 'react';  

import { View, Image, KeyboardAvoidingView,} from 'react-native';
import { connectStyle, Content, Form, Item, Input, Text, Button, Icon, Left, Body, Right,Toast} from 'native-base';
import { withNavigation } from 'react-navigation'; 
 
import Expo from 'expo';   
import {connect} from 'react-redux'

import { login } from '../actions/auth';
import SocialMedia from './SocialMedia'

import logo from '../assets/icons/pure-icon.png'; 
  
const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

class LoginForm extends Component { 

  constructor (props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        
        showToast: false 
    };
  }
 

  userLogin (e) { 

    if(this.state.email == "" ||this.state.password == ""){
      Toast.show({
        text: 'Please Fill Both email and password',
        buttonText: 'Okay',
        duration: 3000
      }) 
    
    }else if(this.state.email != "carval@live.com" && this.state.password != "password"){
      Toast.show({
        text: 'Email or password is wrong',
        buttonText: 'Okay',
        duration: 3000
      }) 

    }else{
      this.props.onLogin(this.state.email, this.state.password); 
    }
       
      e.preventDefault();
  }
 
  state = {
    appIsReady: false
  }
  
  componentDidMount () {
    this._loadAssetsAsync();
  }
  
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([logo]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

  render() { 
    const { handleSubmit, reset } = this.props; 
    return ( 
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        
        <View style={styles.logoContainer}>
            <Image source={logo}
                    style={styles.logoStyle} /> 
        </View>

        <Content style={styles.Formcontainer}>
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
              autoCorrect={false} 

              value={this.state.email} 
              onChangeText={(text) => this.setState({ email: text })} /> 
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

              value={this.state.password} 
              onChangeText={(text) => this.setState({ password: text })} /> 
              
            </Item>   

            <Text
                    style={styles.forgotPassword}
                    onPress={() => this.props.navigation.navigate('ForgotPwd')}
            >Forgot password</Text>

            <Button block rounded info  
                    onPress={(e) => this.userLogin(e)} 
                    style={styles.buttonContainer}>
              <Text> Login </Text>
            </Button> 
          </Form>    

          <SocialMedia/>
           
        </Content>

      </KeyboardAvoidingView>
    );
  }
}


const styles = {
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
     },
    
    Formcontainer: {
        padding: 20
    }, 
    
    logoContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      height: '40%',
    }, 

    logoStyle: {
      marginTop: 20,
      marginLeft: 10,
      width: 40,
      height: 40
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
}; 

const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogin: (email, password) => { dispatch(login(email, password)); }  
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
