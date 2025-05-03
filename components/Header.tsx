"use client";


import { useState } from "react";
const Header = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="flex">
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};

export default Header;
