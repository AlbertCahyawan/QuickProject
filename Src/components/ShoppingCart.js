import React, { Component } from 'react'; 
import { Icon, Button, Text, Divider, } from 'react-native-elements';
import { View, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { Addingfood } from '../actions/index';

class ShoppingCart extends Component {

  fetchorder() {
    var URL = 'http://188.166.210.104:3000/ShoppingCart/1'
    fetch(URL, { timeout: 1000 }, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {

        for (i = 0; i < responseJson.length; i++) {
          this.props.Add(responseJson[0].MenuName, responseJson[0].QTY, responseJson[0].Price)
        }

      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchorder()
  }

  render() {
    return (
      <View style={styles.billContent}>

        <View style={{ marginLeft: 5 }}>
          <Text >Your Order</Text>
        </View>

        <View style={{ backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start' }} >

            <Text>Food Name</Text>
            <Text>Quantity</Text>
            <Text>Price</Text>

          </View>

          <Divider style={{ backgroundColor: 'black' }} />

          <FlatList
            contentContainerStyle={styles.list}
            data={this.props.bill}
            extraData={this.state}
            renderItem={({ item }) =>
            
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Text>{item.fname}</Text>
                <Text>{item.Fqty}</Text>

                <View style={{ flexDirection: 'row' }}>
                  <Text>{item.fprice}</Text>
                  <Icon
                    onPress={() => alert('Remove')}
                    name='md-trash'
                    type='ionicon'
                    color='black'
                  /> 
                </View> 
              </View> 
            }
            keyExtractor={(item, index) => `key-${index}`}
          />

        </View>

        <View style={{
          flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start', backgroundColor: 'white', marginTop: 5,
        }}>
          <View>
            <Text>Detailed Bill</Text>
          </View>

          <View noBorder>
            <Text>Tax</Text>
            <Text>15.000</Text>
          </View>

          <View>
            <Text>GrandTotal</Text>
            <Text>30.000</Text>
          </View>

        </View>

        <Button
          title="Order"
          buttonStyle={styles.orderButton}
          onPress={() => alert('food ordered')}
        />

      </View>
    );
  }
}

const styles = {
  billContainer: {
    backgroundColor: 'lightgrey',
  },
  billContent: {
    height: '100%',
    backgroundColor: 'lightgrey',
  },
  orderButton: {
    margin: 10,
    backgroundColor: 'green',
  }

};


const mapStateToProps = (state, ownProps) => {
  return {
    bill: state.addFoodReducer.bill
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    Add: (fname, Fqty, fprice) => { dispatch(Addingfood(fname, Fqty, fprice)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart); 