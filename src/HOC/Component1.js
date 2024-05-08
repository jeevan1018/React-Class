import React from 'react';
import Component2 from './Component2';

const Component1 = ({ Component2 }) => {
  if (true) {
    return <Component2 />;
  }
  
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};

export default Component1;
