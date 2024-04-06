import React, { useRef, useState } from 'react';

const PinInput = ({ value, setValue }) => {
  const inputRefs = useRef([]);

  const handleInput = (event, index) => {
    const eventValue = event.target.value;
    const inputValue = eventValue.charAt(eventValue.length - 1);
    const newValue = value.slice(0, index) + inputValue + value.slice(index + 1);

    if (inputValue && index <= 7 && value.length <= 8) {
      if (index < 7) {
        inputRefs.current[index + 1].focus();
      }
      setValue(newValue);
    } else {
      if (index > 0 && newValue.length === index) {
        inputRefs.current[index - 1].focus();
      }
      setValue(newValue);
    }
  };

  return (
    <div className="flex space-x-4">
      {[...Array(8)].map((_, index) => (
        <input
          key={index}
          className="w-10 h-10 text-center border border-gray-300 rounded focus:outline-none"
          type="text"
          value={value[index] || ''}
          onChange={(e) => handleInput(e, index)}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </div>
  );
};

export default PinInput;