import React, { Component } from 'react';
import { connectStyle, Text, Button, List, ListItem, Left, Body, Thumbnail, Content, Right, Container, Spinner, Input,Form, Item,Label } from 'native-base'; 

import DatePicker from 'react-native-datepicker';
import {
    Dialog,
    ProgressDialog,
    ConfirmDialog,
} from 'react-native-simple-dialogs'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
import { withNavigation } from 'react-navigation';  
 
class SearchFoodDialog extends Component { 
    constructor(props){
        super(props); 
        this.state = {    
            dataSource : [], 
            datetime: '2018-06-6 20:00', 
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
      componentDidMount () { 
    }
     
    
  render() { 
        return (
            <Content>  
             
            </Content>    
             
        ); 
    }
} 
const styles = {  
    dialogContainer: {
        flexGrow:1,
        flexDirection:"column",
        justifyContent:"center"
   },  
 
}; 

export default withNavigation(SearchFoodDialog);
 
