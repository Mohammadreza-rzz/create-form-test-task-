import React from "react";

interface Iprops {
  label: string;
}
export type Ref = HTMLInputElement;

const CustomInput: React.FC<Iprops> = React.forwardRef<Ref, Iprops>(
  ({ label, ...rest }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} {...rest} />
      </div>
    );
  }
);

export default CustomInput;
