// components/CheckBox.js
import React from "react";

const CheckBox = ({ id, label, checked, onChange }) => (
  <div className={`flex items-center w-full my-2`}>
    <input
      type="checkbox"
      id={id}
      className={`appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-none`}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id} className={`ml-2 text-sm cursor-pointer`}>
      {label}
    </label>
  </div>
);

export default CheckBox;
