import React, { Component } from 'react';
import { Image } from 'react-native';
import { ListItem, Body, Content, Left, Button, Text, Thumbnail, H1, H3, List, } from "native-base";
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { logout } from '../actions/auth'

import userimage from '../assets/ProfileTemplate.png';
import profilebackground from "../assets/BackgroundDrawer.jpg"

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
            <Content >  
                <Thumbnail
                    square
                    style={{ height: 140, width: "100%" }}
                    source={profilebackground}
                /> 

                <Body style={{
                    position: "absolute",
                    marginTop: 20,
                    marginBottom: 10,
                    alignSelf: "center",
                }} >
                    <Thumbnail source={{uri:"http://188.166.210.104:3000/profileimage/"+this.props.profileimage}}
                        style={styles.profileImage} />
                    <H1 style={styles.userName}> {this.props.firstname} {this.props.lastname}</H1>
                </Body>
 
                <List>

                    <ListItem itemDivider style={{
                        backgroundColor: 'lightgrey',
                    }} >
                        <Body>
                            <Text>Contact Information</Text>
                        </Body>
                    </ListItem>

                    <ListItem  >
                        <Body>
                            <Text>Email</Text>
                            <H3>{this.props.email}</H3>
                        </Body>
                    </ListItem>

                    <ListItem >
                        <Body>
                            <Text>Phone</Text>
                            <H3>{this.props.phonenumber}</H3>
                        </Body>
                    </ListItem>
                </List>

                <Body>
                    <Button rounded style={{
                        margin: 10,
                    }}
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
        color:'white',
    },

    userName: { 
        color:'white',
    }

};


const mapStateToProps = (state, ownProps) => {
    return {
        email: state.auth.email,
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        phonenumber: state.auth.phonenumber,
        profileimage: state.auth.profileimage,
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ logout: logout, }, dispatch)

}


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
