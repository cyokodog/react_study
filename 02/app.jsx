import React from "react";
import Message from "./message.jsx";

export default class App extends React.Component{
  render (){
    return (
      <div>
        <h1>propsでメッセージを表示する</h1>
        <Message text="おまえはもう死んでいる"/>
      </div>
    );
  }
}
