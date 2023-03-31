import React from "react";

export default class Message extends React.Component {
  render() {
    const {
      text,
      onClick
    } = this.props;
    return (
      <div>
        <div>{text}</div>
        <button onClick={onClick}>UPDATE</button>
      </div>
    );
  }
}
