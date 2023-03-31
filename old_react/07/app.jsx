import React from "react";
import { Container } from 'flux/utils';
import AddTodo from "./add_todo.jsx";
import TodoList from "./todo_list.jsx";
import TodoStore from "./stores/TodoStore";
import ActionCreator from "./action/ActionCreator";

class App extends React.Component{
  render (){
    const {
      todo,
      todoList
    } = this.state;
    return (
      <div>
        <h1>Flux TODO</h1>
        <AddTodo onChange={ActionCreator.updateTodo} onAdd={ActionCreator.addTodo} value={todo}/>
        <TodoList list={todoList} onClose={ActionCreator.closeTodo}/>
      </div>
    );
  }
}

App.getStores = () => {
  return [ TodoStore ];
};

App.calculateState = (_prevState) => {
  return {
    todo: TodoStore.getTodo(),
    todoList: TodoStore.getTodoList()
  };
};

const app = Container.create(App);

export default app;
