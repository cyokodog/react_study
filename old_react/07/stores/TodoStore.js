import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';

class TodoStore extends ReduceStore {
  getInitialState() {
    return {
      todo: 'おす、おらFlux',
      todoList: ['寝る','起きる','休む','食べる']
    };
  }

  reduce(state, action) {
    switch (action.type) {
    case 'UPDATE_TODO':
      return Object.assign({}, state, {
        todo: action.todo
      });

    case 'ADD_TODO':
      if( !action.todo ) return state;

      const list = state.todoList.slice();
      list.push(action.todo);
      return Object.assign({}, state, {
        todo: '',
        todoList: list
      });

    case 'CLOSE_TODO':
      state.todoList = state.todoList.filter((item, index)=>{
        return index !== action.index;
      });
      return Object.assign({}, state);

    default:
      return state;
    }
  }

  getTodo() {
    return this.getState().todo;
  }

  getTodoList() {
    return this.getState().todoList;
  }

}
export default (new TodoStore(Dispatcher));
