import React, { useState } from "react";

const FormInput = (props) => {
  const { label, value, handleChange, errorMsg, ...fields } = props;

  return (
    <div className="md:w-[30%] flex flex-col justify-center">
      <label className="font-semibold"> {label} </label>
      <input
        {...fields}
        value={value}
        onChange={handleChange}
        className="border-2 rounded py-2 w-max px-3 my-1 peer "
      />
      <span
        className={`text-xs text-red-500 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block`}
      >
        {errorMsg}
      </span>
    </div>
  );
};
export default FormInput;
