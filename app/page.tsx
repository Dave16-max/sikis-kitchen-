"use client";
import { useState } from "react";
export default function Home(){
 const [showMenu,setShowMenu]=useState(false);
 const [showReviews,setShowReviews]=useState(false);
 return(
 <main style={{padding:"20px",textAlign:"center",fontFamily:"sans-serif"}}>
 <h1>Siki's Kitchen</h1>
 <p>Home of Tasty Naija Food</p>
 <button onClick={()=>setShowMenu(!showMenu)} style={{padding:"14px 28px",margin:"10px",background:"#FF8C00",color:"white",border:"none",borderRadius:"10px",fontWeight:"bold"}}>{showMenu?"Hide Menu":"View Our Menu"}</button>
 {showMenu && <div style={{border:"1px solid #ddd",padding:"15px",borderRadius:"10px",marginTop:"10px"}}><p>Jollof Rice - ₦2500</p><p>Fried Rice - ₦2500</p><p>Egusi Soup - ₦3000</p></div>}
 <br/>
 <button onClick={()=>setShowReviews(!showReviews)} style={{padding:"14px 28px",margin:"10px",background:"black",color:"white",border:"none",borderRadius:"10px",fontWeight:"bold"}}>{showReviews?"Hide Reviews":"See Reviews"}</button>
 {showReviews && <div style={{border:"1px solid #ddd",padding:"15px",borderRadius:"10px",marginTop:"10px"}}><p>⭐⭐⭐⭐⭐ Best food in Onitsha!</p><p>⭐⭐⭐⭐⭐ Fast delivery!</p></div>}
 </main>);
}
