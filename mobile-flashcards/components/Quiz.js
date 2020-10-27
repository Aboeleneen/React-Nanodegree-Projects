import React , {Component} from 'react'
import {View , Text , TouchableOpacity} from 'react-native'

import Question from './Question'

import {connect} from 'react-redux'

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

  render(){
      if(this.state.currentIndex === this.props.questions.length){
        this.props.navigation.navigate('Result' ,
          {result : {correctAnswers : this.state.correctAnswers , wrongAnswers:this.state.wrongAnswers }})
      }
      const {currentIndex} = this.state
      const currentQuestion = this.props.questions[currentIndex]

      return(
        <View>
          <Question question={currentQuestion} key={currentIndex} setCorrect={this.setCorrect} setWrong={this.setWrong} />
        </View>
      )
  }
}

function mapStateToProps(state ,props){
  const {title} = props.route.params

  return{
    questions : state[title].questions
  }
}

export default connect(mapStateToProps)(Quiz)
