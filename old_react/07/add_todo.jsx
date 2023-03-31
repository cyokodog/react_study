import React from "react";

export default class AddTodo extends React.Component {
  render() {
    const {
      onChange,
      onAdd,
      value
    } = this.props;

    const _onSubmit = (ev) => {
      ev.preventDefault();
      onAdd(value);
    };
    const _onChange = (ev) => {
      onChange(ev.target.value);
    };
    return (
      <form onSubmit={_onSubmit}>
        <input type="text" onChange={_onChange} value={value}/>
        <input type="submit" value="add"/>
      </form>
    );
  }
}

AddTodo.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onAdd: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired
};
