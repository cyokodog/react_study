import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';

class MessageStore extends ReduceStore {
  getInitialState() {
    return { message: 'おす、おらFlux' };
  }

  reduce(state, action) {
    switch (action.type) {
    case 'UPDATE_MESSAGE':
      return Object.assign({}, state, {
        message: action.message
      });

    default:
      return state;
    }
  }

  getMessage() {
    return this.getState().message;
  }

}
export default (new MessageStore(Dispatcher));
