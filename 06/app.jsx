import React from "react";
import { Container } from 'flux/utils';
import ActionCreator from "./action/ActionCreator";
import Message from "./message.jsx";
import MessageStore from "./stores/MessageStore";

class App extends React.Component{
  render (){
    const { message } = this.state;
    return (
      <div>
        <h1>一番簡単なFlux</h1>
        <Message text={message} onClick={ActionCreator.updateMessage}/>
      </div>
    );
  }
}

App.getStores = () => {
  return [ MessageStore ];
};

App.calculateState = (_prevState) => {
  return {
    message: MessageStore.getMessage()
  };
};

const app = Container.create(App);

export default app;
