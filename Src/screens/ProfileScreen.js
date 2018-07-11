import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Text, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import UserInfo from '../components/UserInfo';

class ProfileScreen extends Component {
  componentDidMount() {
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <View>
          <Header
            outerContainerStyles={{ height: 60, paddingTop: 20 }}
            leftComponent={
              <Icon
                onPress={() => this.props.navigation.goBack()}
                name='md-arrow-back'
                type='ionicon'
                size={15}
                color='white'
              />
            }
            centerComponent={<Text h4 style={{ color: 'white' }}>Profile Restaurant</Text>}
            statusBarProps={{ barStyle: 'dark-content', translucent: true }}
          /> 
          <UserInfo />

        </View>
      );

    } else {
      return (
        this.props.navigation.navigate('Login')
      );

    }

  }
}

const styles = {
};


const mapStateToProps = (state, ownProps) => {
  return {
    email: state.auth.email,
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(ProfileScreen);
