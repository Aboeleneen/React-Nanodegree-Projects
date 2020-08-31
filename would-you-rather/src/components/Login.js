import React , {Component} from 'react'
import {connect} from 'react-redux'
import {setCurrentUser} from '../actions/currentUser'

class Login extends Component{
  handleSubmit = (e)=>{
    e.preventDefault()
    const {dispatch} = this.props
    const userID = e.target[0].value
    dispatch(setCurrentUser(userID))
  }
  render(){
    const {users} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <select>
          {Object.keys(users).map((userID) => <option value={userID}key={userID}> {users[userID].name} </option>)}
        </select>
        <button>Submit</button>
      </form>
    )
  }
}

function mapStateToProps({users}){
    return {
      users,
    }
}

export default connect(mapStateToProps)(Login)
