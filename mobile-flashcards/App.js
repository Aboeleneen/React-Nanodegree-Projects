import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Deck from './components/Deck'
import AddDeck from './components/AddDeck'
import DeckDetails from './components/DeckDetails'
import AddCard from './components/AddCard'
import DeckList from './components/DeckList'
import Question from './components/Question'
import Quiz from './components/Quiz'
import QuizResult from './components/QuizResult'

import {createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , HeaderBackButton  } from '@react-navigation/stack';

import { AntDesign , Ionicons } from '@expo/vector-icons';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'

import {setLocalNotifications} from './utils/helpers'

const store = createStore(reducers)

const Tab =createBottomTabNavigator()
const Stack= createStackNavigator()

function Tabs({navigation}){
  return(
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name='Decks'
        children={()=><DeckList navigation={navigation}/>}
        options={{
          tabBarLabel:'Decks' ,
          tabBarIcons:({color,size})=>(
            <AntDesign name="creditcard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='add Deck'
        children={()=><AddDeck navigation={navigation} />}
        options={{
          tabBarLabel: 'Add Deck' ,
          tabBarIcons:({color,size})=>(
            <Ionicons name="ios-add-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
export default class App extends Component{
  state = {
    isReady:false,
  }
  async componentDidMount(){
    //await setLocalNotifications()
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render(){
    if (!this.state.isReady) {
     return <AppLoading />;
   }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              component={Tabs}
              name='Keep Working'
              options= {{
                headerTitleAlign:'center' ,
                headerStyle:{
                  backgroundColor:'#e91e63'
                },
                headerTintColor:'white'
              }}
            />
            <Stack.Screen component={DeckDetails} name='Details' />
            <Stack.Screen component={AddCard} name='AddCard'/>
            <Stack.Screen component={Quiz} name='Quiz' />
            <Stack.Screen component={QuizResult} name='Result' />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
