import React, {PropTypes} from "react";

require("./style.scss");

const Button = function (props) {
  return (
    <div className="buttons">
      <input type={props.type} name={props.name} className={props.isPrimary?"primary":""} value={props.value} onClick={props.onClick}/>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
