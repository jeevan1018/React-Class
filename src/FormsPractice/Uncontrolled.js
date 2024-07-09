import React, { useRef } from 'react';

const Uncontrolled = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected typo
const Char=inputRef.current.value;
console.log(Char)
    console.log('Form submitted'); // Check if the function is called
    console.log('Input value:', inputRef.current.value); // Log the input value
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={inputRef} />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Uncontrolled;
