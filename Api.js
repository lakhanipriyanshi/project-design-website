      import React, {useEffect, useState } from "react";
      import { useParams } from "react-router-dom";
      import axios from "axios";
      import { Link } from 'react-router-dom';
   
      // import Product from "./Product";
      import { useNavigate } from "react-router-dom";
      
      function Api() {
        const { id } = useParams();
        const [product, setProduct] = useState({});
        const [cartItems, setCartItems] = useState([]);
        const[selectimg,setimg]=useState("");
        const navigate = useNavigate();
      
        useEffect(() => {
          axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
            setProduct(response.data);
          });
        }, []);
        const addToCart = () => {
          axios.post(`  http://localhost:3032/products`, product).then((response) => {
            setCartItems((prevCartItems) => [...prevCartItems, response.data]);
            navigate(`/Addtocart`, { replace: true });
          });
        };
        const imgclick=(url)=>{
          setimg(url);
        }
        return (
      <>
           <div classNam0e="container" style={{margin:"20px"}}>
      <div className="col-xs-12 col-md-6 bootstrap snippets bootdeys"/>
        
        <div className="product-content product-wrap clearfix">
          <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                 <div className="image-small-list m-5 ">
          {product.images?.map((img)=>(
            <div className={`image-small-list-item  ${
              selectimg===img?"active":""
            }`}
            onClick={()=>imgclick(img)}
            >
             <img src={img} alt="" width={"100px"} height={"100px"} />
            </div>
          ))}
            </div>
                <div className="product-image"> 
                  <img src={selectimg || product.thumbnail} style={{width:"450px",height:"400px"}} className="img-responsive"/> 
                </div>
              </div>
      
              <div className="col-md-7 col-sm-12 col-xs-12" style={{backgroundColor:"lavender"}}>
              <div className="product-deatil" style={{backgroundColor:"lavender"}}>
                  <h5 className="name" style={{marginLeft:"80px"}}>
                  {product.title}
                  </h5>
                  <p className="price-container" style={{marginLeft:"80px",color:"darkslateblue"}}>
                    <span>${product.price}</span>
                  </p>
                  <span className="tag1"></span> 
              </div>
              <div className="description" style={{backgroundColor:"lavender",fontSize:"20px",marginRight:"120px"}}>
                <p>{product.description}</p>
              </div>
              <div className="description" style={{backgroundColor:"lavender",fontSize:"20px",marginRight:"120px"}}>
                <p>{product.discountPercentage}%OFF</p>
              </div>
              <div className="product-info smart-form" style={{backgroundColor:"lavender"}}>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6" style={{marginLeft:"70px",}}> 
                    <a href="javascript:void(0);"
                     className="btn" onClick={addToCart} style={{backgroundColor:"darkslateblue",color:"lavender"}}>Add to cart</a>
                  </div>
                   <div className="col-md-6 col-sm-6 col-xs-6" style={{marginLeft:"80px",margin:"20px"}}>
                  </div>
                </div>
              </div> 
            </div> 
          </div>
        </div>
        </div>
        </>
        
        );
      };
      
export  default Api;