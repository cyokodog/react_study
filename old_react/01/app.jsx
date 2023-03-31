import React from "react";
import Message from "./message.jsx";

export default class App extends React.Component{
  render (){
    return (
      <div>
        <h1>簡単なサンプル</h1>
        <Message />
      </div>
    );
  }
}
