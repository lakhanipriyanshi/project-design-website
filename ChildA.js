import React, {useContext,useState } from 'react'
import {search} from './App'

export default function ChildA() {
  const [count, setCount] = useState(0);
  
 
    const frtSearch = useContext(search)
  return (

    <div>
    
    
        <input type='text' onKeyUp={(event)=>{frtSearch(event.target.value)}}/>
        </div>
  )
}