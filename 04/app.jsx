import React from "react";
import AddTodo from "./add_todo.jsx";
import TodoList from "./todo_list.jsx";

export default class App extends React.Component{

  constructor() {
    super();

    this.state = {
      todo: '働く',
      todoList: ['寝る','起きる','休む','食べる']
    };
    this._onChange = this._onChange.bind(this);
    this._onAdd = this._onAdd.bind(this);
    this._onClose = this._onClose.bind(this);
  }

  _onChange(ev) {
    this.setState({ todo: ev.target.value });
  }

  _onAdd(ev) {
    ev.preventDefault();
    const todo = this.state.todo;
    if( !todo ) return;
    const todoList = this.state.todoList.slice();
    todoList.push(todo);
    this.setState({ todoList: todoList, todo:''});
  }

  _onClose(ev, idx){
    ev.preventDefault();
    const todoList = this.state.todoList.filter((item, _idx)=>{
      return _idx !== idx;
    });
    this.setState({ todoList: todoList});
  }

  render (){
    let {todo, todoList} = this.state;
    return (
      <div>
        <h1>React TODO</h1>
        <AddTodo onChange={this._onChange} onAdd={this._onAdd} value={todo}/>
        <TodoList list={todoList} onClose={this._onClose}/>
      </div>
    );
  }
}
