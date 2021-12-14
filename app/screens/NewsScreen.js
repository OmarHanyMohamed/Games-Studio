import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window')

export default class NewsScreen extends Component {

    UNSAFE_componentWillMount() {
        const { navigation } = this.props;
        data = navigation.getParam('data', '');
    }

    render() {
        return (
            <View style={styles.main}>
                <StatusBar
                    backgroundColor='#070022'
                    barStyle='light-content'
                />
                <View style={styles.top}>
                    <ImageBackground
                        style={styles.background}
                        source={data.image}
                    >
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.back}>
                                <Ionicons
                                    name='arrow-back'
                                    color='#fff'
                                    size={25}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.share}>
                                <Ionicons
                                    name='ios-share-social-sharp'
                                    color='#fff'
                                    size={22}
                                />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.bottom}>
                    <ScrollView style={{top: '5%'}}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{data.title}</Text>
                        </View>
                        <View style={styles.date}>
                            <Text style={styles.dateText}>
                                {
                                    <FontAwesome
                                        name='calendar'
                                        color='grey'
                                        size={20}
                                    />
                                }
                                {'  '}
                                {data.date}
                            </Text>
                        </View>
                        <View style={styles.body}>

                            <Text style={styles.news}>{data.news}</Text>

                        </View>
                    </ScrollView>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    top: {
        flex: 0.7
    },
    background: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
    },
    bottom: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    header: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    back: {
        height: 50,
        width: 50,
        marginLeft: '3%',
        borderRadius: 50,
        backgroundColor: 'rgba(25, 25, 52, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    share: {
        height: 50,
        width: 50,
        marginRight: '3%',
        borderRadius: 50,
        backgroundColor: 'rgba(25, 25, 52, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'Ubuntu-Bold'
    },
    date: {
        flex: 0.2,
        justifyContent: 'center',
        marginTop: '5%'
    },
    dateText: {
        marginLeft: '7%',
        fontSize: 13,
        color: 'grey',
        fontFamily: 'Ubuntu-Medium'
    },
    body: {
        flex: 1
    },
    news: {
        marginTop: '5%',
        marginLeft: '5%',
        fontSize: 15,
        color: '#000',
        fontFamily: 'Ubuntu-Regular'
    }
})