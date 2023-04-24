import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      style={{
        width: `${props.width}px`,
        height: `${props.width / 2}px`,
        margin: props.margin,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  margin: '5rem',
  width: 200,
  disabled: false,
};

export default Button;
