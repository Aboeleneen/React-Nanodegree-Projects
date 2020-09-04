import React , {Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/shared'
import {Grid , Input , Form , Card , Button , Image} from 'semantic-ui-react'
import {withRouter , Redirect} from 'react-router-dom'

class NewQuestion extends Component{
  state = {
    fisrt : '' ,
    second : ''
  }
  handleChange = (e)=>{
    const val = e.target.value
    const key = e.target.name
    this.setState((prevState)=>({
      ...prevState ,
      [key]: val
    }))
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e)
    const {dispatch} = this.props
    const optionOneText = this.state.first
    const optionTwoText = this.state.second
    const question = {
      optionOneText,
      optionTwoText,
      author: this.props.user.id
    }
    this.setState({
      first : '' ,
      second : '',
    })
    dispatch(handleSaveQuestion(question))
    this.props.history.push('/')
  }
  render(){
    if(! this.props.isUserAuthenticated){
      return <Redirect to='/login' />
    }
    return(
      <Grid columns={2} centered>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                <Image
                  circular
                  floated='left'
                  size='mini'
                  src={this.props.user.avatarURL}
                />
                Add a New Question
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Header>
                <h3>Would You Rather ?! </h3>
                <Form>
                  <Form.Field>
                    <Input
                      placeholder='option one'
                      value = {this.state.first}
                      onChange={this.handleChange}
                      name='first'
                    />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      placeholder='option two'
                      value = {this.state.second}
                      onChange={this.handleChange}
                      name='second'
                    />
                  </Form.Field>
                </Form>
              </Card.Header>
              <Card.Description>
                <Button onClick={this.handleSubmit} color='blue' fluid type='submit'>Submit</Button>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}
function mapStateToProps({currentUser , users}){
  const user = (currentUser !== null) ? users[currentUser] : null
  return{
    user : user ,
    isUserAuthenticated : currentUser!==null
  }
}
export default withRouter(connect(mapStateToProps)(NewQuestion))
