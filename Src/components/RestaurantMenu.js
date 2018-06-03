import React, { Component } from 'react';
import { connectStyle,Content, Thumbnail, Text, Item, Body, Card, CardItem, List, ListItem, Left, Button,} from 'native-base'; 
import { Col, Row, Grid } from 'react-native-easy-grid';
import {View, Alert} from 'react-native';

import { withNavigation } from 'react-navigation'; 

import Food from '../assets/restaurant.png';
 
const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });
  
let routes = [{ 
    fdetail : "Restaurant Detail",  
  }, 
];
class RestaurantMenu extends Component {

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

      AddItemsToArray=()=>{ 
        
        //Adding Items To Array.
        routes.push({  
            fdetail : "Restaurant Detail",  
         });  
         Alert.alert(routes.toString()); 
         this.setState({refreshing : true});
        this.setState({refreshing : false});   
    }

  render() {
    return (  
      <Content style={styles.foodlistContainer}> 
        <List contentContainerStyle={styles.list}
            dataArray={routes}
            refreshing ={this.state.refreshing}
            onRefresh ={this.onRefresh}
            renderRow={data => { 
                return ( 
                  <View style={styles.row}> 
                      <Thumbnail square  source={Food} />  
                      <Text note>{data.fdetail}</Text>    
                      <Button block success
                      onPress={this.AddItemsToArray}  >
                      <Text>ADD</Text>
                      </Button> 
                  </View>  
                );
            }}        
          /> 
      </Content> 
    );
  }
}

const styles = {  

    list: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap', 
      backgroundColor: '#CCC', 
     }, 
     
     row: {
      marginTop: 2,
      justifyContent: 'center', 
      alignItems: 'center',
      padding: 5,
      width: 120,
      height: 120,
      borderWidth: 1,
      borderColor: '#CCC',
      backgroundColor: '#F6F6F6', 
    },
      
    
 
}; 

export default withNavigation(RestaurantMenu);
 