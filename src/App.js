import React from 'react'
import LandingPage from './components/LandingPage'
import Section from './components/Section'
import { useState } from 'react'
import Footer from './components/Footer'

function App() 
{

  const[cardData]=useState([
    {
      title:"Tokyo",
      img:"/assets/japan.jpeg",
      discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus laudantium odio perspiciatis quas nulla temporibus, est eveniet vel ut, ratione quod saepe? Repellat exercitationem perspiciatis officia sed laudantium aut laborum commodi?"
    },
    {
      title:"Amsterdam",
      img:"/assets/amsterdam.jpeg",
      discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus laudantium odio perspiciatis quas nulla temporibus, est eveniet vel ut, ratione quod saepe? Repellat exercitationem perspiciatis officia sed laudantium aut laborum commodi?"
    },
    {
      title:"Barcelona",
      img:"/assets/barcelona.jpeg",
      discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus laudantium odio perspiciatis quas nulla temporibus, est eveniet vel ut, ratione quod saepe? Repellat exercitationem perspiciatis officia sed laudantium aut laborum commodi?"
    },
    {
      title:"London",
      img:"/assets/barcelona.jpeg",
      discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus laudantium odio perspiciatis quas nulla temporibus, est eveniet vel ut, ratione quod saepe? Repellat exercitationem perspiciatis officia sed laudantium aut laborum commodi?"
    },
    {
      title:"Paris",
      img:"/assets/paris.jpeg",
      discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus laudantium odio perspiciatis quas nulla temporibus, est eveniet vel ut, ratione quod saepe? Repellat exercitationem perspiciatis officia sed laudantium aut laborum commodi?"
    },
    {
      title:"Rome",
      img:"/assets/rome.jpeg",
      discription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus laudantium odio perspiciatis quas nulla temporibus, est eveniet vel ut, ratione quod saepe? Repellat exercitationem perspiciatis officia sed laudantium aut laborum commodi?"
    }
   
  ])

   return(
    <div>
      <LandingPage/>
      <Section data={cardData}/>
      <Footer/>
    </div>
   )
}

export default App