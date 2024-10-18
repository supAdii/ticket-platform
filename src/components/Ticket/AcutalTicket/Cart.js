// src/components/Cart.js
import React from "react";

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Working on this page mate.");
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div> 
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="leftSide">
                  {item.title} - ${item.price} X {item.quantity}
                </div>
                <div className="rightSide">
                  <button className="cartButton" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="cartButton" onClick={() => onUpdateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)}>-</button>
                  <button className="cartButton" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      )}
      <button className="btn btn-secondary checkout" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
