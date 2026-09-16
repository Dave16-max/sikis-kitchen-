"use client";
import { useState } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  return (
    <main style={{padding:"20px", fontFamily:"sans-serif", textAlign:"center"}}>
      <h1>Siki's Kitchen</h1>
      <p>Home of Tasty Naija Food</p>
      
      <button onClick={()=>setShowMenu(!showMenu)} style={{padding:"12px 25px", margin:"10px", background:"orange", border:"none", borderRadius:"8px"}}>
        {showMenu ? "Hide Menu" : "View Our Menu"}
      </button>
      {showMenu && (
        <div style={{border:"1px solid #ddd", padding:"15px", borderRadius:"10px", marginTop:"10px"}}>
          <h3>Menu</h3>
          <p>Jollof Rice - ₦2500</p>
          <p>Fried Rice - ₦2500</p>
          <p>Egusi & Pounded Yam - ₦3000</p>
        </div>
      )}

      <br/>
      <button onClick={()=>setShowReviews(!showReviews)} style={{padding:"12px 25px", margin:"10px", background:"black", color:"white", border:"none", borderRadius:"8px"}}>
        {showReviews ? "Hide Reviews" : "See Reviews"}
      </button>
      {showReviews && (
        <div style={{border:"1px solid #ddd", padding:"15px", borderRadius:"10px", marginTop:"10px"}}>
          <h3>Reviews</h3>
          <p>⭐⭐⭐⭐⭐ "Best food in Onitsha!" - Ada</p>
          <p>⭐⭐⭐⭐⭐ "Delivery sharp!" - Emeka</p>
        </div>
      )}
    </main>
  );
}
