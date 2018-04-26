import React, { Component } from 'react';
import { Content, Thumbnail, Text, Item, Body, Card, CardItem} from 'native-base'; 
import { Col, Row, Grid } from 'react-native-easy-grid';

import { connectStyle } from 'native-base';
import { withNavigation } from 'react-navigation'; 

import Food from '../assets/restaurant.png';
 
const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });

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

  render() {
    return ( 

      <Content style={styles.foodlistContainer}>
        <Grid>
          <Row  style={{ backgroundColor: '#635DB7' }}>
            
            <Col style={styles.foodContainer}
                  button onPress={() => alert('Add') }>
              <Thumbnail square source={Food} 
                          />
              <Text note>Food Detail</Text>
            </Col> 

            <Col style={styles.foodContainer}
                  button onPress={() => alert('Add') }>
              <Thumbnail square source={Food} 
                          />
              <Text note>Food Detail</Text>
            </Col> 

            <Col style={styles.foodContainer}
                  button onPress={() => alert('Add') }>
              <Thumbnail square source={Food} 
                          />
              <Text note>Food Detail</Text>
            </Col> 

            <Col style={styles.foodContainer}
                  button onPress={() => alert('Add') }>
              <Thumbnail square source={Food} 
                          />
              <Text note>Food Detail</Text>
            </Col> 

          </Row> 
        </Grid>
      </Content>
        
    );
  }
}

const styles = {
    foodlistContainer: { 
        backgroundColor:'lightgrey',
      }, 
     
    
    foodContainer:{  
        alignSelf: "center" 
      }
 
}; 

export default withNavigation(RestaurantMenu);
 