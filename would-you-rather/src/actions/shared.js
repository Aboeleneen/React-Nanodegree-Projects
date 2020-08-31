import {_saveQuestionAnswer , _saveQuestion} from '../utils/_DATA'
import {submitQuestionAnswer , saveQuestion} from './questions'
import {submitUserAnswer , saveQuestionUser} from './users'


export function handleSubmitAnswer({ authedUser, qid, answer }){
  return (dispatch)=>{
    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then(()=>{
        dispatch(submitQuestionAnswer({ authedUser, qid, answer }))
        dispatch(submitUserAnswer({ authedUser, qid, answer }))
      })
  }
}

export function handleSaveQuestion(question){
  return (dispatch)=>{
    return _saveQuestion(question)
      .then((formattedQuestion)=>{
        dispatch(saveQuestion(formattedQuestion))
        dispatch(saveQuestionUser(formattedQuestion))
      })
  }
}
