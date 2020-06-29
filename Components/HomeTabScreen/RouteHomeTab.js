import React from 'react';
import {Image} from 'react-native';
import Article from './Article';
import Subscribe from './Subscribe';
import Media from './Media';
import Important from './Important';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import AppMedia from '../MediaTopTab/RouteMediaTab';

const HomeTabStack = createBottomTabNavigator(
    {
        Muhim: {screen: Important,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return (
                    <Image 
                        source={require('../../Image/important.png')}
                        style={{width: 30, height: 30}}
                    />
                )
            }
        } },
        Maqola: {screen: Article,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return (
                    <Image
                    source={require('../../Image/article.png')}
                    style={{width: 30, height: 30}}
                    />
                )
            }
        }},
        Obuna: {screen: Subscribe,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return (
                    <Image
                    source={require('../../Image/subscribe.png')}
                    style={{width: 30, height: 30}}
                    />
                )
            }
        }},
        Media: {screen: AppMedia,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return (
                    <Image
                    source={require('../../Image/media1.png')}
                    style={{width: 30, height: 30}}
                    />
                )
            }
        }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#f2f2f2',
            activeTintColor: 'black',
            inactiveTintColor: 'grey'
        }
    },
)

const HomeTabContainer = createAppContainer(HomeTabStack);

export default HomeTabContainer;

