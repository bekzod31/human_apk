import React from 'react';
import Uzbekistan from './Uzbekistan';
import World from './World';
import Projects from './Projects';
import Tribune from './Projects';
import Facetoface from './Facetoface';
import Sport from './Sport';
import Investigation from './Investigations';
import { createStackNavigator } from 'react-navigation-stack';
import HomeTabContainer from '../HomeTabScreen/RouteHomeTab';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideMenu from './SideMenu';
import { Icon, Button } from 'native-base';
import Search from '../HomeTabScreen/Search';
import About from "../SideBarBottom/About";
import Setting  from "../SideBarBottom/Setting";
import Advertisement from '../SideBarBottom/Advertisement';


const SearchStack = createStackNavigator(
    {
        Search: {screen: Search}
    }
)

const DrawerStack = createStackNavigator(
    {
        Home: {screen: HomeTabContainer,
            navigationOptions:({navigation}) => ({
                headerLeft: () => <Button transparent navigation={navigation} onPress={() =>navigation.openDrawer()} >
                        <Icon name='menu' />
                      </Button>,
                headerRight: () => <Button transparent navigation={navigation} onPress={() =>navigation.navigate('Search')}>
                        <Icon name='search' />
                      </Button>,
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTitleAlign: 'center',
                headerTitle: "human.uz",
                headerTitleStyle: {
                    fontFamily: 'sans-serif',
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: 'grey'
                }
            })
        },
        Uzbekistan: {screen: Uzbekistan},
        World: {screen: World},
        Projects: {screen: Projects},
        Tribune: {screen: Tribune},
        Facetoface: {screen: Facetoface},
        Sport: {screen: Sport},
        Investigation: {screen: Investigation},
        About: {screen:About},
        Advertisement: {screen: Advertisement},
        Setting: {screen: Setting}
    },
    {
        initialRouteName: 'Home'
    }
)


const RootDrawer = createDrawerNavigator(
    {
        drawer: {screen: DrawerStack}
    },
    {
        contentComponent: SideMenu
    }
)

const DrawerAppContainer = createAppContainer(RootDrawer);

export default DrawerAppContainer;