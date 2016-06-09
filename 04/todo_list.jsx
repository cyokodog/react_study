import React from "react";

export default class TodoList extends React.Component {
  render() {
    const {
      list,
      onClose
    } = this.props;
    return (
      <ul>
        { list.map((d, idx) => {
          return <li key={idx}><input type="checkbox" onClick={(ev)=>{onClose(ev, idx)}}/>{d}</li>
        }) }
      </ul>
    );
  }
}

TodoList.propTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.string),
  onClose: React.PropTypes.func.isRequired
};
