import React, { Component } from 'react';
import { Content, Thumbnail, Text, Button, } from 'native-base';
import { View, FlatList } from 'react-native';

import { connect } from 'react-redux';

import Food from '../assets/images.jpg';

const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

class RestaurantMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  state = {
    appIsReady: false
  }

  componentDidMount() {
    this._loadAssetsAsync();
    this.fetchmenu()
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([Food]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

  AddOrder(menuid) {
    fetch('http://188.166.210.104:3000/addorder', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        menuid: menuid,
        reservationid: 1,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  fetchmenu() {
    var URL = 'http://188.166.210.104:3000/Menu/1' //need to change the id of menu
    fetch(URL, { timeout: 1000 }, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  render() {
    return (
      <Content style={styles.foodlistContainer}>
        <FlatList 
          numColumns={3}
          contentContainerStyle={styles.list}
          data={this.state.dataSource}
          extraData={this.state}
          renderItem={({ item }) =>
            <View style={styles.row}>
              <Thumbnail square source={{uri:"http://188.166.210.104:3000/Menuimage/" + item.mimage }} />
              <Text note>{item.mname}</Text>
              <Button block success
                onPress={() => this.AddOrder(item.mid)}  >
                <Text>ADD</Text>
              </Button>
            </View>
          }
          keyExtractor={(item, index) => `key-${index}`}
        />

      </Content>
    );
  }
}

const styles = {

  list: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    //flexWrap: 'wrap',
    backgroundColor: '#CCC',
  },

  row: {
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#F6F6F6',
  },

};


const mapStateToProps = (state, ownProps) => {
  return {
    bill: state.addFoodReducer.bill
  };
}


export default connect(mapStateToProps)(RestaurantMenu);





