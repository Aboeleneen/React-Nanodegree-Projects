import {_getQuestions} from '../utils/_DATA'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_QUESTION_ANSWER = 'SUBMIT_QUESTION_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'

function receiveQuestions(questions){
  return{
    type:RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleReceiveQuestions(){
  return (dispatch)=>{
    return _getQuestions()
      .then((questions)=>{
        dispatch(receiveQuestions(questions))
      })
  }
}

export function submitQuestionAnswer({ authedUser, qid, answer }){
  return {
    type : SUBMIT_QUESTION_ANSWER ,
    currentUser : authedUser ,
    qid,
    answer,
  }
}

export function saveQuestion(question){
  return {
    type : SAVE_QUESTION ,
    question,
  }
}
