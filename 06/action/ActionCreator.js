import Dispatcher from '../dispatcher/Dispatcher';

class ActionCreator {}

ActionCreator.updateMessage = () => {
  const d = new Date();
  const message = 'やっほー、' + d.getHours() + '時 ' + d.getMinutes() + '分 ' + d.getSeconds() + '秒 です。';
  Dispatcher.dispatch({
    type:  'UPDATE_MESSAGE',
    message: message
  });
};

export default ActionCreator;
