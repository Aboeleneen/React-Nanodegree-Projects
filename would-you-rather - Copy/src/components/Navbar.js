import React , {Component} from 'react'
import {NavLink , withRouter} from 'react-router-dom'
import { Input, Menu , Icon  , Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {logout} from '../actions/currentUser'

class Navbar extends Component{
  state = { activeItem: 'Home' }

 handleItemClick = (e, { name }) => {
   this.setState({ activeItem: name })
 }

 logout = (e)=>{
   const {dispatch} = this.props
   dispatch(logout())
   this.props.history.push('/login')
 }
  render(){
    const {activeItem , user} = this.props
    return(
      <Menu size='large' style={{backgroundColor: '#74e8e2'}}color='blue' primary>
        <Image
          circular
          floated='left'
          size='mini'
          src={user.avatarURL}
        />
        <Menu.Item
          as={NavLink} to='/'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to='/add'
          name='NewQuestion'
          active={activeItem === 'NewQuestion'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to='/leaderBoard'
          name='LeaderBoard'
          active={activeItem === 'LeaderBoard'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.logout}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
function mapStateToProps({users, currentUser}){
  return {
    user : users[currentUser]
  }
}
export default withRouter(connect(mapStateToProps)(Navbar))
