import {ADD_DECK , ADD_CARD , DELETE_DECK , LOAD_DECKS} from '../actions'

export default function decks(state={} , action){
  switch (action.type) {
    case LOAD_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state ,
        ...action.deck,
      }
    case ADD_CARD:
      return {
        ...state ,
        [action.deckId] : {...state[action.deckId] , questions : [...state[action.deckId].questions,action.card]}
      }
    case DELETE_DECK:
      return Object.keys(state).reduce((decks,deckId)=>{
        if(deckId !== action.deckId){
          decks[deckId]= state[deckId]
        }
          return decks
      },{})
    default:
      return state

  }
}
