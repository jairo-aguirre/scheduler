import React from "react";
import "components/Button.scss";
import classNames from 'classnames';

export default function Button(props) {
  const buttonClass = classNames({
    'button': true,
    'button--confirm': props.confirm,
    'button--danger': props.danger
  });

  return (
    <button
      classNames={buttonClass}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}