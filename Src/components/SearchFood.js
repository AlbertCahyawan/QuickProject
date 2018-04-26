import React, { Component } from 'react';
import { Item, Icon, Input, Text, Button, List, ListItem, Left, Body, Thumbnail, Content, Right, Container } from 'native-base'; 

import { connectStyle } from 'native-base';
import { withNavigation } from 'react-navigation'; 

import Food from '../assets/restaurant.png';
 
const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });

class SearchFood extends Component {

    state = {
        appIsReady: false
    }
    
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

        <Content>
        <Item searchBar rounded>
          <Icon name="ios-search" />
          <Input placeholder="Search For Restaurant" /> 
          
          <Button transparent>
          <Text>Search</Text>
          </Button>
          
        </Item> 

        <List>
            <ListItem style={styles.restaurantContainer}
                    button onPress={() => this.props.navigation.navigate('test', )} >
            <Left>
                <Body>
                <Thumbnail square source={Food}
                            style={styles.restaurantImage} />
                <Text note>Restaurant Star</Text>
                </Body>
                
                <Body Small>
                <Text>Restaurant Name 1</Text>
                <Text note>Restaurant Detail</Text>
                </Body> 
            </Left> 
            
            
            <Right>
                <Text note>3:43 pm</Text>
            </Right>
            </ListItem> 
        </List> 
        </Content>
        
    );
  }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor:'lightgrey',
      }, 
     
    restaurantContainer:{
        backgroundColor:'white',  
        marginLeft: 5,  
        margin: 5,
      },
    
    restaurantImage:{ 
        marginLeft: 2,
      }
 
}; 

export default withNavigation(SearchFood);
 