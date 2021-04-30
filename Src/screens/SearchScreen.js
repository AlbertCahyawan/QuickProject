import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, Icon, Text } from 'react-native-elements'

import SearchFood from '../components/SearchFood'
import SearchFoodList from '../components/SearchFoodList'

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>

                <Header
                    outerContainerStyles={{ height: 60, paddingTop: 20}}
                    leftComponent={
                        <Icon
                            onPress={() => this.props.navigation.goBack()}
                            name='md-arrow-back'
                            type='ionicon'
                            size={15}
                            color='white'
                        />
                    }
                    centerComponent={<Text h4 style={{ color: 'white' }}>Search Restaurant</Text>}
                    statusBarProps={{ barStyle: 'dark-content', translucent: true }}
                />
                <SearchFood />
                <SearchFoodList />

            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor:'white'
    },
}; 