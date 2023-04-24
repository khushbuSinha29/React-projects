import React, { useContext } from 'react'
import { AppProvider, AppContext, useGlobalContext } from './context'
import {FaBars} from 'react-icons/fa';

const Home = () => {
   const {openSidebar, openModal} =  useGlobalContext()
    // const { openSidebar, openModal } = useContext(AppContext);
   console.log(openSidebar)
  return (
    <main>
        <button onClick={openSidebar} className='sidebar-toggle'>
            <FaBars/>
        </button>
        <button onClick={openModal} className='btn'>Show Modal</button>
    </main>
  )
}

export default Home