import React , {Component} from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component{
  render(){
    const {users} = this.props
    const keys = Object.keys(users).sort((a,b)=>{
      const first =  users[a].questions.length + Object.keys(users[a].answers).length
      const second = users[b].questions.length + Object.keys(users[b].answers).length
      return second-first
    })
    return (
      <ul>
        {keys.map((userID)=>(
          <li key={userID}> {users[userID].name} </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps({users}){
  return {
    users,
  }
}
export default connect(mapStateToProps)(LeaderBoard)
