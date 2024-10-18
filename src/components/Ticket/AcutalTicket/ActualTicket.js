// src/pages/ActualTicket.js
import React, { useState } from "react";
import TicketList from "./TicketList";
import Cart from "./Cart";


const ActualTicket = () => {
  const [cartItems, setCartItems] = useState([]);
  const tickets = [
    { id: 1, title: "Concert Ticket", description: "Live concert", price: 50 },
    { id: 2, title: "Movie Ticket", description: "Latest blockbuster", price: 12 },
    { id: 3, title: "Sports Event Ticket", description: "Football match", price: 30 },
  ];

  const handleAddToCart = (ticket) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === ticket.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === ticket.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...ticket, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  return (
    <div className="actual-ticket-page">
        <hr />
    <h2>TICKETS</h2>
      <main className="mainDiv">
        <TicketList tickets={tickets} onAddToCart={handleAddToCart} />
        <Cart 
          cartItems={cartItems} 
          onRemoveFromCart={handleRemoveFromCart} 
          onUpdateQuantity={handleUpdateQuantity} 
        />
      </main>
      {/* Add footer if necessary */}
    </div>
  );
};

export default ActualTicket;
