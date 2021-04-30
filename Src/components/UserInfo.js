import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Button, Avatar, Text, Divider } from 'react-native-elements';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { logout } from '../actions/auth'

import userimage from '../assets/ProfileTemplate.png';
import profilebackground from "../assets/BackgroundDrawer.jpg"


class UserInfo extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <View >
                <Image
                    style={{ height: 140, width: "100%" }}
                    source={profilebackground}
                />

                <View style={{
                    position: "absolute",
                    marginTop: 20,
                    marginBottom: 10,
                    alignSelf: "center",
                }} >

                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: "http://188.166.210.104:3000/profileimage/" + this.props.profileimage }}
                        containerStyle={styles.profileImage}
                    />
                    <Text h4 style={styles.userName}> name {this.props.firstname} {this.props.lastname}</Text>
                </View>

                <View>
                    <View style={{
                        backgroundColor: 'lightgrey',
                        height: 30,
                    }} >
                        <Text  style={{margin: 5}} >Contact Information</Text>
                    </View>
                    <Divider style={{ backgroundColor: 'black' }} />
                    
                    <View  >
                        <Text style={{ margin: 5 }} >Email</Text> 
                        <Text h4 style={{ margin: 5 }} > email{this.props.email}</Text>
                    </View>
                    <Divider style={{ backgroundColor: 'black' }} />

                    <View >
                        <Text style={{ margin: 5 }} >Phone</Text> 
                        <Text h4 style={{ margin: 5 }} >phone{this.props.phonenumber}</Text>
                    </View>
                    <Divider style={{ backgroundColor: 'black' }} />
                </View>

                <Button rounded
                    title='Sign Out'
                    onPress={() => this.props.logout()}
                    buttonStyle={{
                        margin: 10, borderRadius: 20, width: '25%'
                    }}
                />

            </View>
        );
    }
}

const styles = {

    profileImage: {
        justifyContent: 'center',
        marginLeft: 2,
    },

    userName: {
        color: 'white',
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
