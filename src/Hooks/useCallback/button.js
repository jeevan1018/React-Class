import React from 'react';

export const ButtonComponent = ({ HandleButton }) => {
    console.log("button")
  return (
    <div>
      <button onClick={HandleButton}>Click</button>
    </div>
  );
};

