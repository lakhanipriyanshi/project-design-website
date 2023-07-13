import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Header from './Header';
import { Link } from 'react-router-dom';

import './index.css';
import Home from './Home';
import Head from './Head';
import Register from './Register';
import Login  from './Login';
import Dashborad  from './Dashborad';
import Slider from './Slider';
import Api from './Api';
import Crud from './Crud';
import Addtocart from './Addtocart';
import Product from './Product';
import Todo from './Todo';
import Footer from './Footer';

 
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 
<Header/>
{/* <Slider/> */}
 {/* <Crud/> */}
        <Routes>
   <Route path='/Header' element={<Home/>}/>
 <Route path="/product" element={<Product/>}/>
 <Route path="/AddProduct" element={<Crud/>}/>
 <Route path="/Api/:id" element={<Api/>}/>
 <Route path="/Todo" element={<Todo/>}/>
 <Route path="/Addtocart" element={<Addtocart/>}/>
 <Route path="/Login" element={<Login/>}/>
 <Route path="/Register" element={<Register/>}/>
 <Route path="/Dashborad" element={<Dashborad/>}/>
 </Routes>
 
 <Footer/>
 
    
  <React.StrictMode>
    
    <Provider store={store}>
     <App/>
    </Provider>
    
  </React.StrictMode>
  
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
