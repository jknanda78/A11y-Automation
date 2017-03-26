import React, { PropTypes } from "react";

require("./style.scss");

const InputField = React.createClass({
  propTypes: {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
  },
  render: function() {
    return(
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} />
      </div>
    );
  }
});

export default InputField;
