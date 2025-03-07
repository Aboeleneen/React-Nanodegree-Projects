import React , {Component} from 'react'
import {Progress , Card, Image , Grid , Label} from 'semantic-ui-react'
import {connect} from 'react-redux'

class QuestionResult extends Component{
  render(){
    const {question , author , userOption , optionOne , optionTwo } = this.props
    const dateObject = new Date(question.timestamp)
    const humanDate = dateObject.toLocaleString()
    return(
      <Grid columns={2} centered>
        <Grid.Column>
            <Card fluid>
            <Card.Content>
              <Card.Header textAlign='center'>Question Result</Card.Header>
            </Card.Content>
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
                {userOption==='optionOne' && <Label basic color='red' pointing='below'>
                  Your Answer
                </Label>}
                <Progress active={userOption==='optionOne'} size='large' value={optionOne} total={optionOne+optionTwo} progress='ratio' color={userOption==='optionOne'? 'red' : null} >
                  <Label> {(optionOne/(optionOne+optionTwo))*100} % </Label> {question.optionOne.text}
                </Progress>
                {userOption==='optionTwo' && <Label basic color='red' pointing='below'>
                  Your Answer
                </Label>}
                <Progress active={userOption==='optionTwo'} size='large' value={optionTwo} total={optionOne+optionTwo} progress='ratio' color={userOption==='optionTwo'? 'red' : null}>
                  <Label> {(optionTwo/(optionOne+optionTwo))*100} % </Label> {question.optionTwo.text}
                </Progress>

              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )

  }
}

function mapStateToProps({users , currentUser , questions} , {id}){
  const question = questions[id]
  const author = users[question.author]
  const userOption = users[currentUser].answers[id]
  const optionOne = question.optionOne.votes.length
  const optionTwo = question.optionTwo.votes.length

  return{
    question ,
    author,
    currentUser,
    userOption,
    optionOne,
    optionTwo,
  }
}

export default connect(mapStateToProps)(QuestionResult)
