import React, { Component } from 'react';
import {  Text, ListItem,  Content,} from 'native-base'; 
 
import { withNavigation } from 'react-navigation'; 
  
let routes = [{
    rnam2: "test2" ,
    rname : "tesst1",  
    }, 
]; 
  
class SearchFood extends Component {

    constructor(props){
        super(props); 
        this.state = {   
            refreshing : false
        };
    }
 
    AddItemsToArray=()=>{ 
       //Adding Items To Array.
       routes.push({  
        rnam2: "test2" ,
        rname : "tesst1",
        });   
        this.setState({refreshing : true});
        this.setState({refreshing : false});   
    }
   
      
  render() {
      return(
        <Content>
        <List 
            dataArray={routes}
            refreshing ={this.state.refreshing}
            onRefresh ={this.onRefresh}
            renderRow={data => { 
                return (
                    <Text>{data.rnam2} {data.rname}</Text> 
                );
            }} 
        /> 
        </Content>
      );  
  }
} 

export default withNavigation(SearchFood);
 