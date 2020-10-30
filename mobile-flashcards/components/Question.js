import React , {Component} from 'react'
import {View , Text , TouchableOpacity, StyleSheet} from 'react-native'

export default class Question extends Component {

  state = {
    answered : false ,
  }

  handlePress = ()=>{
    this.setState(()=>({answered:true}))
  }


  render(){
    console.log('rendered')
    const {answered} = this.state
    const {question} = this.props
    if(answered){
      return (
          <View style={[styles.container , {borderColor:'purple' , padding : 20}]}>
            <Text>{question.answer}</Text>
          </View>
      )
    }
    return(
      <View style={styles.container}>
        <Text>{question.question}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>this.handlePress()}>
          <Text style={styles.buttonText}>View Answer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    alignItems : 'center' ,
    justifyContent : 'space-around' ,
    borderWidth : 1 ,
    borderColor: 'red',
    borderLeftWidth : 7 ,
    minHeight : 80,
    marginTop : 20 ,
  } ,
  button : {
    padding : 5 ,
    backgroundColor : 'red' ,
    margin:10,
  } ,
  buttonText : {
    color : 'white'
  }
})
