import React from 'react'

function Button(props) 
{
  return (
    <>
      {
        props.BtnContent.map((value,index)=>
        <button key={index} className={props.btnStyle}><a href="#" className={props.anchorStyle}>{value}</a></button>)
      }
    </>
  )
}

export default Button