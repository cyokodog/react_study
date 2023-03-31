import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';

class MessageStore extends ReduceStore {
  getInitialState() {
    return { message: 'おす、おらFlux' };
  }

  getMessage() {
    return this.getState().message;
  }

}
export default (new MessageStore(Dispatcher));
