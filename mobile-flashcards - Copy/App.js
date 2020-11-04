import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
import { createStackNavigator } from '@react-navigation/stack';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'

import {setLocalNotifications} from './utils/helpers'

const store = createStore(reducers)

const Tab =createBottomTabNavigator()
const Stack= createStackNavigator()
function Tabs({navigation}){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Decks' children={()=><DeckList navigation={navigation} decks={store.getState()}/>}/>
      <Tab.Screen name='add Deck' children={()=><AddDeck navigation={navigation} />}/>
    </Tab.Navigator>
  )
}
export default class App extends Component{
  async componentDidMount(){
    await setLocalNotifications()
  }
  render(){
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Tabs} name='Home' />
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
