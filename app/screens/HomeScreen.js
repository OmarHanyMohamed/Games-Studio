import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, ImageBackground, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatListSlider } from 'react-native-flatlist-slider';
import Preview from '../components/Preview';
import Popular from '../components/Popular';

const images = [
    {
        banner: require('../img/pubg.jpg'),
        title: 'RPM - PUBG MOBILE STAR CHALLENGE GLOBAL FINALS',
        hostBg: require('../img/slg.png'),
        date: '14 Dec 2021 08:00 pm',
        hostName: 'SUPER LEAGUE GAMING',
        game: 'PUBG MOBILE',
        platform: 'Mobile'
    },
    {
        banner: require('../img/league.jpg'),
        title: 'MLE - League of Legends Legendary Throne',
        hostBg: require('../img/mle.png'),
        date: '17 Dec 2021 03:30 pm',
        hostName: 'MINOR LEAGUE ESPORTS', 
        game: 'LEAGUE OF LEGENDS',
        platform: 'Mobile'
    },
    {
        banner: require('../img/csgo.jpg'),
        title: 'CS:GO GG.bet Ice Challenge London 2021',
        hostBg: require('../img/slg.png'),
        date: '18 Dec 2021 10:00 pm',
        hostName: 'SUPER LEAGUE GAMING',
        game: 'Counter Strike',
        platform: 'PC'
    },
    {
        banner: require('../img/fifa.jpg'),
        title: 'EA - FIFA 21 MONTHLY FINALS OPEN SERIES',
        hostBg: require('../img/ea.jpg'),
        date: '26 Dec 2021 08:00 pm',
        hostName: 'EA SPORTS',
        game: 'FIFA 2021',
        platform: 'PS4 - PS5'
    },
]

const games = [
    {
        banner: require('../img/gog.jpg'),
        title: 'Guardians of the galaxy',
        desc: "Marvel's Guardians of the Galaxy is an action-adventure video game developed by Eidos-Montréal and published by Square Enix's European subsidiary.",
        rate: 4.6,
        release: 'October 26, 2021',
        cover: [
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
    },
    {
        banner: require('../img/farcry.png'),
        title: 'Far Cry 6',
        desc: "Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto and published by Ubisoft. It is the sixth main installment in the Far Cry series and the successor to 2018's Far Cry 5.",
        rate: 3.7,
        release: 'October 6, 2021',
        cover: [
            {
                banner: require('../img/far3.png')

            },
            {
                banner: require('../img/far2.png'),
            },
            {
                banner: require('../img/far1.jpg'),
            }
        ]
    },
    {
        banner: require('../img/cod.jpg'),
        title: 'Battlefield 2042',
        desc: 'Battlefield 2042 is a first-person shooter video game developed by DICE and published by Electronic Arts.',
        rate: 2.4,
        release: '2021',
        cover: [
            {
                banner: require('../img/cod1.jpg'),
            },
            {
                banner: require('../img/cod2.png'),
            },
            {
                banner: require('../img/cod3.jpeg'),
            }
        ]
    },
    {
        banner: require('../img/cyberpunk.jpg'),
        title: 'Cyberpunk 2077',
        desc: 'Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe.',
        rate: 3.3,
        release: 'September 17, 2020',
        cover: [
            {
                banner: require('../img/cp1.jpg'),
            },
            {
                banner: require('../img/cp2.jpg'),
            },
            {
                banner: require('../img/cp3.png'),
            }
        ]
    },
]

const news = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: require('../img/gow.jpg'),
        title: 'God of War: Ragnarok release date: 2022',
        subtitle: 'Players got a juicy look at the next epic adventure in Santa Monicas God of War franchise during the 2021 PlayStation Experience.',
        date: 'September 17, 2020',
        news: 'We finally got a proper trailer for God of War: Ragnarok at the PlayStation Showcase 2021 that gave us gameplay and cinematic footage of what we will be faced with when it releases. The combat looks just as devastatingly violent as we would expect, and the new announcement also confirmed that we will indeed be facing Ragnarok a series of events and catastrophes that ultimately lead to the end of the world according to Norse mythology. When Ford pointed out that in the most recent trailer there are moments where it looks like Kratos Guardian Shield has a different design and Kratos is using it in different ways, Williams said this was true and that while he didn’t “want to go too deep on it”, the game will have “different shields, and they have different defensive options and abilities.“ The reason for this, William explained, is because he and the team at Santa Monica Studio “really want to open up expressive choice to the way that you build your Kratos, like the equipment and loadout and things like that."This, Williams added, goes “all the way down to the defense, so you can kind of play a little differently and enemies know how to respond to that, or force you into these different situations where you need to use different things. I think it will be fun for players to explore that but also we want it to be more expressive, you know, your choices matter when you set him up.”'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: require('../img/hor.jpg'),
        title: 'Horizon Forbidden West',
        subtitle: " Aloy is one of the standout protagonists in gaming during modern times, and her post-apocalyptic adventures are set to continue in Horizon Forbidden West.",
        date: 'September 17, 2020',
        news: "Horizon Forbidden West has managed to cement itself as one of the most highly-anticipated exclusives for PS5 for good reason, and its February 2022 release date seems so close, yet so far away. Releasing on both PS5 and PS4, Horizon Forbidden West was originally slated for a 2021 launch, but was confirmed during Gamesom 2021 to be pushed back to February 18, 2022. The sequel to 2017's critically acclaimed Horizon Zero Dawn, we know that Horizon Forbidden West will continue the story of protagonist Aloy. This time around, she finds herself in the western United States on a mission to stop a mysterious threat known only as the Red Blight."
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: require('../img/dl2.jpg'),
        title: 'Dying Light 2 has been delayed until 2022.',
        subtitle: '"The team is steadily progressing with the production and the game is nearing the finish line. The game is complete and we are currently playtesting it," Techland CEO Pawel Marchewka wrote in a statement. "It is by far the biggest and most ambitious project we have ever done.',
        date: 'September 17, 2020',
        news: '"The team is steadily progressing with the production and the game is nearing the finish line. The game is complete and we are currently playtesting it," Techland CEO Pawel Marchewka wrote in a statement. "It is by far the biggest and most ambitious project we have ever done.',
    },
]

