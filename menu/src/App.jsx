import { useState } from "react";
import Category from "./Component/Category";
import Menus from "./Component/Menus";
import Title from "./Component/Title";
import menu from "./data";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all',...tempSet];
// console.log(tempItems);

//one liner
const allCategories = ['all', ...new Set(menu.map((item) => item.category))]
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    console.log(category);
    if(category==='all'){
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category)
   setMenuItems(newItems);
  }
  return (
    <main >
    <section className="menu">

        <Title text='Our Menu'/>
        <Category categories = {categories} filterItems={filterItems}/>
        <Menus menu = {menuItems}/>
      
    </section>
    </main>
  );
};
export default App;
