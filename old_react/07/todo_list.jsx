import React from "react";

export default class TodoList extends React.Component {
  render() {
    const {
      list,
      onClose
    } = this.props;

    const getOnClick = (idx) => {
      const _onClick = (ev) => {
        ev.preventDefault();
        onClose(idx);
      };
      return _onClick;
    }
    return (
      <ul>
        { list.map((d, idx) => {
          return <li key={idx}><input type="checkbox" onClick={getOnClick(idx)}/>{d}</li>
        }) }
      </ul>
    );
  }
}

TodoList.propTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.string),
  onClose: React.PropTypes.func.isRequired
};
