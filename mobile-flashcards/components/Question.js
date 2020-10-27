import React , {Component} from 'react'
import {View , Text , TouchableOpacity, StyleSheet} from 'react-native'

export default class Question extends Component {
  render(){
    return(
      <View>
        <Text>Question</Text>
        <TouchableOpacity>
          <Text>View Answer</Text>
        </TouchableOpacity>
        <Text> 2/2 </Text>
      </View>
    )
  }
}
