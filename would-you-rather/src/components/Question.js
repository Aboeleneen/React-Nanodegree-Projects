import React , {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'

class Question extends Component{
  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.history.push(`/question/${this.props.id}`)

  }
  render(){
    const {question , currentUser , author} = this.props
    const dateObject = new Date(question.timestamp*1000)
    const humanDate = dateObject.toLocaleString()
    return (
      <Card fluid>
      <Card.Content>
        <Image
          circular
          floated='left'
          size='tiny'
          src={author.avatarURL}
        />
        <Card.Header>{author.name}</Card.Header>
        <Card.Meta> At <strong> {humanDate} </strong> </Card.Meta>
        <Card.Description>
            <h3>Would you rather ?! </h3>
            <Button fluid positive>{question.optionOne.text}</Button>
            <br/>
            <Button fluid negative>{question.optionTwo.text}</Button>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
          <Button onClick={this.handleSubmit} fluid basic color='blue'>
            View More
          </Button>
        </div>
      </Card.Content>
    </Card>
    )
  }
}

function mapStateToProps({questions , currentUser , users}, {id}){

//<img src={author.avatarURL}></img>
  const question = questions[id]
  const author = users[question.author]
  return {
    question,
    currentUser,
    author,
  }
}
export default withRouter(connect(mapStateToProps)(Question))
