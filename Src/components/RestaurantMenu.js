import React, { Component } from 'react'; 
import { View, FlatList } from 'react-native';
import {Avatar, Text, Button} from 'react-native-elements';

import { connect } from 'react-redux';

class RestaurantMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    this.fetchmenu()
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
      <View style={styles.foodlistContainer}>
        <FlatList
          numColumns={3}
          contentContainerStyle={styles.list}
          data={this.state.dataSource}
          extraData={this.state}
          renderItem={({ item }) =>
            <View style={styles.row}>
              <Avatar
                size="medium"
                source={{ uri: "http://188.166.210.104:3000/Menuimage/" + item.mimage }}
                overlayContainerStyle={{ backgroundColor: 'white' }}
                activeOpacity={0.7}
              />

              <Text note>{item.mname}</Text>

              <Button 
              title="ADD"
              buttonStyle={{backgroundColor:'#0f9302'}}
              onPress={() => this.AddOrder(item.mid)} 
              /> 

            </View>
          }
          keyExtractor={(item, index) => `key-${index}`}
        />

      </View>
    );
  }
}

const styles = {

  list: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
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





