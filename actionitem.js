import React from "react";
import { Link } from "react-router-dom";

const AuctionItem = ({ auction }) => {
  return (
    <div className="auction-item">
      <h3>{auction.title}</h3>
      <p>{auction.description}</p>
      <p>Highest Bid: ${auction.highestBid}</p>
      <Link to={`/auction/${auction._id}`}>
        <button>View Auction</button>
      </Link>
    </div>
  );
};

export default AuctionItem;
