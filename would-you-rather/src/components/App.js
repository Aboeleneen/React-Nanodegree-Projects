
import React , {Component , Fragment} from 'react'
import {handleReceiveUsers} from '../actions/users'
import {handleReceiveQuestions} from '../actions/questions'
import {connect} from 'react-redux'
import _ from 'lodash'
import Login from './Login'
import Question from './Question'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Navbar from './Navbar'
import {Switch , Route , Redirect , } from 'react-router-dom'
import {Label, Menu, Tab , Grid} from 'semantic-ui-react'
class App extends Component{
  componentDidMount(){
    const {dispatch} = this.props
    dispatch(handleReceiveUsers())
    dispatch(handleReceiveQuestions())
  }
  render(){
    const panes = [
      {
        menuItem : {key:'UnAnswered Questions' , content: 'UnAnswered Questions'},
        render : ()=> (
          <Tab.Pane>
            <ul>
              {this.props.unanswered.map((qid)=>(
                <Question id={qid} />
              ))}
            </ul>
          </Tab.Pane>
        )
      },
      {
        menuItem : {key:'Answered Questions' , content: 'Answered Questions'} ,
        render : ()=> (
          <Tab.Pane>
            <ul>
              {this.props.answered.map((qid)=>(
                <Question id={qid} />
              ))}
            </ul>
          </Tab.Pane>
        )
      },

    ]
    return (
      <div>
        { this.props.loading === true
          ? null
          : <Fragment>
              {this.props.isUserAuthenticated ? <Redirect to='/' /> : <Redirect to='/login'/>}
              {this.props.isUserAuthenticated ? <Navbar /> : null}
              <Route  path='/' exact render={()=>(
                  <Grid centered columns={3}>
                    <Grid.Column>
                      <Tab menu={{ pointing: true }} panes={panes} />
                    </Grid.Column>
                  </Grid>
              )} />
              <Route  path='/login' exact component={Login} />
              <Route  path='/leaderBoard' exact component={LeaderBoard} />
              <Route  path='/add' exact component={NewQuestion} />
              <Route  path='/question/:id' render={(props)=>(
                <QuestionPage id={props.match.params.id}/>
              )}/>
            </Fragment>
        }
     </div>
    )
  }
}

function mapStateToProps({users , questions , currentUser}){
  const allQuestions = _.isEmpty(questions) ? [] : Object.keys(questions)
  const answered = currentUser === null ? [] : Object.keys(users[currentUser].answers)
  const unanswered = _.isEmpty(questions) ? [] : allQuestions.filter((qid)=> !answered.includes(qid))

  return{
    loading : _.isEmpty(questions) ,
    isUserAuthenticated :currentUser !== null ,
    answered,
    unanswered,
  }
}
export default connect(mapStateToProps)(App)
