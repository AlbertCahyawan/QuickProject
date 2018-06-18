import React, { Component } from 'react';
import { Content, List, ListItem, Left, Body, Right, Text, Button } from "native-base";
import {FlatList} from 'react-native';

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
    //     var URL = 'http://188.166.210.104:3000/Menu/1' //need to change the id of menu
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
            <Content> 
                
                <FlatList 
                    data={this.state.dataSource}
                    extraData={this.state}
                    renderItem={({ item }) =>
                        <ListItem style={styles.OrderContainer}
                            button onPress={() => this.props.navigation.navigate('Home', )} >
                            <Left>
                                <Body>
                                    <Text>{item.Hdate}</Text>
                                    <Text note>{item.Hname}</Text>
                                </Body>
                            </Left>

                            <Right>
                                <Text>IDR {item.Hprice}</Text>
                            </Right>
                        </ListItem>
                    }
                    keyExtractor={(item, index) => `key-${index}`}
                />

            </Content>
        );
    }
}

const styles = {

    OrderContainer: {
        backgroundColor: 'white',
        marginLeft: 5,
        margin: 5,
    },

}; 
