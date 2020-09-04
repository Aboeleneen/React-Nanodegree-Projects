import React , {Component} from 'react'
import {connect} from 'react-redux'
import UserCard from './UserCard'
import {Card} from 'semantic-ui-react'
class LeaderBoard extends Component{
  render(){
    const {users} = this.props
    const keys = Object.keys(users).sort((a,b)=>{
      const first =  users[a].questions.length + Object.keys(users[a].answers).length
      const second = users[b].questions.length + Object.keys(users[b].answers).length
      return second-first
    })
    return (
        <Card.Group itemsPerRow={5}>
              {keys.map((userID , i )=>(
                <UserCard key={userID} id={userID} order={i}/>
              ))}
        </Card.Group>
    )
  }
}

function mapStateToProps({users}){
  return {
    users,
  }
}
export default connect(mapStateToProps)(LeaderBoard)
