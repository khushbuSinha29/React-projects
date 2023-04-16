import React, { useState } from 'react'
import SingleItem from './SingleItem';
import { toast } from 'react-toastify';

const Form = ({addItem}) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newItemName);
    if(!newItemName){
        toast.error('Please provide the value')
        return
    } //checking if the item has been given, if not given then return
    addItem(newItemName);
    setNewItemName('');
  }

  return (
     
        <form className='' onSubmit={handleSubmit}>
        <h4>ToDo List</h4>
        <div className='form-control'>

            <input className='form-input' 
            type='text' 
            value={newItemName} 
            onChange={(e) => setNewItemName(e.target.value)}></input>
            <button type='submit' className='btn'>Add Item</button>
        </div>
        </form>
           
   
  )
}

export default Form