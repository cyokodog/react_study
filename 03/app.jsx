import React from "react";
import Message from "./message.jsx";

export default class App extends React.Component{

  constructor() {
    super();

    this.state = {
      val: 'やっほー'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage(ev) {
    this.setState({ val: ev.target.value });
  }

  render (){
    let { val } = this.state;
    return (
      <div>
        <h1>stateでメッセージを表示する</h1>
        <input type="text" onChange={this.changeMessage} value={val}/>
        <Message text={val}/>
      </div>
    );
  }
}
