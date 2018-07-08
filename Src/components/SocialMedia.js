import React, { Component } from 'react';  
 
import {View} from 'react-native';
import {  Text, Button, Icon, Left, Body, Right} from 'native-base'; 

import NavigationService from '../Navigation/NavigationService';

 export default class SocialMedia extends Component { 
    render(){
         return( 
            <View>
                
            <Button block rounded info  
                    onPress={() => NavigationService.navigate('Register', { userName: 'Lucy' }) }
                    style={styles.buttonContainer}>
              <Text> SignUp </Text>
            </Button>  
             
            <Body>
                <Text>Sign in with</Text>
            </Body>
            
            <Body style={styles.socialMediaButtonContainer}> 
                <Left>
                <Button iconLeft info
                        onPress={() => NavigationService.navigate('HomeStack', { Name: 'Jane' })}
                        style={styles.socialMediaButton}>
                    <Icon name='logo-facebook' />
                    <Text>Facebook</Text>
                </Button>
                </Left>

                <Right>
                <Button iconLeft info
                        onPress={() => NavigationService.navigate('HomeStack', { Name: 'Jane' })}
                        style={styles.socialMediaButton}>
                    <Icon name="logo-googleplus" />
                    <Text>Google</Text>
                </Button>
                </Right> 

           </Body> 

           </View>
         );
     }

}

const styles = {

    buttonContainer: {  
        marginTop: 10,
        padding: 10, 
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
 