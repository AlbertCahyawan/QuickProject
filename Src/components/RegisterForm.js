import React, { Component } from 'react';

import { Content, Form, Item, Input, Text, Button, H1, } from 'native-base';

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
        };
    }
    Register() { 

        if (this.state.email == "" || this.state.firstname == "" || this.state.lastName == "" || this.state.password == "" || this.state.phonenumber == "") {
            alert("fill all the form first before registering")
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
            <Content style={styles.container}>
                <H1>Register</H1>
                <Form>

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
                            onChangeText={(text) => this.setState({ email: text })} />
                    </Item>

                    <Item rounded bordered
                        style={styles.input}>
                        <Input
                            placeholder="FirstName"
                            placeholderTextColor="grey"
                            returnKeyType="next"
                            onSubmitEDITING={() => this.passwordInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({ firstname: text })} />
                    </Item>

                    <Item rounded bordered
                        style={styles.input}>
                        <Input
                            placeholder="LastName"
                            placeholderTextColor="grey"
                            returnKeyType="next"
                            onSubmitEDITING={() => this.passwordInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({ lastname: text })} />
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
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({ phonenumber: text })} />
                    </Item>

                    <Item rounded bordered
                        style={styles.input}>
                        <Input
                            placeholder="Password"
                            placeholderTextColor="grey"
                            returnKeyType="send"
                            secureTextEntry
                            ref={(input) => this.passwordInput = input}
                            onChangeText={(text) => this.setState({ password: text })} />
                    </Item>

                    <Button block rounded info
                        onPress={() => this.Register()}
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
