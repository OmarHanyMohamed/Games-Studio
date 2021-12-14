import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Navigation from '../Navigation';

export default class StartScreen extends Component {

    render() {
        return (
            <Onboarding
                onSkip={() => this.props.navigation.replace('LoginScreen')}
                onDone={() => this.props.navigation.navigate('LoginScreen')}
                titleStyles={{ fontFamily: 'Ubuntu-Medium'}}
                subTitleStyles={{ fontFamily: 'Ubuntu-Regular'}}
                
                pages={[
                    {
                        backgroundColor: '#070022',
                        image: <Image source={require('../img/logoz.png')} style={{ height: 250, width: 250 }}/>,
                        title: 'Welcome to gamesStudio' ,
                        subtitle: 'Where you will get the latest gaming news, game videos and game releases from your favourite developers and studios around the world.',
                    },
                    {
                        backgroundColor: '#070022', //2F0225
                        image: <Image source={require('../img/games.png')} style={{ height: 150, width: 230 }} />,
                        title: 'Connect with the gaming community',
                        subtitle: 'Large community where you will find the most interesting news and games in your feed.',
                    },
                    {
                        backgroundColor: '#070022',
                        
                        image: <Image source={require('../img/game.png')} style={{ height: 200, width: 350 }}/>,
                        title: 'Tournaments',
                        subtitle: "Create and participate in Esports tournaments, and communicate with participants directly.",
                    },
                ]}
            />
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#070022',
    }
})