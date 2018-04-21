import React, { Component } from 'react'; 
import { Container, Image, Text, Button ,Body,Icon  } from "native-base";

export default class ModalScreen extends Component {
 
  render() { 

    return (
      <Container  style={{  alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text> 
        <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
            <Text>Go back</Text>
        </Button>
      </Container> 
         
    );
  }
}

