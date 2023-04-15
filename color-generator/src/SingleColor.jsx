import React from 'react'
import { toast } from 'react-toastify';

const SingleColor = ({index, color}) => {
  // console.log(color)
  const {hex, weight} = color;
  const saveToClicpboard = async () => {
    if(navigator.clipboard){
      try{
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copies to clipboard');
      }catch(error){
        toast.error('Failed to copy color to clipboard');
      }
    }else{
      toast.error('Clicpboard access not available')
    }
  }

  return (
   <article className={index > 10 ? 'color color-light' : 'color'} 
   style={{background:`#${hex}`}}
   onClick={saveToClicpboard}
   >
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>#{hex}</p>
   </article>
  )
}

export default SingleColor