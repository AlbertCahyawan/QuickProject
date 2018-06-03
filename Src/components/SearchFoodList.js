import React, { Component } from 'react';
import { connectStyle, Text, Button, List, ListItem, Left, Body, Thumbnail, Content, Right, Container, Spinner, Input,Form, Item,Label } from 'native-base'; 
 
import {
    Dialog,
    ProgressDialog,
    ConfirmDialog,
} from 'react-native-simple-dialogs'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ FlatList} from 'react-native';
import { withNavigation } from 'react-navigation';  
import Food from '../assets/restaurant.png';

const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  });
  //use whatwg-fetch-timeout
class SearchFoodList extends Component { 
    constructor(props){
        super(props); 
        this.state = {   
            refreshing : false,
            dataSource : [],
        };
    }

    state = {}

    openDialog(show) {
        this.setState({ showDialog: show })
    }

    openConfirm(show) {
        this.setState({ showConfirm: show })
    }

    optionYes() {
        this.openConfirm(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
        setTimeout(() => alert("Yes touched!"), 100);
    }

    optionNo() {
        this.openConfirm(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
        setTimeout(() => alert("No touched!"), 100);
    }

 
    fetchdata(){
          fetch('http://188.166.210.104:3000/test',{timeout: 1000}, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
          .then((response) => response.json())
          .then((responseJson) => { 
            this.setState({
              isLoading: false,
              dataSource: responseJson, 
            }, function(){
            });
    
          })
          .catch((error) =>{
            alert("eRROR");
            console.error(error);
          });
           
      } 
    
      componentDidMount () {
        this._loadAssetsAsync();
        this.fetchdata(); 
    }
    
      async _loadAssetsAsync() {
        const imageAssets = cacheImages([Food]);
        await Promise.all([...imageAssets]);
        this.setState({ appIsReady: true });
      }
    
  render() {
      if(this.state.isLoading){
        return(
            <Content contentContainerStyle={styles.restaurantlistContainer} rounded>
                <Body>
                    <Spinner color="blue" style={styles.spinnerContainer}/>
                </Body> 
            </Content> 
        ) 
      }else{ 
        return (   
            <Content contentContainerStyle={styles.restaurantlistContainer} rounded> 
 
            <FlatList
            data={this.state.dataSource}
            extraData={this.state} 
            renderItem={({item}) => 
            
            <ListItem style={styles.restaurantContainer}
            button onPress={() => this.openDialog(true)} >

                <Left>
                    <Body>
                        <Thumbnail square source={Food}
                                    style={styles.restaurantImage} />
                    
                        <Text note>{item.rimage}</Text>
                        <Stars
                            rating={item.ratings}
                            count={5}
                            half={true}
                            fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                        />
                        
                    </Body>
                    
                    <Body Small>
                        <Text>{item.rname} </Text>
                        <Text note>{item.rdetail}</Text>
                    </Body> 
                </Left> 
                
                <Right>
                    <Text note>{item.rtime} </Text>
                </Right>
            </ListItem>  
            }
            keyExtractor={(item, index) => `key-${index}`}
            /> 

            <Dialog 
                visible={this.state.showDialog} 
                title="Reservation"
                onTouchOutside={() => this.setState({showDialog: false})} > 

                <Form contentContainerStyle={styles.dialogContainer}> 
                    <Item>  
                        <Input placeholder="Table For" /> 
                    </Item> 
                    <Button onPress={() => this.props.navigation.navigate('test')}  >
                        <Text>Ok</Text>
                    </Button>  
                </Form>
                 
            </Dialog> 

            </Content>  
        ); 
      } 
    
  }
} 
const styles = {  
    spinnerContainer: {
        flex: 1,  
    },
    restaurantlistContainer: { 
        height: 500,
        backgroundColor:'lightgrey',
        margin: 5,   
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da', 
      }, 
     
    restaurantContainer:{
        backgroundColor:'white',  
        marginLeft: 0,  
        margin: 0, 
        marginBottom:5,  
      },
    
    restaurantImage:{ 
        marginLeft: 2,
      },
    
    dialogContainer: {
        flexGrow:1,
        flexDirection:"column",
        justifyContent:"center"
   }, 
   myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width:1, height:1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  }
 
}; 

export default withNavigation(SearchFoodList);
 
