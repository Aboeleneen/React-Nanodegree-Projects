import React , {Component} from 'react'
import {connect} from 'react-redux'
import {handleSubmitAnswer} from '../actions/shared'

class QuestionPage extends Component{
  state = {
    selectedOption : "optionOne"
  }

  handleChange = (e)=>{
    this.setState({
      selectedOption : e.target.value
    })
  }
  handleSubmit= (e)=>{
    e.preventDefault()
    console.log(e.target)
    const {dispatch} = this.props
    const info = {
      qid : this.props.question.id ,
      authedUser : this.props.currentUser ,
      answer : this.state.selectedOption
    }
    dispatch(handleSubmitAnswer(info))
  }
  render(){
      const {question , answered} = this.props
      return (
        <div>
          { answered
            ? <h1> answered </h1> :
              <form onSubmit={this.handleSubmit}>
                <input
                    type="radio"
                    id="optionOne"
                    name="option"
                    value="optionOne"
                    checked={this.state.selectedOption === "optionOne"}
                    onChange = {this.handleChange}
                />
                <label for="optionOne">{question.optionOne.text}</label>
                <input
                    type="radio"
                    id="optionTwo"
                    name="option"
                    value="optionTwo"
                    checked={this.state.selectedOption === "optionTwo"}
                    onChange = {this.handleChange}
                />
                <label for="optionTwo"> {question.optionTwo.text}</label>
                <button>Submit</button>
              </form>
          }
        </div>
      )
  }
}

function mapStateToProps({users,questions,currentUser} , {id}){
    const question = questions[id]
     console.log(question)
    const optionOne = question.optionOne.votes.includes(currentUser)
    const optionTwo = question.optionTwo.votes.includes(currentUser)
    return {
      question,
      answered : optionOne || optionTwo,
      currentUser
    }
}

export default connect(mapStateToProps)(QuestionPage)
