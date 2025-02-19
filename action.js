import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Auction = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/auctions/${id}`)
      .then(response => setAuction(response.data))
      .catch(error => console.error("Error fetching auction:", error));
  }, [id]);

  const handleBid = () => {
    if (parseFloat(bidAmount) > auction.highestBid) {
      axios.post(`http://localhost:5000/api/auctions/bid`, { 
        auctionId: id, 
        amount: parseFloat(bidAmount), 
        bidder: "User1" 
      }).then(response => {
        setAuction(response.data);
      });
    } else {
      alert("Bid must be higher than the current highest bid!");
    }
  };

  if (!auction) return <p>Loading auction details...</p>;

  return (
    <div>
      <h2>{auction.title}</h2>
      <p>{auction.description}</p>
      <p>Starting Price: ${auction.startingPrice}</p>
      <p>Highest Bid: ${auction.highestBid}</p>
      <input 
        type="number" 
        value={bidAmount} 
        onChange={(e) => setBidAmount(e.target.value)} 
        placeholder="Enter your bid" 
      />
      <button onClick={handleBid}>Place Bid</button>
    </div>
  );
};

export default Auction;
