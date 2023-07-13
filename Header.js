import React,{useState} from 'react'
import logo from './img/logo.jpg';
import {Link} from "react-router-dom"
// import {CounterContext} from './App'
// import { CounterContext } from "./App";

export default function Header() {
  // const [search, setSearch] = useState([]);

  //  const searchb = useContext(CounterContext);
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img style={{width:'90px',height:'70px'}} src={logo} alt="logo"/> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/Header'} className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to={'/product'} className="nav-link active">Product</Link>
          
        </li>
        <li className="nav-item">
        <Link to={'/AddProduct'} className="nav-link active">AddProduct</Link>
         
        </li>
        <li className="nav-item">
        <Link to={'/Todo'} className="nav-link active">Todo</Link>
         
        </li>
        <li className="nav-item">
        <Link to={'/Login'} className="nav-link active">Login</Link>
         
        </li>
        <li className="nav-item">
        <Link to={'/Register'} className="nav-link active">Register</Link>
         
        </li>
        <li className="nav-item">
        <Link to={'/Dashborad'} className="nav-link active">Dashborad</Link>
         
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
clothes
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Men</a></li>
            <li><a className="dropdown-item" href="#">Women</a></li>
            <li><a className="dropdown-item" href="#">Chlid</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>
  <div className="d-flex align-items-left" style={{margin:"20px"}}>
    <div className="input-group rounded">
    {/* <Link to="/search">
              <input
                onKeyUp={(event) => {
                  searchb(event.target.value);
                }}
                classNameName="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
</Link> */}
                 
             

</div>
</div>
   </nav>
        
    </div>
  )
}

