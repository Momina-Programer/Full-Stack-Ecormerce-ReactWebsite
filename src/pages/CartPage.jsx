import React from 'react'
import Navbar from '../components/Navbar'
import  { useState } from "react";

const CartPage = () => {

    // Get cart items from localStorage
    const [cartItems, setCartItems] = useState(() => {
      return JSON.parse(localStorage.getItem("cart")) || [];
    });

    const calculateTotal = () => {
      return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

      // Function to handle quantity change
  const handleQuantityChange = (id, type) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        if (type === "increase") {
          item.quantity += 1;
        } else if (type === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-12 ">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 ">
          Your Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <div
            className="space-y-8 cssanimation fadeIn"
          >
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item flex flex-wrap items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
           
              >
                <div className="flex items-center space-x-6 w-full sm:w-3/5 md:w-2/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">
                      Total: ${item.price * item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 w-full sm:w-2/5 md:w-1/5 mt-4 sm:mt-0">
                  {/* Decrease button */}
                  <button
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                    className="bg-pink-500 text-white pb-1 pl-2 pr-2 rounded hover:bg-pink-600 transition-colors duration-200"
                  >
                    <span className="font-bold">-</span>
                  </button>

                  {/* Quantity Display */}
                  <span
                    className="text-lg text-gray-700"
                    key={item.quantity}
                 
                  >
                    {item.quantity}
                  </span>

                  {/* Increase button */}
                  <button
                    onClick={() => handleQuantityChange(item.id, "increase")}
                    className="bg-pink-500 text-white pb-1 pl-2 pr-2 rounded hover:bg-pink-600 transition-colors duration-200"
                  >
                    <span className="font-bold">+</span>
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Total */}
            <div
              className="cart-total bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-8 rounded-lg mt-8 text-center"
              
            >
              <h3 className="text-3xl font-semibold mb-4">
                Total Price: ${calculateTotal()}
              </h3>

              <button>Order</button>
              
            </div>
          </div>
        ) : (
          <p
            className="text-xl text-center text-gray-500"
          
          >
            Your cart is empty
          </p>
        )}
      </div>

    

   
      
    
    </>
  )
}

export default CartPage
