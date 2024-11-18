import React from 'react'

function Section(props) 
{
  return(
    <>
     <section className='w-full p-3'>
        <div className='sectionTitle text-center mx-auto'>
            <h2 className=' font-bold mb-0'>Most famous places</h2>
            <p className='mt-0'>Recommended</p>
        </div>
        <div className=''>
            <div className='bg-light p-0 lg:p-5 d-flex flex-wrap border-0 border-none justify-center card-section mx-auto w-[80%] overflow-auto'>
                {
                  props.data.map((value,index)=>
                  <div key={index} className='card w-[100%] lg:w-[300px] text-center p-3 border-0 m-2 lg:m-8 shadow-md'>
                    <div className="card-header bg-white p-0">
                      <img src={value.img} alt="cityImg" className='w-100 m-0 rounded-md'/>
                    </div>
                    <div>
                      <h2 className='card-title'>{value.title}</h2>
                      <p className='card-text'>{value.discription}</p>
                    </div>
                  </div>)
                }
            </div>
        </div>
        <div className='text-center my-4'>
           <a href="#" className='text-green-500 text-decoration-none text-md hover:text-red-900'>see more<span className='bi bi-chevron-right text-sm'></span> </a>
           <hr />
        </div>
     </section>
    </>
  )
}

export default Section