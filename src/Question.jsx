import React, { useState } from 'react';

const Question = ({id,title,info}) => {
  const [isOpen,setOpen]=useState(true)
  const handleInfo=()=>{
     setOpen(!isOpen)
     console.log(isOpen);
  }
  return <div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}><h4>{title}</h4><button style={{width:'50px' ,fontSize:'26px' ,borderRadius:'100%',border:'none',backgroundColor:'gray'}} onClick={handleInfo}>{isOpen?'-':'+'}</button></div>
      <p>{isOpen&&info}</p>
  </div>;
};

export default Question;
