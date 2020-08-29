import API from 'goals-todos-api'

export const RECEIVE_DATA = 'RECEIVE_DATA'



export function receiveDataAction(todos,goals){
  return{
    type : RECEIVE_DATA ,
    goals,
    todos,
  }
}
