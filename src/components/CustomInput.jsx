import React from "react";
import { format } from "date-fns";

const CustomInput = ({ onChange, label, name, type = "text", error }) => {
  let date = format(new Date(), "yyyy-MM-dd");
  return (
    <div className=" mb-1 relative">
      <label className=" block  pl-1 mb-2 text-xs">{label}</label>
      <input
        className=" border b w-full outline-none  p-2 border-black"
        type={type}
        name={name}
        accept="image/png, image/gif, image/jpeg"
        onChange={onChange}
        max={date}
      />
      <p className=" absolute text-red-500 text-xs pl-1">{error}</p>
    </div>
  );
};

export default CustomInput;
