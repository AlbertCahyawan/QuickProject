import React, { Component } from 'react';

import { View, } from 'react-native';
import { Header, Icon, Text } from 'react-native-elements';

import ShoppingCart from '../components/ShoppingCart' 

export default class BillScreen extends Component {
  render() { 
    return (
      <View
        style={styles.container}>

        <Header
          outerContainerStyles={{ height: 60, paddingTop: 20  }}
          leftComponent={
            <Icon
              onPress={() => this.props.navigation.goBack()}
              name='md-arrow-back'
              type='ionicon'
              size={15}
              color='white'
            />
          }
          centerComponent={<Text h4 style={{ color: 'white' }}>Restaurant Name</Text>}
          statusBarProps={{ barStyle: 'dark-content', translucent: true }}
        />
        <ShoppingCart />

      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'lightblue',
  },


};


