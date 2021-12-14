import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, Image } from 'react-native';

export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('StartScreen')
        }, 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#070022"
                />

                <Image
                    source={require('../img/logoz.png')}
                    style={{ height: 100, width: 100 }}
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#070022',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontFamily: 'Ubuntu-Regular',
        color: '#fff'
    }
})