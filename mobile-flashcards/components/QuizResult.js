import React , {Component} from 'react'
import {View , Text } from 'react-native'

export default class QuizResult extends Component{
  render(){
    return(
      <View>
        <Text> Your Score </Text>
        <Text>10/15</Text>
      </View>
    )
  }
}
