import React, { Component } from 'react'; 
import { Container, Header , Title, Left, Body, Content, Right, Icon, Button, Text, Thumbnail, H1, H3,} from "native-base"; 
import {connect} from 'react-redux';

import UserInfo from '../components/UserInfo';
 
class ProfileScreen extends Component {
  componentDidMount () { 
  } 

  render() {
    if(this.props.isLoggedIn){
      return (     
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
              <Body>
                <Title>Profile</Title>
              </Body>
            <Right />
          </Header> 
          
          <UserInfo/>

        </Container>
      );

    }else{
      return (     
        this.props.navigation.navigate('Login')
      );

    }
    
  }
} 

const styles = { 
}; 


const mapStateToProps = (state, ownProps) => {
  return {
      email : state.auth.email,
      isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(ProfileScreen);
