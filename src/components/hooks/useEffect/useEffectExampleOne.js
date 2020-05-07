import React, {useState, useEffect} from 'react';

function UseEffectExampleOne() {
  const [Count, setCount] = useState(0);
  const [Count1, setCount1] = useState(10);

  useEffect(()=>{
    console.log("hello useEffect caliing here....")
  },[Count]);

  const handleIncrement = () => {
    setCount(Count+1);
  };
  const handleIncrement1 = () => {
    setCount1(Count1+1);
  };
  return(
    <div>
      <span>Count - {Count} <button onClick={handleIncrement}>
      Add</button></span>
      <span>Number - {Count1} <button onClick={handleIncrement1}>
      Add1</button></span>
    </div>
  )

}

export default UseEffectExampleOne;
