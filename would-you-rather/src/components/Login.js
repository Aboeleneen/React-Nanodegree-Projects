import React , {Component} from 'react'
import {connect} from 'react-redux'
import {setCurrentUser} from '../actions/currentUser'
import {withRouter , Redirect} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Segment , Dropdown} from 'semantic-ui-react'

class Login extends Component{
  state = {
    currentUser: null ,
    isAuthed : false
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    const {dispatch} = this.props
    const userID = this.state.currentUser
    if(userID!==null)
      dispatch(setCurrentUser(userID))
  }
  handleChange = (e , {value})=>{
    this.setState({
      currentUser : value
    })
  }
  render(){
    const {users , currentUser} = this.props
    console.log(this.props.location)
    const {from} = this.props.location.state || {from : {pathname:'/'}}
    if(currentUser){
      return <Redirect to={from} />
    }
    return (
       <Grid textAlign='center' style={{ height: '100vh' , backgroundColor: '#e6ebe7'}} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h3' color='teal' textAlign='center'>
            <Image src='https://gravatar.com/avatar/2dc20f7640eae97e6445f9b17804fc8a?s=400&d=robohash&r=x' size='large' />
             <h1>  Welcome To Would You Rather ?!</h1>
          </Header>
          <Form size='large' onSubmit={this.handleSubmit} >
            <Segment stacked>
              <Dropdown
               placeholder='Select User'
               fluid
               selection
               options={users}
               onChange={this.handleChange}
               value={this.state.currentUser}
             />

              <br/>
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps({users , currentUser}){
    const options = []
    Object.keys(users).forEach((userID) => {

      options.push({
        key: userID,
        text: users[userID].name,
        value: userID,
        image: { avatar: true, src: users[userID].avatarURL},
      })
    });
      console.log(options.length)
    return {
      users : options,
      currentUser,
    }
}

export default withRouter(connect(mapStateToProps)(Login))
