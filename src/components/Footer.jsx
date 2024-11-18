import React, { useState } from 'react'

function Footer() 
{

  const[footerListsecCol]=useState(["Tour Package","Personolized Offers","Special Deals","Summer holidays"])
  const[footerListThrdCol]=useState(["About US","FAQ","Terms And Conditions","Contact"])
  return (
    <div className='bg-zinc-900 w-full h-[370px] text-white px-[10%] py-12 flex justify-center '>
          <div className='m-auto text-center lg:flex sm:peer-even:block flex-wrap gap-12'>
            <div>
              <h3 className='font-bold tracking-tighter'>ExploreTravel.</h3>
            </div>
            <div> 
                <ul>
                  {
                    footerListsecCol.map((value,index)=>
                    <li key={index}>{value}</li>)
                  }
                </ul>
            </div>
            <div>
              <ul>
                {
                  footerListThrdCol.map(value=>
                    <li key={value}>{value}</li>
                  )
                }
              </ul>
            </div>
            <div>
              <div className='btn btn-group'>
                <button className='btn btn-outline-dark text-light'><span className='bi bi-instagram text-2xl'></span></button>
                <button className='btn btn-outline-dark text-light'><span className='bi bi-twitter-x text-2xl'></span></button>
                <button className='btn btn-outline-dark text-light'><span className='bi bi-facebook text-2xl'></span></button>
              </div>
            </div>
            
          </div>
    </div>
  )
}

export default Footer