import './button.scss';
import React, { PropTypes } from 'react';

const ButtonComponent = props =>
<div className="button"
  onClick={props.onClick}>
  {props.children}
</div>;

ButtonComponent.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default ButtonComponent;
