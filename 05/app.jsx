import React from "react";
import Message from "./message.jsx";
import MessageStore from "./stores/MessageStore";
import { Container } from 'flux/utils';

class App extends React.Component{

  render (){
    const { message } = this.state;
    return (
      <div>
        <h1>一番簡単なFlux</h1>
        <Message text={message}/>
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
