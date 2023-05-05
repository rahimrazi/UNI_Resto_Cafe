import React, { useState } from "react";

const Button = ({countCart}) => {
  const [qty, setQty] = useState(0);
    
  const incQty = (id) => {
    setQty((prevState) => prevState + 1);
    countCart((prevState) => prevState + 1)
  };

  const decQty = () => {
    if(qty===0) return
    setQty((prevState) => prevState - 1);
    countCart((prevState) => prevState - 1)
  };
  return (
    <>
      <button
        className="bg-green-600 text-white w-6 rounded-s-lg py-0.5"
        onClick={() => {
          decQty();
        }}
      >
        -
      </button>
      <button className="bg-green-600 text-white py-0.5 w-8 ">{qty}</button>
      <button
        className="bg-green-600 py-0.5 text-white w-6 rounded-r-lg "
        onClick={() => {
          incQty();
        }}
      >
        +
      </button>
    </>
  );
};

export default Button;
