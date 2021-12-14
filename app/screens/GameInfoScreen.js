import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FlatListSlider } from 'react-native-flatlist-slider';
import Games from '../components/Games';

const { height, width } = Dimensions.get('window')

const images = [
    {
        banner: require('../img/g1.jpg'),
    },
    {
        banner: require('../img/g2.jpg'),
    },
    {
        banner: require('../img/g3.jpg'),
    }
]

export default class GameInfoScreen extends Component {
    /*
    <FlatListSlider
                                data={images}
                                imageKey={'banner'}
                                width={100}
                                autoscroll={false}
                                component={<Games />}
                                onPress={item => alert(JSON.stringify(item))}
                                indicatorActiveWidth={40}
                                indicator={false}
                            />
    */

    UNSAFE_componentWillMount() {
        const { navigation } = this.props;
        data = navigation.getParam('data', '');
    }

    renderItem(item) {
        return (
            <View style={{ flex: 1, height: 270, borderRadius: 10, width: 300, marginLeft: 15 }}>
                <Image
                    style={{ width: 300, height: 180, borderRadius: 10, }}
                    resizeMode='contain'
                    source={item.banner}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.main}>
                <StatusBar
                    backgroundColor='#070022'
                    barStyle='light-content'
                />
                <ImageBackground
                    blurRadius={4}
                    style={styles.background}
                    source={data.banner}
                >

                    <View style={styles.top}>

                        <View style={styles.cover}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.back}>
                                <Ionicons
                                    name='arrow-back'
                                    color='#fff'
                                    size={25}
                                />
                            </TouchableOpacity>
                            <Image
                                source={data.banner}
                                style={styles.image}
                            />
                        </View>

                        <View style={styles.desc}>
                            <View style={styles.header}>
                                <View style={styles.gameTitle}>
                                    <Text style={styles.title}>{data.title}</Text>
                                </View>
                                <View style={styles.gameDesc}>
                                    <Text style={styles.gdesc}>{data.desc}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rateDate}>
                        <View style={styles.rating}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <StarRating
                                    disabled={true}
                                    halfStarEnabled={true}
                                    containerStyle={{}}
                                    maxStars={5}
                                    rating={data.rate}
                                    fullStarColor={'#edb61f'}
                                    starSize={15}
                                    emptyStarColor={'grey'}
                                />
                            </View>
                            {
                                data.rate >= 3 ?
                                    <View style={{ flex: 0.5, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
                                        <Text style={{ fontFamily: 'Ubuntu-Regular', fontSize: 17, color: '#FFF' }}> {data.rate} </Text>
                                    </View>
                                    :
                                    <View style={{ flex: 0.5, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D80023' }}>
                                        <Text style={{ fontFamily: 'Ubuntu-Regular', fontSize: 17, color: '#FFF' }}> {data.rate} </Text>
                                    </View>
                            }

                        </View>

                        <View style={styles.developers}>
                            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={{ flex: 0.3, backgroundColor: 'rgba(38, 56, 115, 0.4)', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome
                                        name='flag'
                                        color='#1A9487'
                                        size={20}
                                    />
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={styles.bottomSubTitle}>
                                        Action-adventure game
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bottom}>


                        <View style={{ flex: 1, backgroundColor: 'rgba(25, 25, 52, 0.8)' }}>

                            <FlatList
                                horizontal={true}
                                data={data.cover}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => this.renderItem(item)}
                                keyExtractor={(item, index) => index.toString()}
                            />

                        </View>
                        <View style={styles.platforms}>
                            <View style={styles.platformCont}>
                                <Ionicons
                                    name='logo-playstation'
                                    color='#D80023'
                                    size={25}
                                />
                            </View>
                            <View style={styles.platformCont}>
                                <MaterialIcons
                                    name='computer'
                                    color='#fff'
                                    size={25}
                                />
                            </View>
                            <View style={styles.platformCont}>
                                <Ionicons
                                    name='logo-xbox'
                                    color='green'
                                    size={25}
                                />
                            </View>
                        </View>
                        <View style={styles.other}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1, marginLeft: '7%', justifyContent: 'center' }}>
                                    <View style={{ height: 50, width: 130, flexDirection: 'row', borderRadius: 10, backgroundColor: 'rgba(25, 25, 52, 0.8)' }}>
                                        <View style={{ flex: 0.3, backgroundColor: 'rgba(38, 56, 115, 0.4)', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                            <MaterialIcons
                                                name='timer'
                                                color='#EF7B00'
                                                size={20}
                                            />
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center' }}>
                                            <Text style={[styles.bottomSubTitle, { fontSize: 10 }]}>
                                                {data.release}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity style={{ flex: 0.6, marginRight: '15%', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ height: 50, width: 200, flexDirection: 'row', borderRadius: 25 }}>

                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 10 }}>
                                            <Text style={[styles.bottomSubTitle, { marginLeft: '0%', fontSize: 20, fontFamily: 'Ubuntu-Bold' }]}>
                                                Order Now
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    background: {
        width: '100%',
        height: height,
        resizeMode: 'cover',
    },
    back: {
        height: 50,
        width: 50,
        marginLeft: '3%',
        borderRadius: 50,
        backgroundColor: 'rgba(25, 25, 52, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '7%',
        right: '30%'
    },
    cover: {
        left: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    header: {
        flex: 1,
    },
    desc: {

        height: 300,
        width: 300,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(25, 25, 52, 0.8)',
        borderRadius: 20,
        right: '10%'
    },
    gameTitle: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%'
    },
    gameDesc: {
        flex: 1,
        marginLeft: '25%',
        marginRight: '5%'
    },
    gdesc: {
        color: '#fff',
        fontFamily: 'Ubuntu-Regular'
    },
    title: {
        left: '15%',
        color: '#fff',
        fontSize: 17,
        fontFamily: 'Ubuntu-Bold'
    },
    image: {
        width: 150,
        height: 220,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    top: {
        flex: 1,
        flexDirection: 'row'
    },
    bottom: {
        flex: 1
    },
    platforms: {
        flex: 0.4,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        top: '5%'
    },
    platformTitle: {
        flex: 0.4,
        justifyContent: 'center',
    },
    other: {
        flex: 0.7
    },
    rating: {
        width: 150,
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(25, 25, 52, 0.8)',
        borderRadius: 10,
    },
    platformCont: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        // backgroundColor: '#fff',

        backgroundColor: 'rgba(25, 25, 52, 0.8)',
        borderRadius: 10,
    },
    rateDate: {
        flex: 0.1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        bottom: 25
    },
    developers: {

        marginRight: '5%',
        backgroundColor: 'rgba(25, 25, 52, 0.8)',
        width: 200,
        borderRadius: 10,
        alignSelf: 'center',
    },
    bottomTitle: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Ubuntu-Medium',
        marginLeft: '3%'
    },
    bottomSubTitle: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Ubuntu-Regular',
        marginLeft: '10%'
    }
})