export default class HomeScreen extends Component {

    WholeNews = () => {
        return news.map((news, i) => {
            return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsScreen', { data: news })} key={i} style={{ marginTop: 17, height: 180, width: 370, flexDirection: 'row', backgroundColor: 'rgba(25, 25, 52, 0.8)', borderRadius: 20, }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={news.image} style={{ height: 150, width: 150, borderRadius: 20 }} />
                    </View>
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: '3%' }}>
                            <Text style={{ color: '#fff', fontFamily: 'Ubuntu-Medium' }}>{news.title}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontFamily: 'Ubuntu-Light', fontSize: 11, marginRight: '3%' }}>
                                {news.subtitle}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        });
    }

    render() {

        return (
                <View style={styles.main}>

                    <ImageBackground source={require('../img/home.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
                        <StatusBar
                            backgroundColor='#070022'
                            barStyle='light-content'
                        />
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={styles.header}>
                                <View style={styles.rightHeader}>
                                    <TouchableOpacity style={styles.avatar} onPress={() => this.props.navigation.navigate('DrawerOpen') }>
                                        <Image 
                                            source={require('../img/logoz.png')}
                                            style={{ resizeMode: 'cover', height: 40, width: 40, borderRadius: 50 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.middleHeader}>
                                    
                                </View>
                                <View style={styles.leftHeader}>
                                <TouchableOpacity>
                                        <View style={{ height: 35, width: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                                            <FontAwesome5 name='search' size={18} color='#fff' />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.firstSec}>
                                <View style={styles.secHeader}>
                                    <Text style={styles.sectionText}>Featured Tournaments</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', marginTop: '3%' }}>
                                    <FlatListSlider
                                        data={images}
                                        imageKey={'banner'}
                                        width={275}
                                        timer={5000}
                                        component={<Preview />}
                                        indicatorActiveWidth={40}
                                        contentContainerStyle={{ paddingHorizontal: 16 }}
                                        onPress={item => this.props.navigation.navigate('TournmentScreen', {
                                            data: item
                                        })}
                                    />
                                </View>


                            </View>
                            <View style={styles.secSec}>
                                <View style={styles.secHeader}>
                                    <Text style={styles.sectionText}>Popular Games</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <FlatListSlider
                                        data={games}
                                        imageKey={'banner'}
                                        autoscroll={false}
                                        component={<Popular />}
                                        onPress={item => this.props.navigation.navigate('GameInfoScreen', {
                                            data: item
                                        })}
                                        indicatorActiveWidth={40}
                                        contentContainerStyle={{ paddingHorizontal: 16 }}
                                        indicator={false}
                                    />
                                </View>

                            </View>

                            <View style={styles.secSec}>
                                <View style={styles.secHeader}>
                                    <Text style={styles.sectionText}>Latest News</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
                                    {this.WholeNews()}
                                </View>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View >
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 20
    },
    avatar: {
      height: 40,
      width: 40,
      borderRadius: 50,
      marginLeft: '7%'  
    },
    rightHeader: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleHeader: {
        flex: 1,
        justifyContent: 'center'
    },
    leftHeader: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstSec: {
        flex: 1,

    },
    sectionText: {
        marginLeft: '3%',
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Ubuntu-Bold'
    },
    secHeader: {
        flex: 0.2,
        justifyContent: 'center',
        marginTop: '5%'
    },
    secSec: {
        flex: 1,

    }
})