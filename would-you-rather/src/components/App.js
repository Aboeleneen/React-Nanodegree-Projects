
import React , {Component} from 'react'
import {handleReceiveUsers} from '../actions/users'
import {handleReceiveQuestions} from '../actions/questions'
import {connect} from 'react-redux'
import _ from 'lodash'
import Login from './Login'
import Question from './Question'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

class App extends Component{
  componentDidMount(){
    const {dispatch} = this.props
    dispatch(handleReceiveUsers())
    dispatch(handleReceiveQuestions())
  }
  render(){
    return (
      <div>
        {/*this.props.loading === true ? null : <Login />*/
          this.props.loading === true ? null : <LeaderBoard />}
     </div>
    )
  }
}

function mapStateToProps({users , questions}){
  const IDs = _.isEmpty(questions) ? [0] :Object.keys(questions)
  return{
    loading : _.isEmpty(questions) ,
    testQuestion: IDs[0]
  }
}
export default connect(mapStateToProps)(App)
