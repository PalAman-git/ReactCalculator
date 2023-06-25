import { useState,useEffect } from "react"; 
const Key = ({ target,value,handleOnClick}) => {

  const[color,setColor] = useState('white');

  //for handling color
  useEffect(()=>{
    if(value === 'AC' || value ==='+/-' || value === '%')
    {
      setColor('test')
    }
    else if(value === '/' || value === 'x' || value === '-' || value === '+' || value === '=')
    {
      setColor('orange-700');
    }
    else
    {
      setColor('white');
    }

  },[value]);



  return (
    <button name={ target } className={`flex justify-center mx-[1px] my-1 items-center cursor-pointer bg-key rounded-[5px] text-${ color }`} onClick={ handleOnClick }> { value } </button>
  )
}
export default Key