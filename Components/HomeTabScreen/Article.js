import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from './CustomHeader';

export default class Article extends React.Component {


    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.text}>
                    <Text>This is Article page</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        text: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)


