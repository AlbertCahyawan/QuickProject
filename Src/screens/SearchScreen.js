import React, { Component } from 'react';
import { Platform } from 'react-native';

import { STATUS_BAR_HEIGHT } from '../constants';

import SearchFood from '../components/SearchFood'
import SearchFoodList from '../components/SearchFoodList'


import { Container, Header, Title, Left, Right, Body, Content, Button,Icon } from "native-base";


export default class HomeScreen extends Component {


    render() { 
        return (
            <Container
                style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button> 
                    </Left>
                    <Body>
                        <Title>Search Restaurant</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <SearchFood />
                    <SearchFoodList />
                </Content>

            </Container>

        );
    }
}

const styles = {
    container: {
        height: '100%',
        backgroundColor: 'white',
    },

    imageStyle: {
        marginTop: 20,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    header: {
        height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
        backgroundColor: '#2196F3'
    },
    headertitle: {
        marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
        color: 'white'
    },


}; 