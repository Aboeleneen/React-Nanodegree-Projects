import React , {Component} from 'react'
import {View , Text , TouchableOpacity , StyleSheet } from 'react-native'

import Question from './Question'
import QuizResult from './QuizResult'

import {connect} from 'react-redux'

import {clearLocalNotifications , setLocalNotifications} from '../utils/helpers'

class Quiz extends Component{
  state = {
    currentIndex : 0 ,
    correctAnswers : 0 ,
    wrongAnswers : 0 ,
  }

  getNext = ()=>{
    this.setState((prevState)=>({
      currentIndex : prevState.currentIndex+1
    }))
  }

  setCorrect = ()=>{
    this.setState((prevState)=>({
      ...prevState ,
      correctAnswers : prevState.correctAnswers+1 ,
    }))
    this.getNext()
  }

  setWrong = ()=>{
    this.setState((prevState)=>({
      ...prevState ,
      wrongAnswers : prevState.wrongAnswers+1 ,
    }))
    this.getNext()
  }

  startOver = ()=>{
    this.setState(()=>({
      currentIndex : 0 ,
      correctAnswers : 0 ,
      wrongAnswers : 0 ,
    }))
  }

  backToDeck = ()=>{
    this.props.navigation.navigate('Details' , {deck:this.props.title})
  }

  render(){
      if(this.state.currentIndex == this.props.questions.length){
        clearLocalNotifications()
        setLocalNotifications()
        return (
          <View>
            <QuizResult result={{correctAnswers : this.state.correctAnswers , wrongAnswers:this.state.wrongAnswers }} />
            <TouchableOpacity style={styles.button} onPress={this.startOver}>
              <Text style={styles.buttonText}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.backToDeck}>
              <Text style={styles.buttonText}>Back To Deck</Text>
            </TouchableOpacity>
          </View>
        )
      }
      const {currentIndex} = this.state
      const currentQuestion = this.props.questions[currentIndex]
      console.log(this.state.currentIndex === this.props.questions.length)
      return(
        <View>
          <Question question={currentQuestion} key={currentIndex} />
          <TouchableOpacity style={styles.button} onPress={this.setWrong}>
            <Text style={styles.buttonText}>Wrong</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor:'green'}]} onPress={this.setCorrect}>
            <Text style={styles.buttonText}>Correct</Text>
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


function mapStateToProps(state ,props){
  const {title} = props.route.params

  return{
    questions : state[title].questions ,
    title : title
  }
}

export default connect(mapStateToProps)(Quiz)
