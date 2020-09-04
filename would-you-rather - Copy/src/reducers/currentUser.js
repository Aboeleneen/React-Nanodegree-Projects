import {SET_CURRENT_USER , LOGOUT} from '../actions/currentUser'


export default function CurrentUser(state=null , action){
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.id
      break
    case LOGOUT :
      return null
    default:
      return state
  }
}
