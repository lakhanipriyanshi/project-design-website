import React from 'react'
import './Style.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate=useNavigate();
        const clickBtn=()=>{
        localStorage.setItem("Username", "Charmi");
     
    }
  return (
    <div>
    
     <center><h1>Registration Form</h1></center> 
      <form>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" required/>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" required/>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" required/>
        </div>
        <button type="submit" onClick={clickBtn}>Register</button>
      <p>Already have an account? <Link to={'/login'} >Login</Link></p>
      
      </form>
   
    </div>
  )
}
