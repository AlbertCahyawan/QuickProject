import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Thumbnail, Left, Icon } from "native-base";
import { connect } from 'react-redux';

import Food from "../assets/ProfileTemplate.png"
import FoodBackground from "../assets/BackgroundDrawer.jpg"

const routes = [
 
  {
    name: "Profile",
    icon: "people"
  },
  {
    name: "History",
    icon: "clock"
  },
  
];

// {
//   name: "Home",
//   icon: "home"
// },
// {
//   name: "Support",
//   icon: "cog"
// },

class SideBar extends Component {

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
              source={{ uri: "http://188.166.210.104:3000/profileimage/" + this.props.profileimage }}
            />

            <Text style={{ color: "white" }}>
              {this.props.firstname} {this.props.lastname}
            </Text>

            <Text style={{ color: "white" }}>
              {this.props.email}
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

const mapStateToProps = (state, ownProps) => {
  return {
    profileimage: state.auth.profileimage,
    email: state.auth.email,
    firstname: state.auth.firstname,
    lastname: state.auth.lastname,
  };
}

export default connect(mapStateToProps)(SideBar);
