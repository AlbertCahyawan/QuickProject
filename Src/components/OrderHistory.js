import React, { Component } from 'react';

import { Divider } from 'react-native-elements';
import { FlatList, View, Text, TouchableNativeFeedback } from 'react-native';


import NavigationService from '../Navigation/NavigationService';

let routes = [{
    Hdate: "Jan 10, 5.38 Pm",
    Hname: "Hanamasa",
    Hprice: 300000,
},
{
    Hdate: "Jan 6, 5.14 Pm",
    Hname: "Genki Sushi",
    Hprice: 100000,
},
];

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: routes,
        };
    }

    // fetchmenu() {
    //     var URL = 'http://188.166.210.104:3000/order/2' //need to change the id of menu
    //     fetch(URL, { timeout: 1000 }, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({
    //                 isLoading: false,
    //                 dataSource: responseJson,
    //             }, function() {
    //             });
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    render() {
        return (
            <View>

                <FlatList
                    data={this.state.dataSource}
                    extraData={this.state}
                    renderItem={({ item }) =>
                        <TouchableNativeFeedback
                            button onPress={() => NavigationService.navigate('Home', )} >
                            <View style={styles.OrderContainer}>

                                <View style={{
                                    width: '50%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'
                                }}>
                                    <Text>{item.Hdate}</Text>
                                    <Text style={{ color: 'lightgrey' }}>{item.Hname}</Text>
                                </View>

                                <View style={{
                                    width: '50%', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end'
                                }}>

                                    <Text>IDR {item.Hprice}</Text>
                                </View>

                                <Divider style={{ backgroundColor: 'black' }} />
                            </View>
                        </TouchableNativeFeedback>

                    }
                    keyExtractor={(item, index) => `key-${index}`}
                />

            </View>
        );
    }
}

const styles = {

    OrderContainer: {
        backgroundColor: 'white', 
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor:'black',
    },

}; 
