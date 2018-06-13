import React, { Component } from 'react';
import { AppRegistry, Alert } from "react-native";
import { Container, Header, Title, Left, Body, Content, Right, Icon, Button, Text, Thumbnail, H1, H3, } from "native-base";
import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';

import {logout} from '../actions/auth'

import userimage from '../assets/EmptyprofileIcon.png';

const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
});

class UserInfo extends Component {
    componentDidMount() {
        this._loadAssetsAsync();
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([userimage]);
        await Promise.all([...imageAssets]);
        this.setState({ appIsReady: true });
    }

    render() {
        return (
            <Content padder>
                <Body>
                    <Thumbnail round source={userimage}
                        style={styles.profileImage} />
                    <H1>{this.props.firstname} {this.props.lastname}</H1>
                </Body>

                <Left>
                    <Text>Email</Text>
                    <H3>{this.props.email}</H3>

                    <Text>Phone</Text>
                    <H3>{this.props.phonenumber}</H3>
                </Left>

                <Body>
                    <Button rounded
                        onPress={() => this.props.logout()}>
                        <Text>Sign Out</Text>
                    </Button>
                </Body>

            </Content>
        );
    }
}

const styles = {

    profileImage: {
        marginLeft: 2,
    }

};


const mapStateToProps = (state, ownProps) => {
    return {
        email: state.auth.email,
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        phonenumber: state.auth.phonenumber,
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logout: logout,}, dispatch)

  } 
      

export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);
