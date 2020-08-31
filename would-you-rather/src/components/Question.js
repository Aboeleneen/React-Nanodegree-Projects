import React , {Component} from 'react'
import {connect} from 'react-redux'

class Question extends Component{
  handleSubmit = (e)=>{
    e.preventDefault()
    
  }
  render(){
    const {question , currentUser , author} = this.props
    return (
      <div>
        <h1>{author.name}</h1>
        <img src={author.avatarURL}></img>
        <button >View More</button>
      </div>
    )
  }
}

function mapStateToProps({questions , currentUser , users}, {id}){
  console.log(id)

  const question = questions[id]
  const author = users[question.author]
  return {
    question,
    currentUser,
    author,
  }
}
export default connect(mapStateToProps)(Question)
