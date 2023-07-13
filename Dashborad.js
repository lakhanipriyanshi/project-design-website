import React from 'react'
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';

import Login from './Login';
export default function Dashborad() {
  const navigate = useNavigate();
  const Logout=()=>{
    localStorage.removeItem('Email', 'priya@gmail.com');
    localStorage.removeItem('password', '123');
    navigate('/Login', { replace: true });
}
  return (
    <div>
         <header>
    <h1>Shopping Website Dashboard</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="#" class="active">Dashboard</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Orders</a></li>
      <li><a href="#">Customers</a></li>
    </ul>
  </nav>
  
  <section class="dashboard">
    <h2>Dashboard</h2>
    <div class="stats">
      <div class="stat">
        <h3>Products</h3>
        <p>100</p>
      </div>
      <div class="stat">
        <h3>Orders</h3>
        <p>50</p>
      </div>
      <div class="stat">
        <h3>Customers</h3>
        <p>200</p>
      </div>
    </div>
  </section>
 <center> <button className="btn btn--form" type="submit"onClick={Logout}>
            Logout
          </button></center>
    </div>
  )
}

   
