import React, { Component } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

import { Input, Icon, Text } from 'react-native-elements'
import { findrestaurant } from '../actions/index';
import { connect } from 'react-redux';

class SearchFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    };
  }

  onSearch() {
    if (this.state.search == "") {
    } else {
      this.props.searchRestaurant(this.state.search)
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Input placeholder="Search For Restaurant"
          underlineColorAndroid={'transparent'}
          containerStyle={{
            borderWidth: 1, borderColor: 'black', borderRadius: 20,
          }}
          inputContainerStyle={{ borderBottomWidth: 0 }}

          value={this.state.search}
          onChangeText={(text) => this.setState({ search: text })}
          leftIcon={
            <Icon
              name='md-search'
              type='ionicon'
              color='darkblue'
            />
          }
          rightIcon={
            <TouchableNativeFeedback
              onPress={() => this.onSearch()} 
            >
              <Text style={{marginRight:5}}>Search</Text>
            </TouchableNativeFeedback>
          }
        /> 
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: 'white',
  },

};
const mapStateToProps = (state, ownProps) => {
  return {
    searchresult: state.searchReducer.search
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchRestaurant: (search) => { dispatch(findrestaurant(search)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFood);