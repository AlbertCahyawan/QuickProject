import React, { Component } from 'react';

import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

import NavigationService from '../Navigation/NavigationService';

export default class SocialMedia extends Component {
    render() {
        return (
            <View>
                <View style={{ padding: 10, margin: 5, marginTop: 0, borderRadius: 20, }} >
                    <Button rounded
                        title='SignUp'
                        onPress={() => NavigationService.navigate('Register', { userName: 'Lucy' })}
                        buttonStyle={styles.buttonContainer} />
                </View>

                <Text style={{ textAlign: 'center', color: 'grey' }}>- - - -Or- - - -</Text>
                <Text style={{ textAlign: 'center' }}>Sign In With</Text>

                <View style={styles.socialMediaButtonContainer}>

                    <View style={{ padding: 10, margin: 10 }}>
                        <Button
                            title='Facebook'
                            onPress={() => NavigationService.navigate('HomeStack', { Name: 'Jane' })}
                            buttonStyle={styles.socialMediaButton}
                            icon={{ name: 'logo-facebook', type: 'ionicon', color: 'white' }} 
                        />
                    </View>

                    <View style={{ padding: 10, margin: 10 }}>
                        <Button
                            title='Google'
                            onPress={() => NavigationService.navigate('HomeStack', { Name: 'Jane' })}
                            buttonStyle={styles.socialMediaButton}
                            icon={{ name: 'logo-google', type: 'ionicon', color: 'white' }}
                        />
                    </View>

                </View>
            </View>
        );
    }
}

const styles = {

    buttonContainer: {
        backgroundColor: '#77aef4'
    },

    socialMediaButtonContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },

    socialMediaButton: {
        backgroundColor: '#77aef4'
    },

};

