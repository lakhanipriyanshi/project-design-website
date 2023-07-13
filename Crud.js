import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Api() {
  const [product, setProduct] = useState([])
  const title = useRef('')
  const idd = useRef('')
  const img = useRef('')
  const desc = useRef('')

  useEffect(() => {
    GetApi()
  }, [])
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3030/products/${id}`).then((res) => {
      GetApi()
    })
  }

  const GetApi = () => {
    axios.get('http://localhost:3030/products').then((res) => {
      setProduct(res.data)
    })
  }

  const AddProduct = () => {
    if (idd.current.value) {
      console.log(idd.current.value)
      axios.put(`http://localhost:3030/products/${idd.current.value}`, {
        title: title.current.value,
        description: desc.current.value,
        img:img.current.value,
      })
    } else {
      axios.post('http://localhost:3030/products', {
        title: title.current.value,
        description: desc.current.value,
        img:img.current.value,

       
      })
    }

    title.current.value = ''
    desc.current.value = ''
    img.current.value= ''
    idd.current.value = ''
    GetApi()
  }

  const editProduct = (id) => {
    axios.get(` http://localhost:3030/products/${id}`).then((res) => {
      title.current.value = res.data.title
      desc.current.value = res.data.description
      img.current.value = res.data.Image
      idd.current.value = res.data.id
    })
  }

  return (
    <>
      <input ref={title} type="text" id="title" />
      <br></br>
      <input ref={desc} type="text" id="description" />
      <input type="hidden" ref={idd} />
      <input ref={img} type="text" id="img" />
   
      <button
        onClick={() => {
          AddProduct()
        }}
      >
        Add / edit Product
      </button>
      <div className="d-flex  flex-wrap">
        {product.map((prd) => {
          return (
            <div className="card" style={{width:"18rem",backgroundColor:"Lightblue",margin:"38px" }}>
                <img
              width={"100px"}
              height={"100px"}
              className="card-img-top"
              src={prd.img}
              alt=""
            />
              <div className="card-body">
                <h5 className="card-title">{prd.name}</h5>
                <p className="card-text">{prd.description}</p>
{/*                
                <Link to={`/Api/${product.id}`} 
                style={{ backgroundColor: "darkslateblue", color: "Lightblue" }} 
                className="btn">
                  BUY NOW
                </Link>  */}
          <br></br>
                <button 
                  onClick={() => {
                    deleteProduct(prd.id)
                  }} style={{backgroundColor:"darkslateblue",color:"Lightblue",margin:"10px"}}
                >
                  DELETE
                </button>
               
                <button
                  onClick={() => {
                    editProduct(prd.id)
                  }} style={{backgroundColor:"darkslateblue",color:"Lightblue",margin:"10px"}}
                >
                  EDIT
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}