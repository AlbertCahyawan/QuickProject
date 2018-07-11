import React, { Component } from 'react';

import { View, Image, KeyboardAvoidingView } from 'react-native'; 
import { Icon, Button, Text, Input } from 'react-native-elements'

import { connect } from 'react-redux';

import { login } from '../actions/auth';
import SocialMedia from './SocialMedia';

import logo from '../assets/LogoName.png';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginError: ' ',

    };
  }

  SendLoginForm() {
    fetch('http://188.166.210.104:3000/Auth', {
      method: 'post',
      headers: ({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson == "FailedAuthenthication") {
          alert("Wrong Email Or Password")
          this.setState({
            loginError: "Wrong Email Or Password"  
          });
          
        } else {
          // alert(JSON.stringify(responseJson))
          // this.props.onLogin(responseJson[0].id, responseJson[0].email, responseJson[0].firstname,
          //   responseJson[0].lastname, responseJson[0].phonenumber, responseJson[0].profileimage);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  userLogin(e) {
    if (this.state.email == "" || this.state.password == "") {
      alert(  'Please Fill Both email and password')
      this.setState({
        loginError: "Please Fill Both email and password"  
      });
    }
    else {
      this.SendLoginForm()
    }

    e.preventDefault();
  }

  componentDidMount(){ 
   
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.logoContainer}>
          <Image source={logo}
            style={styles.logoStyle} />
        </View>

        <View style={styles.Formcontainer}>

          <Input
            placeholder="Email"
            placeholderTextColor="grey"
            returnKeyType="next"
            onSubmitEDITING={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}

            leftIcon={
              <Icon
                name='md-person'
                type='ionicon'
                color='darkblue'
              />
            }

            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
            style={styles.input} />

          <Input
            placeholder="Password"
            placeholder="Password"
            placeholderTextColor="grey"
            returnKeyType="send"
            secureTextEntry
            ref={(input) => this.passwordInput = input}

            leftIcon={
              <Icon
                name='md-lock'
                type='ionicon'
                color='darkblue'
              />
            }

            errorStyle={{ color: 'red' ,textAlign:'center'}}
            errorMessage={this.state.loginError}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
            style={styles.input} />

          <Text style={styles.forgotPassword}  >Forgot password</Text>
          <View style={{ padding: 10, margin: 5 }}>
            <Button rounded
              title='Login'
              onPress={(e) => this.userLogin(e)}
              buttonStyle={styles.button} 
            />
          </View>

          <SocialMedia />

        </View>

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

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
  },

  logoStyle: {
    marginTop: 20,
    marginLeft: 10,
  },

  input: {
  },

  buttonContainer: {
    marginTop: 10,
    padding: 10,
  },
  
  button: {
    borderRadius: 20,
    backgroundColor: '#77aef4',
  },
  forgotPassword: {
    textAlign: 'center',
  },
};

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.auth.email,
    firstname: state.auth.firstname,
    lastname: state.auth.lastname,
    phonenumber: state.auth.phonenumber,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (id, email, firstname, lastname, phonenumber, profileimage) => { dispatch(login(id, email, firstname, lastname, phonenumber, profileimage)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
