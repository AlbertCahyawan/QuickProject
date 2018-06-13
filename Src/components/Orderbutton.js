import React, { Component } from 'react';  
 
import {Button, Text} from 'native-base';
import { withNavigation } from 'react-navigation'; 

 class Orderbutton extends Component {
     render(){
         return(  
            <Button onPress={() => this.props.navigation.navigate('test')} 
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center', 
                                        marginBottom: 5,}} >
                                <Text>Ok</Text>
            </Button>
         );
     }
} 

export default withNavigation(Orderbutton)