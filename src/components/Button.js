import React from "react";

const Button = ({ onClickFunction, Arrow }) => {
  return (
    <button onClick={onClickFunction}>
      <i class={`fas fa-arrow-${Arrow}`}></i>
    </button>
  );
};

export default Button;
