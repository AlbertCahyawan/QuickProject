import React, { Component } from 'react';
import { Content, Thumbnail, Text, Item, Body, Card, CardItem, Container, Button, Left, ListItem, List, Right, Icon } from 'native-base';

import { connect } from 'react-redux';

import Food from '../assets/restaurant.png';

import { Addingfood } from '../actions/index';

const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

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

  state = {
    appIsReady: false
  }
  componentDidMount() {
    this.fetchorder()
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([Food]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

  render() {
    return (
      <Content style={styles.billContent}>
        <List>
          <ListItem itemDivider thumbnail>

            <Text>Your Order</Text>
          </ListItem>

          <ListItem>
            <Body>
              <Text>Food Name</Text>
            </Body>

            <Body>
              <Text>Quantity</Text>
            </Body>

            <Body>
              <Text>Price</Text>
            </Body>

          </ListItem>

          <List contentContainerStyle={styles.list}
            dataArray={this.props.bill}
            renderRow={data => {
              return (
                <ListItem noBorder>
                  <Body>
                    <Text>{data.fname}</Text>
                  </Body>

                  <Body>
                    <Text>{data.Fqty}</Text>
                  </Body>

                  <Body>
                    <Text>{data.fprice}</Text>
                  </Body>

                  <Icon name="trash"
                    Button onPress={() => alert('Remove')} />

                </ListItem>
              );
            }}
          />

          <ListItem itemDivider>

          </ListItem>

          <ListItem>
            <Body>
              <Text>Detailed Bill</Text>
            </Body>
          </ListItem>

          <ListItem noBorder>
            <Body>
              <Text>Tax</Text>
            </Body>

            <Body>
            </Body>

            <Body>
              <Text>15.000</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text>GrandTotal</Text>
            </Body>

            <Body>
            </Body>

            <Body>
              <Text>30.000</Text>
            </Body>
          </ListItem>

        </List>

        <Button block primary
          style={styles.orderButton}
          Button onPress={() => alert('food ordered')}>
          <Text>Order</Text>
        </Button>
      </Content>
    );
  }
}

const styles = {
  billContainer: {
    backgroundColor: 'lightgrey',
  },


  billContent: {
    backgroundColor: 'white',
  },
  orderButton: {
    margin: 10,
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