// src/components/TicketItem.js
import React from "react";

const TicketItem = ({ ticket, onAddToCart }) => {
  return (
    <div className="ticket-item">
      <h2>{ticket.title}</h2>
      <p>{ticket.description}</p>
      <p>Price: ${ticket.price}</p>
      <button onClick={() => onAddToCart(ticket)}>Add to Cart</button>
    </div>
  );
};

export default TicketItem;
