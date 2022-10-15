import React from "react";

const Button = ({ children, onClick = {}, error }) => {
  return (
    <div className=" relative ">
      <button
        className="w-full px-5 py-2 mt-5 rounded-lg border border-red-500 "
        onClick={onClick}
      >
        {children}
      </button>
      <p className=" absolute text-red-500 text-xs mt-1 left-1">{error}</p>
    </div>
  );
};

export default Button;
