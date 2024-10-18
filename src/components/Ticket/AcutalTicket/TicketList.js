// src/components/TicketList.js
import React from "react";
import TicketItem from "./TicketItems";

const TicketList = ({ tickets, onAddToCart }) => {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default TicketList;
