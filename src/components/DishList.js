import React, { useState } from "react";
import Button from "./Button";

const DishList = ({ activeItems,countCart }) => {

   
  return (
    <div className="p-4 ">
      {activeItems?.map((item) => (
        <div
          key={item.dish_id}
          className="bg-white rounded-lg shadow-md mb-4 p-6 flex items-center relative"
        >
          {/* <div className=" w-4 -py-18 h-10"> */}
          {item.dish_Type%2===0?<img className="absolute top-6 m-2 left-0 w-4 h-4"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg"
              alt="Indian vegetarian mark"
            />:<img className="absolute top-6 m-2 left-0 w-4 h-4"
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
            alt="Indian vegetarian mark"
          />}
            
            
          {/* </div> */}

          <div className="flex-grow ml-1">
            <h2 className="text-lg font-medium mb-2">{item.dish_name}</h2>
            <h4 className="text-sm font-medium mb-2">
              {item.dish_currency} {item.dish_price}
            </h4>
            <h4 className="text-xs font-medium mb-2">
              {item.dish_description}
            </h4>
            {item.dish_Availability ? (
              <>
                {" "}
                <Button countCart={countCart} />
              </>
            ) : (
              <h4 className="text-xs text-red-500 font-medium mb-2">
                Not Available
              </h4>
            )}
          </div>
          <div className="flex  ">
            <h4 className="text-sm md:py-8 font-medium mb-2">
              {item.dish_calories} calories
            </h4>
            <img
              className="ml-4 w-24 h-24 object-cover rounded"
              alt="text"
              src={item?.dish_image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DishList;
