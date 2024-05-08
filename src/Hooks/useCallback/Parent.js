import React, { useState,useCallback } from 'react';
import {ValueComponent} from './value';
import {ButtonComponent} from './button'; 


export const ParentCallback = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleCount = () => {
    console.log("button-1");
    setCount(count + 2);
  };

  const handleCount1 = useCallback(() => {
    console.log("button-2");
    setCount1(count1 + 3);
  },[count1]);

  return (
    <>
      <ValueComponent value={count} />
      <ButtonComponent HandleButton={handleCount}/>
      <ValueComponent value={count1} />
     
      <ButtonComponent HandleButton={handleCount1}/>
    </>
  );
};
