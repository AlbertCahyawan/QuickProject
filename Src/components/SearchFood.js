import React, { Component } from 'react';
import { Item, Icon, Input, Text, Button, List, ListItem, Left, Body, Thumbnail, Content, Right, Container } from 'native-base'; 

import{Alert, ListView,FlatList} from 'react-native';

import { connectStyle } from 'native-base';
import { withNavigation } from 'react-navigation'; 

import Food from '../assets/restaurant.png';
 
const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });



let routes = [{
    rimage: Food ,
    rname : "Restaurant1", 
    rdetail : "Restaurant Detail",
    rtime : '3.45'
    }, 
]; 

class SearchFood extends Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {  
            refreshing : false
        };
    }
 
 
    AddItemsToArray=()=>{ 
       //Adding Items To Array.
       routes.push({  
           rimage: Food ,
           rname : "Restaurant1", 
           rdetail : "Restaurant Detail",
           rtime : '3.45'
        }); 
        this.setState({refreshing : true});
        this.setState({refreshing : false});    
    }

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

      renderEntries({ item, index }) {
        return(
            <Button onPress={()=> this.setState({value: this.state.data[index].value+1})}>
                 <Text>{this.state.data[index].value}</Text>
            </Button>
        )
    }
      
  render() {
    return ( 

        <Content>
        <Item searchBar rounded>
          <Icon name="ios-search" />
          <Input placeholder="Search For Restaurant" /> 
          
          <Button transparent
                  onPress={this.AddItemsToArray}>
          <Text>Search</Text>
          </Button>  
        </Item>    

        <List 
            dataArray={routes}
            refreshing ={this.state.refreshing}
            onRefresh ={this.onRefresh}
            renderRow={data => { 
                return (
                    <ListItem style={styles.restaurantContainer}
                    button onPress={() => this.props.navigation.navigate('test', )} >
            
                    <Left>
                        <Body>
                            <Thumbnail square source={Food}
                                        style={styles.restaurantImage} />
                            <Text note>Restaurant Star</Text>
                        </Body>
                        
                        <Body Small>
                            <Text>{data.rname} </Text>
                            <Text note>{data.rdetail}</Text>
                        </Body> 
                    </Left> 
                     
                    <Right>
                        <Text note>{data.rtime} </Text>
                    </Right>
                    </ListItem>   

                );
            }} 
        /> 
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
 