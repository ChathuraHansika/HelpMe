/**
 * Created by Chathura on 10/22/2019.
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';


export default class Login extends Component<> {
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.title}>Help Me</Text>
                <Text style={styles.loginTxt}>login</Text>
                <TextInput style={styles.emailTxt} placeholder="Email"></TextInput>
                <TextInput style={styles.passwordTxt} placeholder="Password"></TextInput>
                <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginVertical: 100,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    title: {
        fontFamily:'Roboto',
        marginHorizontal:110,
        marginVertical: 100,
        color: '#8273ff',
        fontSize:50

    },
    loginTxt:{
        justifyContent:'center',
        color: '#4cff50',
        marginVertical:10,
        marginHorizontal:170,
        fontSize:28
    },
    emailTxt:{
        alignItems:'center',
        width:200,
        marginVertical:10,
        backgroundColor: '#D9E3F0',
        marginHorizontal:110,
        fontSize:28,
        borderRadius:20,
        paddingHorizontal:16,

    },
    passwordTxt:{
        width:200,
        backgroundColor: '#D9E3F0',
        marginVertical:10,
        marginHorizontal:110,
        fontSize:28,
        borderRadius:20,
        paddingHorizontal:16
    }
});