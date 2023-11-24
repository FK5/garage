"use client";
import React, { ChangeEvent } from "react";

interface CustomInputProps {
  label: string;
  value: string;
  type?: string;
  onInputChange: (newValue: string) => void;
  size?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  type = 'text',
  onInputChange,
  size = 'medium'
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  let fontSize = 14;
  let placeholderFontSize = 20;
  let lineHeight = 4
  if (size == 'small') {
    fontSize = 19
    placeholderFontSize = 16
    lineHeight = 2
  }

  return (
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        type={type}
        className={`peer
                    h-full
                    w-full
                    border-b
                    border-black
                    bg-transparent
                    pt-4
                    pb-1.5
                    font-sans
                    text-[${fontSize}px]
                    font-normal
                    text-black
                    outline
                    outline-0
                    transition-all
                    placeholder-shown:gray-500
                    focus:border-red-500
                    focus:outline-0
                    disabled:border-0
                    disabled:bg-gray-400`}
        placeholder=" "
        onChange={handleChange}
        value={value}
      />
      <label
        className={`after:content[' ']
                    pointer-events-none
                    absolute
                    left-0
                    -top-${lineHeight}
                    flex
                    h-full
                    w-full
                    select-none
                    text-[${fontSize}px]
                    font-normal
                    leading-tight
                    text-gray-500
                    transition-all
                    after:absolute
                    after:-bottom-${lineHeight}
                    after:block
                    after:w-full
                    after:scale-x-0
                    after:border-b-2
                    after:border-red-500
                    after:transition-transform
                    after:duration-300
                    peer-placeholder-shown:text-[${placeholderFontSize}px]
                    peer-placeholder-shown:leading-[5.25]
                    peer-placeholder-shown:text-blue-gray-500
                    peer-focus:text-[${fontSize}px]
                    peer-focus:leading-tight
                    peer-focus:text-red-500
                    peer-focus:after:scale-x-100
                    peer-focus:after:border-red-500
                    peer-disabled:text-transparent
                    peer-disabled:peer-placeholder-shown:text-blue-gray-500`}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
