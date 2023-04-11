import React from 'react'

const Item = ({title, category, price, img, desc}) => {
  return (
    <div className='menu-item'>
        <img src={img} alt='item image' className='img'/>
        <div className='item-info'>
        <header>
        <h5>{title}</h5>

        <span className='item-price'>${price}</span>
        </header>

        <p className='item-text'>{desc}</p>
        </div>
    </div>
  )
}

export default Item