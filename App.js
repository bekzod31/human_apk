import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, List, ListItem } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeTabContainer from './Components/HomeTabScreen/RouteHomeTab';
import DrawerAppContainer from './Components/DrawerTabScreen/DrawerRoute';
class CustomHeader extends React.Component {

  render(){
    let {title, isHome} = this.props;
    return (
      <Container>
      <Header>
        <Left>
         {
           isHome?
           <Button transparent onPress={() => this.props.navigation.openDrawer()}>
           <Icon name='menu' />
         </Button>:
            <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
         }
        </Left>
        <Body>
        <Title>{title}</Title>
        </Body>
        <Right>
          {/* <Button transparent>
            <Icon name='menu' />
          </Button> */}
        </Right>
      </Header>
    </Container>
    )
  }
}






class Profile extends React.Component {

  render(){
    return (
      <View style={{flex:1}}>
        <CustomHeader title="Profile" navigation={this.props.navigation} />
        <View style={styless.text}>
        <Text>Profile  Screen</Text>
        <Button light>
          <Text>Go To Search Detail</Text>
        </Button>
        </View>
      </View>
    )
  }
}

class Setting extends React.Component {

  render(){
    return (
      <View style={{flex:1}}>
        <CustomHeader title="Setting" navigation={this.props.navigation} />
        <View style={styless.text}>
        <Text>Setting  Screen</Text>
        <Button light>
          <Text>Go To Search Detail</Text>
        </Button>
        </View>
      </View>
    )
  }
}



class SideMenu extends React.Component {

  render(){
    return (
      <SafeAreaView>
        <ScrollView>
            <List>
              <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
                  <Text>Profile</Text>
              </ListItem>
            </List>
            <List>
              <ListItem onPress={() => this.props.navigation.navigate('Setting')}>
                  <Text>Setting</Text>
              </ListItem>
            </List>
        </ScrollView>
      </SafeAreaView>
    )
  }
}





class SearchDetail extends React.Component {

  render(){
    return (
      <View style={{flex:1}}>
        <CustomHeader  navigation={this.props.navigation} />
        <View style={styless.text}>
        <Text>Search Detail Screen</Text>
        <Button light>
          <Text>Go To Search Detail</Text>
        </Button>
        </View>
      </View>
    )
  }
}

class FeedDetail extends React.Component {

  render(){
    return (
      <View style={{flex:1}}>
        <CustomHeader  navigation={this.props.navigation} />
        <View style={styless.text}>
        <Text>Feed Detail Screen</Text>
        <Button light>
          <Text>Go To Feed Detail</Text>
        </Button>
        </View>
      </View>
    )
  }
}

class Feed extends React.Component {

  render(){
    return (
      <View style={{flex:1}}>
        <CustomHeader  isHome={true} navigation={this.props.navigation} />
        <View style={styless.text}>
        <Text>Feed</Text>
        <Button light onPress={() => this.props.navigation.navigate('FeedDetail')}>
          <Text>Go To Feed Detail</Text>
        </Button>
        </View>
      </View>
    )
  }
}



class Search extends React.Component {

  render(){
    return (
      <View style={{flex:1}}>
        <CustomHeader  isHome={true} navigation={this.props.navigation} />
        <View style={styless.text}>
        <Text>Search</Text>
        <Button light onPress={() => this.props.navigation.navigate('SearchDetail')}>
          <Text>Go To Search Detail</Text>
        </Button>
        </View>
      </View>
    )
  }
}





const navOptionHandler = (navigation) => ({
  header: null
})


const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: navOptionHandler
    },
    FeedDetail: {
      screen: FeedDetail,
      navigationOptions: navOptionHandler
    }
  }
)



const SearchStack = createStackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: navOptionHandler
    },
    SearchDetail: {
      screen: SearchDetail,
      navigationOptions: navOptionHandler
    }
  }
)


const styless = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const MainTabs = createBottomTabNavigator(
  {
    Feed: {screen: FeedStack},
    Search: {screen: SearchStack}
  }
)


const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeTabContainer,
      navigationOptions: navOptionHandler
    },
    Profile: {
      screen: Profile,
      navigationOptions: navOptionHandler
    },
    Stting: {
      screen: Setting,
      navigationOptions: navOptionHandler
    }
  },
  {
    initialRouteName: 'Home'
  }
)


const appDrawer = createDrawerNavigator(
  {
    drawer: MainStack
  },
  {
    contentComponent: SideMenu
  }
)


const AppContainer = createAppContainer(appDrawer);

export default class App extends React.Component {
  render(){
    return (
      <DrawerAppContainer navigation={this.props.navigation}/>
    )
  }
} 



