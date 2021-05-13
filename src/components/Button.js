import React from "react";

const Button = ({ id, onClickFunction, Arrow }) => {
  return (
    <button id={id} onClick={onClickFunction}>
      <i class={`fas fa-arrow-${Arrow}`}></i>
    </button>
  );
};

export default Button;
