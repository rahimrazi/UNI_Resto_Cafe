import { useEffect, useState } from "react";
import DishList from "./components/DishList";
import HotelPage from "./components/HotelPage";
import Navbar from "./components/Navbar";

function App() {
  const [cartCount, setCartCount] = useState(0); 
  const [restaurant, setRestaurant] = useState([]);
  const [dish, setDish] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
      .then((apiData) => apiData.json())
      .then((data) => {
        setRestaurant(data[0].restaurant_name);
        setDish(data[0].table_menu_list);

        setCategory(
          data[0].table_menu_list.map((menu_list) => {
            return {
              id: menu_list.menu_category_id,
              name: menu_list.menu_category,
            };
          })
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar cartCount={cartCount} restaurantName={restaurant} />
      {category && (
        <HotelPage category={category} dish={dish} countCart={setCartCount} />
      )}

    
    </div>
  );
}

export default App;
