import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Login from './src/pages/Login';

export default function App() {

    this.getCome = function () {
        alert('get');
    }
    return (
        <View style={styles.container}>
            <Login></Login>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tex: {
        borderColor: '#FF3015',

    }
});
