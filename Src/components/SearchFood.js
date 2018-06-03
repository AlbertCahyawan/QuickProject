import React, { Component } from 'react';
import { connectStyle, Item, Icon, Input, Text, Button, Content,  } from 'native-base'; 
 
import { withNavigation } from 'react-navigation'; 
 
class SearchFood extends Component { 
  render() { 
    return (   
        <Content contentContainerStyle={styles.container}>
        <Item searchBar rounded>
          <Icon name="ios-search" />
          <Input placeholder="Search For Restaurant" /> 
          
          <Button transparent
                  onPress={this.AddItemsToArray}>
          <Text>Search</Text>
          </Button>  
        </Item>
        </Content> 
    );
  }
}

const styles = {
    container: { 
        marginTop:5,
      },  
 
}; 

export default withNavigation(SearchFood);
 