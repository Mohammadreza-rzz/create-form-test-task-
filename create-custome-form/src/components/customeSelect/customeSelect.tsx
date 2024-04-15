import React from "react";
import { selectOptionType } from "@/types";
interface Iprops {
  options: selectOptionType[];
}

const CustomeSelect: React.FC<Iprops> = ({ options, ...rest }) => {
  return (
    <select {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomeSelect;
