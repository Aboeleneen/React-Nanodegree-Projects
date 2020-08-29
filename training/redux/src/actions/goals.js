import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'



export function addGoal (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}
export function removeGoal (id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}
export function handleAddGoal(name , fn ){
  return (dispatch)=>{
    return API.saveGoal(name)
      .then((goal)=>{
          dispatch(addGoal(goal))
          fn()
      })
      .catch(()=>{
        alert('error :) try again');
      })

  }
}
