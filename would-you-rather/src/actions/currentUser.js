export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOGOUT = 'LOGOUT'


export function logout(){
  return {
    type: LOGOUT
  }
}
export function setCurrentUser(id){
  return {
    type: SET_CURRENT_USER ,
    id,
  }
}
