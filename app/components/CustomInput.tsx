import React from 'react';
interface CustomInputProps {
  type: string;
  name: string;
  classname?: string;
  placeholder?: string;
  defaultValue?: string | number | string[] | undefined;
}
const CustomInput = ({ type, name, classname = 'p-2 border w-full border-gray-700 mb-4 bg-gray-800 text-white rounded', placeholder, defaultValue }: CustomInputProps) => {
  return (
    <>
      <input type={type} name={name} defaultValue={defaultValue} className={classname} placeholder={placeholder} />
    </>
  );
};
export default CustomInput;
