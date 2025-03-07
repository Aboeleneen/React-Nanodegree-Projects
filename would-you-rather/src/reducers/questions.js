import {RECEIVE_QUESTIONS , SUBMIT_QUESTION_ANSWER , SAVE_QUESTION} from '../actions/questions' ;


export default function Questions(state={} , action){
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state ,
        ...action.questions
      }
    case SUBMIT_QUESTION_ANSWER:
      return{
        ...state ,
        [action.qid] :{
          ...state[action.qid] ,
          [action.answer] : {
            ...state[action.qid][action.answer],
            votes : state[action.qid][action.answer].votes.concat([action.currentUser])
          }
        }
      }
    case SAVE_QUESTION :
      return {
        ...state ,
        [action.question.id]: action.question,
      }
    default:
      return state
  }
}
