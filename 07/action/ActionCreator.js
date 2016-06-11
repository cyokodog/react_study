import Dispatcher from '../dispatcher/Dispatcher';

class ActionCreator {}

ActionCreator.updateTodo = (todo) => {
  Dispatcher.dispatch({
    type:  'UPDATE_TODO',
    todo: todo
  });
};

ActionCreator.addTodo = (todo) => {
  Dispatcher.dispatch({
    type:  'ADD_TODO',
    todo: todo
  });
};


ActionCreator.closeTodo = (index) => {
  Dispatcher.dispatch({
    type:  'CLOSE_TODO',
    index: index
  });
};

export default ActionCreator;
