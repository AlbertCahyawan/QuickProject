import React, { Component } from 'react';
import { Content, Thumbnail, Text, Item, Body, Card, CardItem, Container, Button, Left, ListItem, List, Right, Icon} from 'native-base'; 
import { Col, Row, Grid } from 'react-native-easy-grid';
 
import { withNavigation } from 'react-navigation'; 

import Food from '../assets/restaurant.png';
 
const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });

let routes = [{ 
    fname : "Chicken Teriyaki", 
    Fqty : 1,
    fprice : 20000, 
  },
  { 
    fname : "Rice Bowl", 
    Fqty : 1,
    fprice : 15000, 
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

  render() {
    return (  
        <Content style={styles.billContent}>
          <List>
            <ListItem itemDivider thumbnail>
              
              <Text>Your Order</Text>
            </ListItem>  

            <ListItem>
              <Body>
                <Text>Food Name</Text> 
              </Body>
              
              <Body> 
                <Text>Quantity</Text>    
              </Body>  
              
              <Body> 
                <Text>Price</Text>  
              </Body> 
              
            </ListItem> 
            
            <List contentContainerStyle={styles.list}
            dataArray={routes}
            renderRow={data => { 
                return ( 
                  <ListItem noBorder> 
                    <Body>
                      <Text>{data.fname}</Text>
                    </Body>
                      
                    <Body>
                      <Text>{data.Fqty}</Text>
                    </Body>
                    
                    <Body>
                      <Text>{data.fprice}</Text>  
                    </Body>

                    <Icon  name="trash" 
                      Button onPress={() => alert('Remove')}/>
                    
                </ListItem> 
                );
            }}        
          />  

            <ListItem itemDivider>
                
            </ListItem>

            <ListItem>
              <Body>
                <Text>Detailed Bill</Text>
              </Body> 
            </ListItem>

            <ListItem noBorder>
              <Body>
                <Text>GrandTotal</Text>
              </Body>
                
              <Body> 
              </Body>
              
              <Body>
                <Text>15.000</Text>  
              </Body> 
            </ListItem>

            <ListItem noBorder>
              <Body>
                <Text>Item Total(5)</Text>
              </Body>
                
              <Body> 
              </Body>
              
              <Body>
                <Text>15.000</Text>  
              </Body> 
            </ListItem>

            <ListItem noBorder>
              <Body>
                <Text>Tax</Text>
              </Body>
                
              <Body> 
              </Body>
              
              <Body>
                <Text>15.000</Text>  
              </Body> 
            </ListItem>

            <ListItem>
              <Body>
                <Text>GrandTotal</Text>
              </Body>
                
              <Body> 
              </Body>
              
              <Body>
                <Text>30.000</Text>  
              </Body> 
            </ListItem>
            
          </List>
          
          <Button block primary
                  style={styles.orderButton}>
            <Text>Order</Text>
          </Button> 
        </Content>  
    );
  }
}

const styles = {
    billContainer: { 
        backgroundColor:'lightgrey',
      }, 
     
    
    billContent:{  
      backgroundColor:'white',
      },
    orderButton:{
      margin:10, 
    }
 
}; 

export default withNavigation(RestaurantMenu);
 