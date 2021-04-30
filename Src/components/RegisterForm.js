import React, { Component } from 'react';

import { View } from 'react-native';
import { Button, Text, Input, Icon } from 'react-native-elements'

import { withNavigation } from 'react-navigation';

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            phonenumber: '',
            password: '',
            registerError:' ',
        };
    }
    Register() {

        if (this.state.email == "" || this.state.firstname == "" || this.state.lastName == "" || this.state.password == "" || this.state.phonenumber == "") {
            alert("fill all the form first before registering")
            this.setState({
                registerError: "fill all the form first before registering" 
              });
        } else {
            this.SendRegistration()
        }
    }

    SendRegistration() {

        fetch('http://188.166.210.104:3000/signup', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                password: this.state.password,
                phonenumber: this.state.phonenumber,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={styles.inputName}>
                        <Input
                            placeholder="FirstName"
                            placeholderTextColor="grey"
                            returnKeyType="next"
                            onSubmitEDITING={() => this.passwordInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({ firstname: text })}
                            leftIcon={
                                <Icon
                                    name='md-person'
                                    type='ionicon'
                                    color='darkblue'
                                />
                            }
                        />
                    </View>

                    <View
                        style={styles.inputName}>
                        <Input
                            placeholder="LastName"
                            placeholderTextColor="grey"
                            returnKeyType="next"
                            onSubmitEDITING={() => this.passwordInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({ lastname: text })}
                            leftIcon={
                                <Icon
                                    name='md-person'
                                    type='ionicon'
                                    color='darkblue'
                                />
                            }
                        />
                    </View>
                </View>


                <View
                    style={styles.input}>
                    <Input
                        placeholder="Email"
                        placeholderTextColor="grey"
                        returnKeyType="next"
                        onSubmitEDITING={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ email: text })}
                        leftIcon={
                            <Icon
                                name='md-mail'
                                type='ionicon'
                                color='darkblue'
                            />
                        }
                    />
                </View>

                <View
                    style={styles.input}>
                    <Input
                        placeholder="PhoneNumber"
                        placeholderTextColor="grey"
                        returnKeyType="next"
                        onSubmitEDITING={() => this.passwordInput.focus()}
                        keyboardType="phone-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ phonenumber: text })}
                        leftIcon={
                            <Icon
                                name='ios-call'
                                type='ionicon'
                                color='darkblue'
                            />
                        } />
                </View>

                <View
                    style={styles.input}>
                    <Input
                        placeholder="Password"
                        placeholderTextColor="grey"
                        returnKeyType="send"
                        secureTextEntry
                        ref={(input) => this.passwordInput = input}
                        onChangeText={(text) => this.setState({ password: text })}
                        leftIcon={
                            <Icon
                                name='md-lock'
                                type='ionicon'
                                color='darkblue'
                            />
                        }
                        errorStyle={{ color: 'red', textAlign: 'center' }}
                        errorMessage={this.state.registerError}
                    />
                </View>

                <View style={{ marginTop: 10, padding: 10, }}>
                    <Button rounded
                        title='Register'
                        onPress={() => this.Register()}
                        buttonStyle={styles.buttonContainer}
                    />
                </View>

                <Text onPress={() => this.props.navigation.navigate('Login')} style={{ textAlign: 'center', marginTop: 10 }}>
                    Already Registered? Login Here
                </Text>

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
    },

    inputName: {
        marginBottom: 10,
        width: '50%',
    },

    buttonContainer: {
        borderRadius: 20,
        backgroundColor: '#77aef4' 
    },
};

export default withNavigation(RegisterForm);
