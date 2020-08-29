import React from 'react'
import {connect} from 'react-redux'
import List from './List'
import{
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  handleDeleteTodo
} from '../actions/todos'

class Todos extends React.Component {
  addItem = (e)=>{
    e.preventDefault();

    return API.saveTodo(this.input.value)
      .then((todo)=>{
        this.props.store.dispatch(addTodo(todo))
          this.input.value = '' ;
      })
      .catch(()=>{
          alert('an error occured :( try again')
      })


  }

  removeItem = (item)=>{
    this.props.store.dispatch(handleDeleteTodo(item))
  }

  toggleItem = (item)=>{
    this.props.store.dispatch(toggleTodo(item.id));
    return API.saveTodoToggle(item.id)
    .catch(()=>{
      this.props.store.dispatch(toggleTodo(item.id));
      alert('an error occured :( try again')
    })
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type='text'
          placeholder='Add Todo'
          ref = {(input)=> this.input = input}
        />
        <button
          onClick = {this.addItem}
        >Add Todo</button>
        <List
          items={this.props.todos}
          remove = {this.removeItem}
          toggle = {this.toggleItem}
        />
      </div>
    )
  }
}
