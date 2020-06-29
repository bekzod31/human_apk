import React from 'react';
import Video from './Video';
import AudioM from './AudioM';
import Photo from './Photo';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


const MediaBottomTab = createMaterialTopTabNavigator(
    {
        Audio: {screen: AudioM},
        Video: {screen: Video},
        Photo: {screen: Photo}
    },
    {
        initialRouteName: 'Audio',
        tabBarOptions: {
            style: {
                backgroundColor: 'blue'
            }
        }
    }
)

const AppMedia = createAppContainer(MediaBottomTab);
export default AppMedia;