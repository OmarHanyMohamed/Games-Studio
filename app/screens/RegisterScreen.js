import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window')

export default class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            check_textInputChange: false,
            email_textInputChange: false,
            secureTextEntry: true,
            email: '',
            password: '',
            errorMessage: null,
            load: false
        }
    }

    usernameInputChange(value) {
        if (value.length !== 0) {
            this.setState({
                check_textInputChange: true
            });
        }
        else {
            this.setState({
                check_textInputChange: false
            })
        }
    }

    secureTextEntry() {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    render() {
        return (
            <View style={styles.main}>
                <StatusBar
                    backgroundColor='#070022'
                    barStyle='light-content'
                />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Ionicons
                            name='arrow-back'
                            color='#fff'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Image source={require('../img/logoz.png')} style={styles.logo} />
                </View>
                <View style={styles.body}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Create your account</Text>
                    </View>
                    <View style={styles.loginContainer}>
                        <View style={styles.input}>
                            <MaterialCommunityIcons
                                name='email-outline'
                                color='grey'
                                size={20}
                                style={{ marginTop: '4%', marginLeft: '2%' }}
                            />
                            <TextInput
                                placeholder='Email'
                                style={styles.textInput}
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                autoCapitalize='none'
                            />
                        </View>
                        <View style={styles.input}>
                            <MaterialCommunityIcons
                                name='lock-outline'
                                color='grey'
                                size={20}
                                style={{ marginTop: '4%', marginLeft: '2%' }}
                            />
                            {this.state.secureTextEntry ?
                                <TextInput
                                    placeholder='Your Password...'
                                    autoCapitalize='none'
                                    secureTextEntry={true}
                                    style={styles.textInput}
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                />
                                :
                                <TextInput
                                    placeholder='Your Password...'
                                    style={styles.textInput}
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                />
                            }
                            <TouchableOpacity onPress={() => this.secureTextEntry()}>
                                {this.state.secureTextEntry ?
                                    <Feather
                                        name='eye-off'
                                        color='gray'
                                        size={20}
                                        style={{ marginTop: 15, marginRight: '5%' }}
                                    />
                                    :
                                    <Feather
                                        name='eye'
                                        color='gray'
                                        size={20}
                                        style={{ marginTop: 15, marginRight: '5%' }}
                                    />
                                }

                            </TouchableOpacity>



                        </View>
                        <View style={styles.input}>
                            <MaterialCommunityIcons
                                name='lock-outline'
                                color='grey'
                                size={20}
                                style={{ marginTop: '4%', marginLeft: '2%' }}
                            />
                            {this.state.secureTextEntry ?
                                <TextInput
                                    placeholder='Confirm Password...'
                                    autoCapitalize='none'
                                    secureTextEntry={true}
                                    style={styles.textInput}
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                />
                                :
                                <TextInput
                                    placeholder='Confirm Password...'
                                    style={styles.textInput}
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                />
                            }
                            <TouchableOpacity onPress={() => this.secureTextEntry()}>
                                {this.state.secureTextEntry ?
                                    <Feather
                                        name='eye-off'
                                        color='gray'
                                        size={20}
                                        style={{ marginTop: 15, marginRight: '5%' }}
                                    />
                                    :
                                    <Feather
                                        name='eye'
                                        color='gray'
                                        size={20}
                                        style={{ marginTop: 15, marginRight: '5%' }}
                                    />
                                }

                            </TouchableOpacity>



                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <Text style={styles.buttonText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footerHeader}>
                        <Text style={styles.otherText}>. Or sign up with .</Text>
                    </View>
                    <View style={styles.socialMedia}>
                        <TouchableOpacity style={styles.socialContainer}>
                            <FontAwesome
                                name='google'
                                color='#E93D3A'
                                size={30}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialContainer}>
                            <FontAwesome
                                name='facebook'
                                color='#fff'
                                size={30}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialContainer}>
                            <FontAwesome
                                name='twitter'
                                color='#1DA1F2'
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#070022',
    },
    header: {
        flex: 0.8,
        justifyContent: 'center'
    },
    back: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(25, 25, 52, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '3%'
    },
    logo: {
        height: 150,
        width: 150,
        alignSelf: 'center'
    },
    title: {
        flex: 0.2,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 17,
        fontFamily: 'Ubuntu-Medium',
        marginLeft: '7%',
        color: '#fff'
    },
    body: {
        flex: 1
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: 350,
        backgroundColor: '#070022',
        borderRadius: 10,
        borderBottomColor: '#fff',
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "white",
        shadowOpacity: 0.5,
        borderTopColor: '#fff',
        elevation: 15,
        flexDirection: 'row',

        marginTop: 50,

    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#fff',
        fontFamily: 'Ubuntu-Regular'
    },
    button: {
        height: 55,
        top: '25%',
        width: 350,
        backgroundColor: '#253772',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Ubuntu-Medium',
        fontSize: 15
    },
    footer: {
        flex: 0.8,

    },
    footerHeader: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        top: '45%'

    },
    otherText: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Regular',
        color: '#fff'
    },
    socialMedia: {
        flex: 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        top: '25%'
    },
    socialContainer: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        // backgroundColor: '#fff',

        backgroundColor: 'rgba(38, 56, 115, 0.4)',
        borderRadius: 10,

    },
    register: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})