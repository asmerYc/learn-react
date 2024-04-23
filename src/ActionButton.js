import React, { useRef } from "react";

function ActionButton() {
  const buttonRef = useRef(null);

  function handleClick() {
    console.log(buttonRef.current);
  }

  return (
    <button onClick={handleClick} ref={buttonRef}>
      Click me
    </button>
  );
};
export default ActionButton;