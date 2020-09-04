import {RECEIVE_USERS , SUBMIT_USER_ANSWER , SAVE_QUESTION_USER } from '../actions/users' ;

export default function Users(state={} , action){
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
      break;
    case SUBMIT_USER_ANSWER:
      return{
        ...state ,
        [action.currentUser]:{
          ...state[action.currentUser] ,
          answers :{
            ...state[action.currentUser].answers ,
            [action.qid] : action.answer
          }
        }
      }
    case SAVE_QUESTION_USER:
      return{
        ...state ,
        [action.question.author]:{
          ...state[action.question.author] ,
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    default:
      return state
  }
}
