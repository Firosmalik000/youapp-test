import React from 'react';
interface CustomInputProps {
  type: string;
  name: string;
  classname?: string;
  placeholder?: string;
}
const CustomInput = ({ type, name, classname = 'p-2 border w-full border-gray-700 mb-4 bg-gray-800 text-white rounded', placeholder }: CustomInputProps) => {
  return (
    <>
      <input type={type} name={name} className={classname} placeholder={placeholder} />
    </>
  );
};
export default CustomInput;
