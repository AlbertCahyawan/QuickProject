import React, { Component } from 'react'; 

import {View} from 'react-native'
import {Header, Text, Button, Icon } from 'react-native-elements'

import Suggestion from '../components/Suggestion' 
  
export default class HomeScreen extends Component {
  
  render() {

    return (
      <View style={styles.container}>
        <Header   
          outerContainerStyles={{height: 60, paddingTop: 20}}
          leftComponent={
            <Icon
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
              name='menu'
              size={15}
              color='white'
            />
          }
          centerComponent={<Text h4 style={{color:'white'}}>HomeScreen</Text>}
          statusBarProps={{ barStyle: 'dark-content', translucent: true }}
        >
        </Header>

        <Button rounded
          title='Seach for restaurant'
          onPress={() => this.props.navigation.navigate("Search")}
          buttonStyle={{ margin: 10 }}
          icon={
            <Icon
              name='md-search'
              type='ionicon'
              size={15}
              color='white'
            />
          }
          iconRight
        />

        <Suggestion />

      </View>

    );
  }
}

const styles = {
  container: {
    height: '100%',
    backgroundColor: 'lightblue',
  },

  suggestion: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};


