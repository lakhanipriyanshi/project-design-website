import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Addtocart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios.get("  http://localhost:3032/products").then((response) => {
      const itemsWithDefaultQuantity = response.data.map((item) => ({
        ...item,
        quantity: 1,
      }));
      setCartItems(itemsWithDefaultQuantity);
    });
  }, []);
  const AddToCart = (item) => {
    setCartItems([...cartItems, item]);
  }
 
  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Calculate subtotal, tax, and total
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = 5.0;
  const total = subtotal + tax;

  const CartNotification = ({ items }) => {
    return (
      <div className="cart-notification">
        <p>{items.length} items added to the cart</p>
      </div>
    );
  }
  const MyComponent = () => {
    return (
      <div>
        
        {cartItems.length > 0 && <CartNotification items={cartItems} />}
      </div>
    );
  }
  return (
    <div className="cart-container">
      {cartItems.length > 0 && (
        <div>
          <h1><i className="fa-solid fa-lock"></i> Shopping Cart</h1>
          <hr/>
          <table className="cart-items-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="cart-item-thumbnail">
                    <img src={item.thumbnail} alt="" />
                  </td>
                  <td className="cart-item-title">{item.title}</td>
                  <td className="cart-item-price">${item.price}</td>
                  <td className="cart-item-quantity">
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      name="quantity"
                      min="1"
                      max="5"
                      value={item.quantity}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value);
                        const updatedCartItems = cartItems.map((cartItem) => {
                          if (cartItem.id === item.id) {
                            return { ...cartItem, quantity: newQuantity };
                          }
                          return cartItem;
                        });
                        setCartItems(updatedCartItems);
                      }}
                    />
                  </td>
                  <td className="cart-item-total">
                    ${item.price * item.quantity}
                  </td>
                  <td className="cart-item-delete">
                    <button onClick={() => handleDelete(item.id)}>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Display subtotal, tax, and total */}
          <div>
            <p>Subtotal: ${subtotal}</p>
            <p>Tax: ${tax}</p>
            <p><b>Total: ${total}</b></p>
        
          </div>
        </div>
      )}
    </div>
  );
};

export default Addtocart;