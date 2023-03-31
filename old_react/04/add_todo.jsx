import React from "react";

export default class AddTodo extends React.Component {
  render() {
    const {
      onChange,
      onAdd,
      value
    } = this.props;
    return (
      <form onSubmit={onAdd}>
        <input type="text" onChange={onChange} value={value}/>
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
