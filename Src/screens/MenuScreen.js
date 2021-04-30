import React, { Component } from 'react';
import { View  } from 'react-native'; 
import {Header, Icon, Text} from 'react-native-elements'; 

import RestaurantMenu from '../components/RestaurantMenu' 

export default class MenuScreen extends Component {
    
  render() {    
    return ( 
      <View
      style={styles.container}> 

        <Header
            outerContainerStyles={{ height: 60, paddingTop: 20 }}
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
        <RestaurantMenu/>
           
      </View> 
    );
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor:'lightblue',
  },

  imageStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40
  },  
};

 
