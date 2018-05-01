import React, { Component } from 'react';
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Button, Thumbnail, Body, Left, Icon } from "native-base";

const routes = [{name : "Home", 
                 icon : "home"
                },
                {name:"Profile",
                 icon : "people" 
                },
                {name : "History",
                 icon : "clock"
                },
                {name: "Support",
                 icon : "cog"
                },
                ];

import Food from "../assets/ProfileTemplate.png"
import FoodBackground from "../assets/BackgroundDrawer.jpg"
 

export default class SideBar extends Component { 
    
  render() {
    return (
      <Container>  
        
        <Content> 
        
        <Thumbnail
                square
                style={{ height: 140, width: "100%" }}
                    source={FoodBackground} 
            />
        <Left
        
            style={{
              position: "absolute", 
              marginTop: 20, 
              marginLeft: 10,
              alignSelf: "stretch", 
            }}>
        
          <Thumbnail 
                    source={Food}
                    /> 
            
          <Text style={{ color:"white" }}>
            Name
          </Text>
          
          <Text style={{ color:"white" }}>
          Email@gmail.com
          </Text>
        
        </Left>
            
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.name)}> 
                  <Icon name={data.icon} />
                  <Text>{data.name}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}