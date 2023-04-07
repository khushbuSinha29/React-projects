import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({title, info}) => {
    // console.log(title)
    const [showInfo, setShowInfo] = useState(false);
    function plusClickHandler(){
        setShowInfo(!showInfo);
    }
    function minusClickHandler(){
        setShowInfo(!showInfo);
    }
    const desc = showInfo?info : '';
  return (
    <div className='question' style={{position:'relative'}}>
    <header>
        <h5>{title}</h5>

    </header>
        <p>{desc}</p>
        <button className='question-btn' style={{position:'absolute', top:'10px', right:'10px'}} onClick={plusClickHandler}>
              {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus/>}
              {/* <AiOutlinePlusCircle /> */}
              {/* <AiOutlineMinus /> */}
        </button>
          {/* <button className='question-btn' style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={minusClickHandler}> */}
        {/* </button> */}
    </div>
  )
}
export default Question;
