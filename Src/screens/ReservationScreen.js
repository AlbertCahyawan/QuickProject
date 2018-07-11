import React from 'react';

import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements'

import MenuScreen from './MenuScreen';
import BillScreen from './BillScreen';

export default TabNavigator({ 
  Menu: { screen: MenuScreen },
  Cart: { screen: BillScreen },
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Menu') {
          iconName = `md-book${focused ? '' : ''}`;
        } else if (routeName === 'Cart') {
          iconName = `md-cart${focused ? '' : ''}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} type='ionicon' size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);