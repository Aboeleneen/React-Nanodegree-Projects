import {_getUsers} from '../utils/_DATA.js'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SUBMIT_USER_ANSWER = "SUBMIT_USER_ANSWER"
export const SAVE_QUESTION_USER = "SAVE_QUESTION_USER"


function receiveUsers(users){
  return{
    type:RECEIVE_USERS,
    users,
  }
}


export function submitUserAnswer({ authedUser, qid, answer }){
  return {
    type : SUBMIT_USER_ANSWER ,
    currentUser : authedUser ,
    qid,
    answer,
  }
}
export function handleReceiveUsers(){
  return (dispatch)=>{
    return _getUsers()
      .then((users)=>{
        dispatch(receiveUsers(users))
      })
  }
}

export function saveQuestionUser(question){
  return {
    type: SAVE_QUESTION_USER ,
    question,
  }
}
