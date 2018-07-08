import React, { Component } from 'react';
import { Text, ListItem, Left, Body, Thumbnail, Content, Right, Spinner, Input, Form, Item, Button } from 'native-base';

import { FlatList } from 'react-native'; 
import { connect } from 'react-redux';

import NavigationService from '../Navigation/NavigationService';

import DatePicker from 'react-native-datepicker';

import {
    Dialog,
    ProgressDialog,
    ConfirmDialog,
} from 'react-native-simple-dialogs'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Food from '../assets/restaurant.png';
  
const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
});

class SearchFoodList extends Component {
    constructor(props) {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();


        var hour = new Date().getHours();
        var minute = new Date().getMinutes();

        super(props);
        this.state = {
            datetime: year + "-" + month + "-" + date + " " + hour + "-" + minute,
            refreshing: false,
            dataSource: [],
            guest: 1,
        };
    }

    openDialog(show) {
        this.setState({ showDialog: show })
    }

    openConfirm(show) {
        this.setState({ showConfirm: show })
    }

    optionYes() {
        this.openConfirm(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
        setTimeout(() => alert("Yes touched!"), 100);
    }

    optionNo() {
        this.openConfirm(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
        setTimeout(() => alert("No touched!"), 100);
    }

    SendReservation() {
        fetch('http://188.166.210.104:3000/Reservation', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                restaurantid: 1,
                customerid: 1,
                noguest: this.state.guest,
                datetime: this.state.datetime,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
            NavigationService.navigate('test')
    }

    fetchdata() {
        var URL = 'http://188.166.210.104:3000/Restaurant/' + this.props.searchresult
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

    componentDidMount() {
        this._loadAssetsAsync();
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([Food]);
        await Promise.all([...imageAssets]);
        this.setState({ appIsReady: true });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <Content contentContainerStyle={styles.restaurantlistContainer} rounded>
                    <Body>
                        <Spinner color="blue" style={styles.spinnerContainer} />
                    </Body>
                </Content>
            )
        } else {
            return (
                <Content contentContainerStyle={styles.restaurantlistContainer} rounded>  
                    <FlatList
                        data={this.state.dataSource}
                        extraData={this.state}
                        renderItem={({ item }) =>

                            <ListItem style={styles.restaurantContainer}
                                button onPress={() => this.openDialog(true)} >
                                <Left>
                                    <Left>
                                        <Thumbnail square source={{ uri: "http://188.166.210.104:3000/RestaurantLogo/"+item.rimage}}
                                            style={styles.restaurantImage} />
                                        <Stars
                                            rating={item.ratings}
                                            count={5}
                                            half={true}
                                            fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                                            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
                                        />
                                    </Left>

                                    <Body Small>
                                        <Text>{item.rname} </Text>
                                        <Text note>{item.rdetail}</Text>
                                    </Body>
                                </Left>

                                <Right>
                                    <Text note>{item.rtime} </Text>
                                </Right>
                            </ListItem>
                        }
                        keyExtractor={(item, index) => `key-${index}`}
                    />

                    <Dialog
                        visible={this.state.showDialog}
                        title="Reservation"
                        onTouchOutside={() => this.setState({ showDialog: false })}
                        contentContainerStyle={styles.dialogContainer} >

                        <Form >

                            <DatePicker
                                style={{ width: 200 }}
                                date={this.state.datetime}
                                mode="datetime"
                                format="YYYY-MM-DD HH:mm"
                                minDate="2018-06-05"
                                maxDate="2018-07-05"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                }}
                                minuteInterval={10}
                                onDateChange={(datetime) => { this.setState({ datetime: datetime }); }}
                            />

                            <Item
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 5,
                                }}>
                                <Input placeholder="Table For"
                                    onchange={(text) => { this.setState({ guest: text }); }} />
                            </Item>  
                            <Button onPress={() => this.SendReservation()}><Text>Reserve</Text></Button>
 
                        </Form>
                    </Dialog> 

                    <Text
                        onTextChange={this.fetchdata()}
                        style={{ color: "lightgrey" }}
                    >test{this.props.searchresult}</Text>

                </Content>
            );
        }

    }
}

const styles = {
    spinnerContainer: {
        flex: 1,
    },
    restaurantlistContainer: {
        height: 500,
        backgroundColor: 'lightgrey',
        margin: 5,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },

    restaurantContainer: {
        backgroundColor: 'white',
        marginLeft: 0,
        margin: 0,
        marginBottom: 5,
    },

    restaurantImage: {
        marginLeft: 2,
    },

    dialogContainer: {
        flexGrow: 1,
        flexDirection: "column",
    },

    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }

};

const mapStateToProps = (state, ownProps) => {
    return {
        searchresult: state.searchReducer.search
    };
}

export default connect(mapStateToProps)(SearchFoodList);

