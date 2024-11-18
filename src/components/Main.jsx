import React from 'react'
import Button from './Button'

function Main() 
{
  return (
    <div>
        <main className='position-absolute top-[190px] lg:left-[165px] left-7 d-flex flex-col'>
            <div className='lg:my-4 my-1'>
                <h2 className='text-6xl font-bold text-start text-zinc-900'>Book an exclusive,</h2>
            </div>
            <div  className='lg:my-4 my-1'>
                <p className='text-3xl font-semibold text-start'>home for your personal travel</p>
            </div>
            <div  className='lg:my-4 my-1'>
                <p className='text-xl font-normal text-start'>Each property is hand-picked,<br/>
                personally visited and cannot be found elsewhere.</p>
            </div>
            <div  className='lg:my-4 my-1'>
                <Button BtnContent={["Explore Home"]} btnStyle="btn btn-danger text-center rounded-5 hover:shadow-lg"anchorStyle="text-white text-md text-decoration-none font-semibold"/>
            </div>
        </main>
    </div>
  )
}

export default Main