import React , {Component} from 'react'
import {Card , Grid , Image , Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'

class UserCard extends Component{
  render(){
    const {user  , currentUser} = this.props
    const answered = 'Answered: ' + this.props.answered
    const asked = 'Asked: ' + this.props.asked
    return(
      <Card color={user.id===currentUser ? 'red' : null}>
      <Card.Content extra>
            <h3>  <Icon name='gem' /> Score : {this.props.asked + this.props.answered} </h3>
      </Card.Content>
        <Image src={user.avatarURL} wrapped ui={true} />
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>
            <span>User</span>
          </Card.Meta>
          <Card.Description>
            <Card.Group>
              <Card fluid color='red' header={answered} />
              <Card fluid color='orange' header={asked} />
            </Card.Group>
          </Card.Description>
        </Card.Content>

      </Card>
    )
  }
}

function mapStateToProps({users , currentUser}, {id , order}){
  const user = users[id]
  const answered = Object.keys(user.answers).length
  const asked = user.questions.length
  return {
    user,
    currentUser,
    order,
    answered,
    asked,
  }
}

export default connect(mapStateToProps)(UserCard)
