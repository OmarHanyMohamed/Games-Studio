import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './screens/SplashScreen';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import GameInfoScreen from './screens/GameInfoScreen';
import NewsScreen from './screens/NewsScreen';
import TournmentScreen from './screens/TournmentScreen';

const PrimaryNav = createStackNavigator({
    SplashScreen: { screen: SplashScreen},
    StartScreen: { screen: StartScreen },
    LoginScreen: { screen: LoginScreen },
    RegisterScreen: { screen: RegisterScreen },
    HomeScreen: { screen: HomeScreen },
    GameInfoScreen: { screen: GameInfoScreen },
    NewsScreen: { screen: NewsScreen },
    TournmentScreen: { screen: TournmentScreen }
}, {
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
})

export default createAppContainer(PrimaryNav)