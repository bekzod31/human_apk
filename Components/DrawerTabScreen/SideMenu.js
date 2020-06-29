import React from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { List, ListItem, Text, Card, Icon } from 'native-base';

export default class SideMenu extends React.Component {


    render() {
        return (
            <SafeAreaView navigation={this.props.navigation}>
                <View style={styles.conntent}>
                    {/* <Image source={require('../../Image/human.png')} style={styles.image} /> */}
                </View>
                <List style={styles.language}>
                    <ListItem style={styles.languageItem}>
                        <TouchableOpacity>
                            <Card style={styles.card}>
                                <Text style={styles.langtext}>Uz</Text>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card style={styles.card}>
                                <Text style={styles.langtext}>Уз</Text>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card style={styles.card}>
                                <Text style={styles.langtext}>En</Text>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card style={styles.card}>
                                <Text style={styles.langtext}>Ru</Text>
                            </Card>
                        </TouchableOpacity>
                    </ListItem>
                </List>
                <View>
                    <ScrollView>
                        <List>
                            <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('Uzbekistan')}>
                                <Text>UZBEKISTAN</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('World')}>
                                <Text>WORLD</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('Projects')}>
                                <Text>PROJECTS</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('Tribune')}>
                                <Text>TRIBUNE</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('Investigation')}>
                                <Text>INVESTIGATIONS</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('Facetoface')}>
                                <Text>FACE-TO-FACE</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('Sport')}>
                                <Text>SPORT</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('Audio') && this.props.navigation.closeDrawer()} >
                                <Text>AUDIO</Text>
                            </ListItem>
                        </List>
                        <View style={{marginTop: 20}}>
                              <List>
                                  <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('About')}>
                                      <Text style={styles.bottomtext}>About Us</Text>
                                  </ListItem>
                              </List>
                              <List>
                                  <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('Advertisement')}>
                                      <Text style={styles.bottomtext}>Advertisement</Text>
                                  </ListItem>
                              </List>
                              <List>
                                  <ListItem style={styles.listitem} onPress={() => this.props.navigation.navigate('Setting')}>
                                      <Text style={styles.bottomtext}>Settings</Text>
                                  </ListItem>
                              </List>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    conntent: {
        width: 100 +'%',
        height: 100,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        marginLeft: 0
    },
    image: {
        width: 300,
        height: 80
    },
    card: {
        borderRadius: 30,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    language: {
        backgroundColor: '#f2f2f2',
        textAlign: 'center'
    },
    languageItem: {
        paddingLeft: 18
    },
    langtext: {
        color: 'grey',
        fontSize: 14
    },
    listitem: {
        paddingBottom: 10,
        paddingTop: 10,
        borderColor: '#f2f2f2',
        paddingLeft: 20
    },
    bottomtext: {
        color: 'grey',
        fontSize: 14,
        fontWeight: 'bold'
    }
})