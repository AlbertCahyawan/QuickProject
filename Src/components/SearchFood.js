import React, { Component } from 'react';
import { Item, Icon, Input, Text, Button, Content, } from 'native-base';

import { findrestaurant } from '../actions/index'; 
import { connect } from 'react-redux'; 
   
class SearchFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    };
  }

  onSearch(){
    if(this.state.search == ""){  
    }else{ 
      this.props.searchRestaurant(this.state.search)
    } 
  }
 
  render() { 
    return (
      <Content contentContainerStyle={styles.container}>
        <Item searchBar rounded>
          <Icon name="ios-search" />
          <Input placeholder="Search For Restaurant"
            value={this.state.search}
            onChangeText={(text) => this.setState({ search: text })} />

          <Button transparent
            onPress={() => this.onSearch()}>
            <Text>Search</Text>
          </Button>
        </Item> 
 
      </Content>
    );
  }
}

const styles = {
  container: {
    marginTop: 5,
  },

}; 
const mapStateToProps = (state, ownProps) => {
  return {
    searchresult : state.searchReducer.search
  };
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    searchRestaurant: (search) => { dispatch(findrestaurant(search)); }  
  }
}  

export default connect(mapStateToProps, mapDispatchToProps)(SearchFood);