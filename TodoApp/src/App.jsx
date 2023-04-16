import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";


const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  // console.log(list);
  if(list){
    list = JSON.parse(localStorage.getItem('list'));
    console.log(list);
  }else{
    list = [];
  }
  return list
}
// one line for the above function 
const defaultList = JSON.parse(localStorage.getItem('list')||'[]');

const setLocalStorage = (items) =>{
  localStorage.setItem('list', JSON.stringify(items));
}

export const App = () => {
  
  const [items, setItems] = useState(getLocalStorage());
 
  // Adding a new item in the list
  const addItem = (itemName) => {
    const newItem = {
      name:itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
     setLocalStorage(newItems);
     toast.success('Item Added to the list')
  }

  const removeItem = (itemId) => {
    const newItems = items.filter(item => item.id !== itemId)
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item Deleted')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if(item.id === itemId){
        const newItem = {...item, completed : !item.completed};
        return newItem;
      }
      return item;
    })
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center"/>
      <Form addItem = {addItem}/>
      <Items items = {items} removeItem = {removeItem} editItem = {editItem}/>
    </section>
  );
};
export default App;