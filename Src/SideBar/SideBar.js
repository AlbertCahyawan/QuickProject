import React, { Component } from 'react';
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["Home" ,"MyModal"];

export default class SideBar extends Component { 
  
  render() {
    return (
      <Container>  
        
        <Content>
          <Text
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>test1
            <Text
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
              }}
            />test2
          </Text>
          
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}