import React, { Component } from 'react';

import { View, Image, KeyboardAvoidingView, } from 'react-native';
import { Content, Item, Input, Text, Button, Toast } from 'native-base';

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

      showToast: false
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
        } else {
          alert(JSON.stringify(responseJson))
          this.props.onLogin(responseJson[0].id, responseJson[0].email, responseJson[0].firstname,
            responseJson[0].lastname, responseJson[0].phonenumber, responseJson[0].profileimage);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  userLogin(e) { 
    if (this.state.email == "" || this.state.password == "") {
      Toast.show({
        text: 'Please Fill Both email and password',
        buttonText: 'Okay',
        duration: 3000
      }) 
    }
    else {
      this.SendLoginForm()
    }

    e.preventDefault();
  }
 
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.logoContainer}>
          <Image source={logo}
            style={styles.logoStyle} />
        </View>

        <Content style={styles.Formcontainer}>

          <Item rounded bordered
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

          >Forgot password</Text>

          <Button block rounded info
            onPress={(e) => this.userLogin(e)}
            style={styles.buttonContainer}>
            <Text> Login </Text>
          </Button>

          <SocialMedia />

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

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
  },

  logoStyle: {
    marginTop: 20,
    marginLeft: 10,
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
