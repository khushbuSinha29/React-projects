import React from 'react'
import Item from './Item'
const Menus = ({menu}) => {
    console.log(menu);
  return (
    <div className='section-center' style={{display:'flex', flexWrap:'wrap'}}>
        {menu.map(item => {
            return <Item key={item.id} {...item} />
        })}
    </div>
  )
}

export default Menus