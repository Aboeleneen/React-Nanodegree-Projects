import React , {Component} from 'react'
import {connect} from 'react-redux'
import {handleSubmitAnswer} from '../actions/shared'
import { Button, Card, Image , Grid} from 'semantic-ui-react'
import QuestionResult from './QuestionResult'

class QuestionPage extends Component{
  state = {
    selectedOption : "optionOne"
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
  handleChange = (e)=>{
    console.log(e.target.id)
    this.setState({
      selectedOption : e.target.id
    })
    const buttonOne = this.buttonOne.ref.current.classList
    const buttonTwo = this.buttonTwo.ref.current.classList
    if(e.target.id === 'optionOne'){
      buttonOne.remove('basic')
      buttonTwo.add('basic')
    }else{
      buttonTwo.remove('basic')
      buttonOne.add('basic')
    }
  }
  render(){
      const {question , answered , author} = this.props
      const dateObject = new Date(question.timestamp*1000)
      const humanDate = dateObject.toLocaleString()
      return (
        <div>
          { answered
            ? <QuestionResult id={this.props.id}/> :
            <Grid columns={2} centered>
              <Grid.Column>
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
                      <Button
                        ref={(buttonOne)=> this.buttonOne = buttonOne}
                        id='optionOne'
                        fluid
                        basic
                        color='green'
                        onClick={this.handleChange}
                       >{question.optionOne.text}
                     </Button>
                      <br/>
                      <Button
                        ref={(buttonTwo)=> this.buttonTwo = buttonTwo}
                        id='optionTwo'
                        fluid
                        basic
                        color='red'
                        onClick={this.handleChange}
                       >{question.optionTwo.text}
                     </Button>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui'>
                    <Button onClick={this.handleSubmit} fluid basic color='blue'>
                      Submit
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
          }
        </div>
      )
  }
}

function mapStateToProps({users,questions,currentUser} , {id}){
    const question = questions[id]
    console.log(id)
    const optionOne = question.optionOne.votes.includes(currentUser)
    const optionTwo = question.optionTwo.votes.includes(currentUser)
    const author = users[question.author]
    return {
      question,
      answered : optionOne || optionTwo,
      currentUser,
      author,
    }
}

export default connect(mapStateToProps)(QuestionPage)
