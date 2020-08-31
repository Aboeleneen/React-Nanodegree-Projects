import React , {Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/shared'
class NewQuestion extends Component{
  state = {
    fisrt : '' ,
    second : ''
  }
  handleChange = (e)=>{
    const val = e.target.value
    const key = e.target.name
    this.setState((prevState)=>({
      ...prevState ,
      [key]: val
    }))
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    const {dispatch} = this.props
    const optionOneText = this.state.first
    const optionTwoText = this.state.second
    const question = {
      optionOneText,
      optionTwoText,
      author: this.props.currentUser
    }
    this.setState({
      first : '' ,
      second : '',
    })
    dispatch(handleSaveQuestion(question))
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='first'
          placeholder='option one'
          value = {this.state.first}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <br/>
        <input
          type='text'
          name='second'
          placeholder='option two'
          value = {this.state.second}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
    )
  }
}
function mapStateToProps({currentUser}){
  return{
    currentUser,
  }
}
export default connect(mapStateToProps)(NewQuestion)
