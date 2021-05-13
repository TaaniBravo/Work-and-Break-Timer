import React from "react";

const Button = ({ disabled, id, onClickFunction, Arrow }) => {
  return (
    <button disabled={disabled} id={id} onClick={onClickFunction}>
      <i class={`fas fa-arrow-${Arrow}`}></i>
    </button>
  );
};

export default Button;
