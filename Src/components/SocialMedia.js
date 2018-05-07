import React, { Component } from 'react';  

import { View, Image, KeyboardAvoidingView,} from 'react-native';
import { connectStyle, Content,Text, Button, Icon, Left, Body, Right} from 'native-base';
import { withNavigation } from 'react-navigation'; 

 class SocialMedia extends Component {
     render(){
         return( 
            <Content>

            <Button block rounded info  
                    onPress={() => this.props.navigation.navigate('Register', { Name: 'Jane' })}
                    style={styles.buttonContainer}>
              <Text> SignUp </Text>
            </Button>  
             
            <Body>
                <Text>Sign in with</Text>
            </Body>
            
            <Body style={styles.socialMediaButtonContainer}> 
                <Left>
                <Button iconLeft info
                        onPress={() => this.props.navigation.navigate('Home', { Name: 'Jane' })}
                        style={styles.socialMediaButton}>
                    <Icon name='logo-facebook' />
                    <Text>Facebook</Text>
                </Button>
                </Left>

                <Right>
                <Button iconLeft info
                        onPress={() => this.props.navigation.navigate('Home', { Name: 'Jane' })}
                        style={styles.socialMediaButton}>
                    <Icon name="logo-googleplus" />
                    <Text>Google</Text>
                </Button>
                </Right> 

           </Body> 

           </Content>
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

export default withNavigation(SocialMedia)