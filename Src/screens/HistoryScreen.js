import React, { Component } from 'react'; 
import { Container, Header , Title, Left, Body, Right, Button, Icon, Text} from "native-base"; 
import OrderHistory from '../components/OrderHistory';

export default class HistoryScreen extends Component {  

  render() {
    return (     
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
            <Body>
              <Title>MyOrder</Title>
            </Body>
          <Right />
        </Header>

        <OrderHistory/>

      </Container>
    );
  }
} 

const styles = {  

}; 
