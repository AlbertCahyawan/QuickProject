import React, { Component } from 'react';
import { AppRegistry, Alert } from "react-native";
import { Container, Header , Title, Left, Body, Content, Right, Icon, Button, Text, Thumbnail, H1, H3,} from "native-base"; 
import {connect} from 'react-redux';

import Food from '../assets/restaurant.png';

  const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });

class ProfileScreen extends Component {
  componentDidMount () {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([Food]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

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
              <Title>Profile</Title>
            </Body>
          <Right />
        </Header>

        <Content padder>
          <Body>
            <Thumbnail round source={Food}
                              style={styles.profileImage} />
            <H1>User Name</H1>
          </Body>
 
            <Left>
              <Text>Email</Text>
              <H3>{`${this.props.email}`}</H3> 

              <Text>Phone</Text>
              <H3>084467896437</H3>
            </Left> 
            
            <Body>
              <Button rounded 
                    onPress={() => this.props.navigation.navigate('Login', ) }>
                <Text>Sign Out</Text> 
              </Button>
            </Body>
          
        </Content>
      </Container>
    );
  }
} 

const styles = {

  profileImage:{ 
    marginLeft: 2,
  }

}; 


const mapStateToProps = (state, ownProps) => {
  return {
      email : state.auth.email,
      isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(ProfileScreen);
