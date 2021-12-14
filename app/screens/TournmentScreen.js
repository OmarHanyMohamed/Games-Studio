import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const { height, width } = Dimensions.get('window')

export default class TournmentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form1: true,
            form2: false,
            form3: false,
            follow: true
        };
    }

    UNSAFE_componentWillMount() {
        const { navigation } = this.props;
        data = navigation.getParam('data', '');
    }

    render() {
        var form;
        if (this.state.form1 === true) {
            form = (
                <View style={{ flex: 1 }}>
                    <View style={styles.organizer}>
                        <Image
                            source={data.hostBg}
                            style={styles.image}
                        />
                        <View style={styles.organizerContainer}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, marginRight: '3%', color: '#fff', fontFamily: 'Ubuntu-Medium' }}>
                                    Organized By: {data.hostName}
                                </Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ follow: !this.state.follow })}
                                    style={[{ width: 150, height: 35, borderRadius: 5, marginLeft: '5%', justifyContent: 'center', alignItems: 'center' }, this.state.follow ? { backgroundColor: '#fff' } : { backgroundColor: '#DE007B' }]}
                                >
                                    {
                                        this.state.follow ?
                                            <Text style={[styles.categories, { fontSize: 13, color: '#000' }]}>
                                                {
                                                    <MaterialCommunityIcons
                                                        name='account-group'
                                                        size={15}
                                                        color={'#000'}
                                                    />
                                                }
                                                {' '}
                                                Follow
                                            </Text>
                                            :
                                            <Text style={[styles.categories, { fontSize: 13, color: '#fff' }]}>
                                                {
                                                    <MaterialCommunityIcons
                                                        name='check'
                                                        size={15}
                                                        color={'#fff'}
                                                    />
                                                }
                                                {' '}
                                                Followed
                                            </Text>
                                    }


                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={{ height: 40, width: 300, flexDirection: 'row', alignSelf: 'center', borderRadius: 10, backgroundColor: 'rgba(25, 25, 52, 0.8)' }}>
                            <View style={{ flex: 0.3, backgroundColor: 'rgba(38, 56, 115, 0.4)', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <SimpleLineIcons
                                    name='game-controller'
                                    color='#fff'
                                    size={22}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.bottomSubTitle}>
                                    {data.game}
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View style={{ height: 35, marginTop: '2%', width: 150, flexDirection: 'row', borderRadius: 10, backgroundColor: 'rgba(25, 25, 52, 0.8)' }}>
                                <View style={{ flex: 0.3, backgroundColor: 'rgba(38, 56, 115, 0.4)', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <SimpleLineIcons
                                        name='info'
                                        color='#fff'
                                        size={20}
                                    />
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.bottomSubTitle}>
                                        {data.platform}
                                    </Text>
                                </View>
                            </View>

                            <View style={{ height: 35, width: 150, marginTop: '2%', flexDirection: 'row', borderRadius: 10, backgroundColor: 'rgba(25, 25, 52, 0.8)' }}>
                                <View style={{ flex: 0.3, backgroundColor: 'rgba(38, 56, 115, 0.4)', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome
                                        name='dollar'
                                        color='#fff'
                                        size={20}
                                    />
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.bottomSubTitle}>
                                        Free
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.categories}>
                                    Join Tournament
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        } else if (this.state.form2 === true) {
            form = (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>
                            <View style={{ height: 100, width: 75, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 75, width: 75, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={require('../img/team.jpg')}
                                        style={{ resizeMode: 'cover', height: 75, width: 75, borderRadius: 50 }}
                                    />
                                </View>
                                <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Ubuntu-Regular' }}>D-Ragons</Text>
                            </View>
                            <View style={{ height: 100, width: 75, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 75, width: 75, borderRadius: 50 }}>
                                    <Image
                                        source={require('../img/team3.jpg')}
                                        style={{ resizeMode: 'cover', height: 75, width: 75, borderRadius: 50 }}
                                    />
                                </View>
                                <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Ubuntu-Regular' }}>Crown</Text>
                            </View>
                            <View style={{ height: 100, width: 75, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 75, width: 75, borderRadius: 50 }}>
                                    <Image
                                        source={require('../img/team2.png')}
                                        style={{ resizeMode: 'cover', height: 75, width: 75, borderRadius: 50 }}
                                    />
                                </View>
                                <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Ubuntu-Regular' }}>A-TEAM</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '15%' }}>
                            <View style={{ height: 100, width: 75, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 75, width: 75, borderRadius: 50 }}>
                                    <Image
                                        source={require('../img/team4.jpg')}
                                        style={{ resizeMode: 'cover', height: 75, width: 75, borderRadius: 50 }}
                                    />
                                </View>
                                <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Ubuntu-Regular' }}>Spartans</Text>
                            </View>
                            <View style={{ height: 100, width: 75, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 75, width: 75, borderRadius: 50 }}>
                                    <Image
                                        source={require('../img/team5.jpg')}
                                        style={{ resizeMode: 'cover', height: 75, width: 75, borderRadius: 50 }}
                                    />
                                </View>
                                <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Ubuntu-Regular' }}>Assasin</Text>
                            </View>
                            <View style={{ height: 100, width: 75, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 75, width: 75, borderRadius: 50 }}>
                                    <Image
                                        source={require('../img/team6.jpg')}
                                        style={{ resizeMode: 'cover', height: 75, width: 75, borderRadius: 50 }}
                                    />
                                </View>
                                <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Ubuntu-Regular' }}>Anubis</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'center',top: '11%', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.categories}>
                                Join Tournament
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else if (this.state.form3 === true) {
            form = (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 150, width: '90%', borderRadius: 15, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'rgba(25, 25, 52, 0.5)', }}>
                            <View style={{ flex: 0.5, backgroundColor: 'red ' }}>
                                <Image
                                    source={require('../img/vs.jpg')}
                                    style={{ resizeMode: 'cover', height: '100%', width: '100%', borderRadius: 10 }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <View style={{ flex: 1, marginTop: '5%', marginLeft: '3%' }}>
                                        <Text style={{ color: '#fff', fontFamily: 'Ubuntu-Medium', marginLeft: '3%', fontSize: 12 }}>
                                            Anubis VS Crown
                                        </Text>
                                    </View>
                                    <View style={{ flex: 0.7 }}>
                                        <View style={{ height: 35, width: '90%', backgroundColor: 'green', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: '#fff', fontFamily: 'Ubuntu-Bold', marginLeft: '3%', fontSize: 14 }}>
                                                Live
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={{ color: '#aaa', fontFamily: 'Ubuntu-Medium', marginLeft: '5%', marginTop: '5%', fontSize: 10 }}>
                                    {
                                        <MaterialCommunityIcons
                                            name='clock-time-five-outline'
                                            size={13}
                                            color={'#aaa'}
                                        />
                                    }
                                    {' '}
                                    26 Dec, 09:00 pm
                                </Text>
                                <Text style={{ color: '#aaa', fontFamily: 'Ubuntu-Medium', marginLeft: '5%', marginTop: '5%', fontSize: 10  }}>
                                    {
                                        <MaterialCommunityIcons
                                            name='account-group'
                                            size={13}
                                            color={'#aaa'}
                                        />
                                    }
                                    {' '}
                                    5/5
                                </Text>
                                <View style={{ flex: 1, borderTopWidth: 1, borderTopColor: '#aaa', marginTop: '5%',}}>
                                <Text style={{ color: '#aaa', fontFamily: 'Ubuntu-Medium', marginLeft: '5%', marginTop: '5%', fontSize: 10  }}>
                                    {
                                        <MaterialCommunityIcons
                                            name='trophy'
                                            size={13}
                                            color={'#aaa'}
                                        />
                                    }
                                    {' '}
                                    To Semi-finals . 
                                    {'  '}
                                    {
                                        <FontAwesome
                                            name='gamepad'
                                            size={13}
                                            color={'#aaa'}
                                        />
                                    }
                                    {' '}
                                    {data.platform} .
                                    {'  '}
                                    {
                                        <FontAwesome
                                            name='group'
                                            size={12}
                                            color={'#aaa'}
                                        />
                                    }
                                    {' '}
                                    Teams
                                </Text>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', top: '11%', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.categories}>
                                Join Tournament
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.main}>
                <ImageBackground source={require('../img/home.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
                    <StatusBar
                        backgroundColor='#070022'
                        barStyle='light-content'
                    />
                    <View style={styles.top}>
                        <ImageBackground
                            style={styles.background}
                            source={data.banner}
                        >
                            <View style={styles.innerContainer}>
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
                                <View style={styles.details}>
                                    <View style={styles.up}>
                                        <View style={styles.status}>

                                            <Text style={styles.statusText}>
                                                {
                                                    <Octicons
                                                        name='primitive-dot'
                                                        size={20}
                                                        color={'green'}
                                                    />
                                                }
                                                {' '}
                                                Open
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.down}>
                                        <View style={styles.date}>
                                            <View style={styles.dateContainer}>
                                                <Text style={styles.dateText}>
                                                    {
                                                        <FontAwesome
                                                            name='calendar'
                                                            color='#fff'
                                                            size={15}
                                                        />
                                                    }
                                                    {'  '}
                                                    {data.date}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.title}>
                                            <View style={styles.titleContainer}>
                                                <Text style={styles.titleText}>
                                                    {data.title}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </ImageBackground>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.first}>
                            <View style={styles.trophy}>
                                <Image
                                    source={require('../img/trophy.png')}
                                    style={{ height: 50, width: 50, marginLeft: '25%' }}
                                />
                            </View>
                            <View style={styles.trophyText}>
                                <Text style={{ fontSize: 13, fontFamily: 'Ubuntu-Bold', color: '#fff' }}>
                                    GUARANTEED PRIZE
                                </Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Ubuntu-Light', color: '#fff' }}>
                                    Tournament prize is guaranteed by Us and subjected to the terms and conditions.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.second}>
                            <View style={styles.secHeader}>
                                <TouchableOpacity onPress={() => this.setState({ form1: true, form2: false, form3: false })} style={[styles.section, this.state.form1 ? { backgroundColor: '#DE007B' } : { backgroundColor: 'rgba(25, 25, 52, 0.5)' }]}>
                                    <Text style={styles.categories}>
                                        {
                                            <FontAwesome5
                                                name='info-circle'
                                                size={15}
                                                color={'#fff'}
                                            />
                                        }
                                        {' '}
                                        Info
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({ form1: false, form2: true, form3: false })} style={[styles.section, this.state.form2 ? { backgroundColor: '#DE007B' } : { backgroundColor: 'rgba(25, 25, 52, 0.5)' }]}>
                                    <Text style={[styles.categories, { fontSize: 13 }]}>
                                        {
                                            <MaterialCommunityIcons
                                                name='account-group'
                                                size={15}
                                                color={'#fff'}
                                            />
                                        }
                                        {' '}
                                        Participants
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({ form1: false, form2: false, form3: true })} style={[styles.section, this.state.form3 ? { backgroundColor: '#DE007B' } : { backgroundColor: 'rgba(25, 25, 52, 0.5)' }]}>
                                    <Text style={styles.categories}>
                                        {
                                            <MaterialIcons
                                                name='live-tv'
                                                size={15}
                                                color={'#fff'}
                                            />
                                        }
                                        {' '}
                                        Live
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {form}
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
    button: {
        backgroundColor: '#253772',
        height: 50,
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '3%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    secHeader: {
        flex: 0.2,
        backgroundColor: 'rgba(0,0,0, 0.30)',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 160,
        borderRadius: 15,
        resizeMode: 'cover',
        left: '15%',
        zIndex: 1000
    },
    section: {
        justifyContent: 'center',
        width: 120,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'rgba(25, 25, 52, 0.5)',
        borderRadius: 15
    },
    categories: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Ubuntu-Medium'
    },
    organizer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    organizerContainer: {
        height: 100,
        width: 200,
        backgroundColor: 'rgba(25, 25, 52, 0.5)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        flex: 1
    },
    top: {
        flex: 0.45
    },
    background: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.30)'
    },
    bottom: {
        flex: 1
    },
    first: {
        flex: 0.25,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    trophy: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    trophyText: {
        flex: 1,
        justifyContent: 'center',
        marginRight: '3%'
    },
    second: {
        flex: 1
    },
    third: {
        flex: 1,
        backgroundColor: 'rgba(25, 25, 52, 0.5)',
    },
    header: {
        flex: 0.35,
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
    details: {
        flex: 1,

    },
    up: {
        flex: 0.5,
        justifyContent: 'center',
    },
    status: {
        height: 40,
        width: 80,
        backgroundColor: 'rgba(25, 25, 52, 0.5)',
        borderRadius: 10,
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Ubuntu-Regular'
    },
    down: {
        flex: 1
    },
    title: {
        flex: 1
    },
    titleContainer: {
        height: 50,
        width: '90%',
        backgroundColor: 'rgba(25, 25, 52, 0.5)',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: '3%',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 15,
        fontFamily: 'Ubuntu-Bold',
        color: '#fff'
    },
    date: {
        flex: 1,
        justifyContent: 'center'
    },
    dateText: {
        marginLeft: '7%',
        fontSize: 13,
        color: '#fff',
        fontFamily: 'Ubuntu-Medium'
    },
    dateContainer: {
        height: 50,
        width: '55%',
        backgroundColor: 'rgba(25, 25, 52, 0.5)',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: '7%'
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
    },
    bottomSubTitle: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Ubuntu-Regular'
    }
})