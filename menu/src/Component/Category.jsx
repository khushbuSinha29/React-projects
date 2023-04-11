import React from 'react'

const Category = ({categories, filterItems}) => {
    // function HandleClick(e){
    //     console.log(e.target.textContent);
    //     // setCategories(e.target.textContent);

    // }
  return (
    <div className='btn-container '>
    {categories.map(category => {
        return <button className='btn' onClick={() => filterItems(category)}>{category}</button>
    })}
        {/* <button className='btn'>ALL</button>
        <button className='btn'>Breakfast</button>
        <button className='btn'>Lunch</button>
        <button className='btn'>Shakes</button> */}

    </div>
  )
}

export default Category