import React from "react";

function Button({ text }) {
  return (
    <button type="submit" className="btn">
      {text}
    </button>
  );
}

export default Button;
