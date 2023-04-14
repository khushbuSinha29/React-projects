import React, { useEffect } from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Cards = ({list, index, setIndex}) => {
    console.log(list);
    // const {image, name, quote, title} = list[index];
    function handleLeftClick(){
        if(index-1<0){
            setIndex(list.length-1)
        }else{

            setIndex(index-1);
        }
    }
    function handleRightClick(){
        if(index+1 > list.length-1){
            setIndex(0);
        }else{

            setIndex(index+1);
        }
       }

    useEffect(() => {
        let sliderId = setInterval(() => handleRightClick(), 2000)
        return () => {
            clearInterval(sliderId);
        }
    },[index])
  return (
      <div className='slider-container'>
      {/* <div className='slide'> */}
      {list.map((person, personIndex) => {
          const {id, image, name, quote, title } = person;
          return(
            <article className='slide' key={id} 
            style={{transform:`translateX(${100*(personIndex - index)}%)`, 
            opacity:personIndex === index ? 1 : 0,
                visibility: personIndex === index ? 'visible' : 'hidden'
            }}>
                  <img src={image} className='person-img' />
                  <h5 className='name'>{name}</h5>
                  <p className='title'>{title}</p>
                  <p className='text'>{quote}</p>
                
            </article>
          )

      })}
          <button className='' onClick={handleLeftClick}>
              <AiOutlineLeft className='icon prev' />
          </button>
          <button onClick={handleRightClick} className=''>
              <AiOutlineRight className='icon next' />
          </button>
              
      </div>
   
  )
}

export default Cards