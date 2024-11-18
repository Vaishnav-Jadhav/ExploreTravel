import React from 'react'
import { useState } from 'react'
import Button from './Button';

function NavBar(props) 
{
  const[headerBtn]=useState(["Home","About","Tour Package","Contact"]);

  return (
    <header className='w-full d-flex justify-center flex-wrap position-sticky z-[999]'>
      <div className='lg:w-5/6 w-full d-flex justify-between px-10'>
         <div className='text-center'>
             <h2 className='tracking-wide font-bold '>ExploreTravel.</h2>
         </div>
         <div className='text-center hidden lg:flex justify-around'>
             <div>
                <Button BtnContent={headerBtn} btnStyle="btn btn-outline-light mx-2 font-semibold border-0 hover:shadow-inner" anchorStyle="text-dark text-zinc-900 text-md text-decoration-none"/>
             </div>
             <div>
              <Button  BtnContent={["Explore Places"]} btnStyle="btn btn-danger text-center ms-[30px] rounded-5 hover:shadow-inner" anchorStyle="text-white text-md text-decoration-none font-semibold"/>
             </div>
         </div>
         <div className='flex lg:hidden '>
            <button className='btn btn-outline-light text-black text-[30px] font-bold'><span className='bi bi-list'></span></button>
         </div>
      </div>
    </header>
  )
}

export default NavBar