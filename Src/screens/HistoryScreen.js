import React, { Component } from 'react';  
import { Header, Text, Icon } from 'react-native-elements';

import {View} from 'react-native';

import OrderHistory from '../components/OrderHistory';

export default class HistoryScreen extends Component {  

  render() {
    return (     
      <View>
        
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
            centerComponent={<Text h4 style={{ color: 'white' }}>MyOrder</Text>}
            statusBarProps={{ barStyle: 'dark-content', translucent: true }}
          /> 
        <OrderHistory/>

      </View>
    );
  }
} 

const styles = {  

}; 
 
