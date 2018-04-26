import React, { Component } from 'react';
import { Platform, image  } from 'react-native';
import Expo from 'expo';
 
import { STATUS_BAR_HEIGHT } from '../constants'; 

import ShoppingCart from '../components/ShoppingCart' 

import {  Container, Root, Header, Title, Left, Icon, Right,
        Button, Body, Content,Text, Card, CardItem,Item, Input, 
        List, ListItem, Thumbnail } from "native-base";

 

export default class BillScreen extends Component {
   
 
  render() {  
    const { params } = this.props.navigation.state;
    const Name = params ? params.Name : null;
  
    return ( 
      <Container
      style={styles.container}> 

        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Restaurant Name</Title>
          </Body>
          <Right />
        </Header>  
        
        <ShoppingCart/>
          
         
      </Container>
        
        
      
    );
  }
}


const styles = {
  container: { 
    backgroundColor:'lightblue',
  },
 

};

 
