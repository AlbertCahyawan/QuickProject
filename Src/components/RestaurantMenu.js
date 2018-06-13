import React, { Component } from 'react';
import { connectStyle,Content, Thumbnail, Text, Item, Body, Card, CardItem, List, ListItem, Left, Button,} from 'native-base'; 
import { Col, Row, Grid } from 'react-native-easy-grid';
import {View, Alert} from 'react-native';

import { connect } from 'react-redux'; 
  
import Food from '../assets/images.jpg';
 
import {Addingfood} from '../actions/index';

const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });
  
let routes = [{ 
    fdetail : "Fried Chicken",  
  }, 
  { 
    fdetail : "French Fries",  
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
         Alert.alert(this.props.bill.toString()); 
         this.setState({refreshing : true});
        this.setState({refreshing : false});   
    }

    AddOrder(){  
        this.props.Add("FriedChicken","1","15000")  
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
                      onPress={() => this.AddOrder()}  >
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


const mapStateToProps = (state, ownProps) => {
  return {
    bill : state.addFoodReducer.bill
  };
}  

const mapDispatchToProps = (dispatch) => {
  return {
    Add: (fname,Fqty,fprice) => { dispatch(Addingfood(fname,Fqty,fprice)); }  
  }
}   

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantMenu); 

   



