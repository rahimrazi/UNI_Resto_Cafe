import React, { useEffect, useState } from "react";
import DishList from "./DishList";

function HotelPage({category,dish,countCart}) {
    
  const [activeCategoryId, setActiveCategoryId] = useState(category[0].id);
  const [selectedItems,setSelectedItems] = useState([])

  useEffect(
    ()=>{
        console.log(dish,"dish")
        let a=dish.filter(data=>{

            if(data.menu_category_id===activeCategoryId){
                return data.category_dishes
            }
        })
        setSelectedItems(a[0].category_dishes)
    }
  ,[activeCategoryId])

  const handleClickCategory = (categoryId) => {
    setActiveCategoryId(categoryId);
  };



  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-white py-0 flex items-center justify-center flex-shrink-0 border-b-2 border-gray-200 ">
        {category.map((category) => (
          <button
            key={category.id}
            className={`flex-grow text-center py-2 font-medium rounded-none mr-4 transition-colors border-b-2 ${
              category.id === activeCategoryId
                ? "border-red-500 text-red-500"
                : "border-transparent text-gray-700 hover:text-red-500"
            }`}
            onClick={() => handleClickCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
            <DishList activeItems={selectedItems} countCart={countCart} />
            
    </div>
  );
}

export default HotelPage;
