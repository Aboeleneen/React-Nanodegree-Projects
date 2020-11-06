import React , {Component} from 'react'
import {View , Text } from 'react-native'

export default class QuizResult extends Component{
  render(){
    const {correctAnswers , wrongAnswers} = this.props.result
    return(
      <View>
        <Text> Your Score </Text>
        <Text>correctAnswers : {correctAnswers}</Text>
      </View>
    )
  }
}
