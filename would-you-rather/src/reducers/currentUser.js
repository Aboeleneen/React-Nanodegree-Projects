import {SET_CURRENT_USER} from '../actions/currentUser'


export default function CurrentUser(state="johndoe" , action){
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.id
      break;
    default:
      return state
  }
}
