import React, { Component } from 'react';
import { Platform, image  } from 'react-native';
import Expo from 'expo';
 
import { STATUS_BAR_HEIGHT } from '../constants'; 

import RestaurantMenu from '../components/RestaurantMenu' 

import {  Container, Root, Header, Title, Left, Icon, Right,
        Button, Body, Content,Text, Card, CardItem,Item, Input, 
        List, ListItem, Thumbnail } from "native-base";

 

export default class MenuScreen extends Component {
   
 
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
        
        <RestaurantMenu/>
          
         
      </Container>
        
        
      
    );
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor:'lightblue',
  },

  imageStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40
  },
  header:{
    height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
    backgroundColor: '#2196F3'
  },
  headertitle:{
    marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
    color: 'white'
  },
  

};

 
