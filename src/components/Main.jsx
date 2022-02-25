import React , {useState , useEffect } from 'react'

export default function Main() {
const [count , setCount ]= useState(0);
const [x , setX] =useState(1)
useEffect( ()=>{
  document.title= `You clicked ${count} times `
}  )
  return (
    <>
    <p> you clicked <spam> {count} </spam> times! </p>
    <input type="number" value= { x} onChange={(e)=>{setX ( parseInt (e.target.value))}}  />
    <button onClick={()=>{setCount(  x + count)}} > click me</button>
    </>
  )
}
