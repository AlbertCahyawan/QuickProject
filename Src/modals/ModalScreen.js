import React, { Component } from 'react'; 
import { Container, Image, Text, Button ,Body,Icon, Picker, Form  } from "native-base";

export default class ModalScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }

  
  onValueChange2(value) {
    this.setState({
      selected: value
    });
  }
   
  
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
        
        <Form>
            <Picker
              mode="dropdown"
              placeholder="Select One"
              placeholderStyle={{ color: "#2874F0" }}
              note={false}
              style={{ width: undefined }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
      </Container> 
         
    );
  }
}

