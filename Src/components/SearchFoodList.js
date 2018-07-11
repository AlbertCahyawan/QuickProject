import React, { Component } from 'react'; 

import { Button, Text, Avatar, Input } from 'react-native-elements'
import { FlatList, View, ActivityIndicator, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';

import NavigationService from '../Navigation/NavigationService';

import DatePicker from 'react-native-datepicker';

import {
    Dialog,
    ProgressDialog,
    ConfirmDialog,
} from 'react-native-simple-dialogs'
import Stars from 'react-native-stars';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

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
        NavigationService.navigate('Reservation')
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

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.restaurantlistContainer}>
                    <ActivityIndicator color="blue" size="large" style={styles.spinnerContainer} />
                </View>
            )
        } else {
            return (
                <View style={styles.restaurantlistContainer}>

                    <FlatList
                        data={this.state.dataSource}
                        extraData={this.state}
                        renderItem={({ item }) =>

                            <TouchableNativeFeedback
                                onPress={() => this.openDialog(true)} >
                                <View style={styles.restaurantContainer}>
                                    <View style={{ width: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Avatar
                                            size="medium"
                                            source={{ uri: "http://188.166.210.104:3000/RestaurantLogo/" + item.rimage }}
                                            overlayContainerStyle={{ backgroundColor: 'white' }}
                                            activeOpacity={0.7}
                                        />
                                        <Stars
                                            rating={item.ratings}
                                            count={5}
                                            half={true}
                                            fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                                            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
                                        />
                                    </View>

                                    <View style={{ width: '50%', }}>
                                        <Text h5>{item.rname} </Text>
                                        <Text style={{ color: 'lightgrey' }}>{item.rdetail}</Text>
                                    </View>

                                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'lightgrey' }}>{item.rtime}</Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>

                        }
                        keyExtractor={(item, index) => `key-${index}`}
                    />

                    <Dialog
                        visible={this.state.showDialog}
                        title="Reservation"
                        onTouchOutside={() => this.setState({ showDialog: false })}
                        contentContainerStyle={styles.dialogContainer} >
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

                        <Input placeholder="Table For"
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 5,
                            }}
                            onchange={(text) => { this.setState({ guest: text }); }} />
                        <View style={{marginTop:5}}>
                        <Button
                            title="Reserve"
                            onPress={() => this.SendReservation()}
                            buttonStyle={{ padding: 5, width: '50%' }}
                        />
                        </View>

                    </Dialog>

                    <Text
                        onTextChange={this.fetchdata()}
                        style={{ color: "lightgrey" }}
                    >test{this.props.searchresult}</Text>

                </View>
            );
        }
    }
}

const styles = {
    spinnerContainer: {
        flex: 1,
        alignItems: 'center',
    },
    restaurantlistContainer: {
        height: 500,
        backgroundColor: 'lightgrey',
        paddingTop: 5,
        margin: 5,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },

    restaurantContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        height: 100,
        marginLeft: 0,
        margin: 0,
        marginBottom: 5,
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


