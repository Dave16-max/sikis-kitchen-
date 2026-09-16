"use client";
import { useState } from "react";

export default function Page() {
  const [menu, setMenu] = useState(true);

  return (
    <div style={{background:"#0e0e0e", color:"white", minHeight:"100vh", fontFamily:"serif", position:"relative", overflow:"hidden"}}>
      
      {/* Background Content */}
      <div style={{padding:"20px", opacity: menu ? 0.3 : 1}}>
        <h1 style={{fontSize:"48px", lineHeight:"0.9", fontWeight:"900", marginTop:"40px"}}>
          Nigerian flavor,<br/>plated with<br/><i style={{color:"#d4a85c", fontWeight:"400"}}>intention.</i>
        </h1>
        <p style={{color:"#888", marginTop:"20px", maxWidth:"280px", fontFamily:"sans-serif", fontSize:"14px", lineHeight:"1.5"}}>
          Siki's Kitchen brings authentic Naija dishes cooked with love, built for enjoyment. Ready to order?
        </p>
        <div style={{marginTop:"30px", display:"flex", gap:"10px"}}>
          <button style={{background:"#d4a85c", color:"black", padding:"14px 28px", borderRadius:"30px", border:"none", fontWeight:"bold", display:"flex", gap:"8px", alignItems:"center"}}>
            <span>◍</span> Order via WhatsApp
          </button>
        </div>
        <p style={{marginTop:"20px", color:"#666", fontSize:"13px"}}>See the full menu ↓</p>
        
        <div style={{marginTop:"60px"}}>
          <h2 style={{fontSize:"32px", color:"#d4a85c", fontWeight:"bold"}}>2014</h2>
          <p style={{color:"#555", fontSize:"12px", fontFamily:"sans-serif"}}>Since we started</p>
          <h2 style={{fontSize:"32px", color:"#d4a85c", fontWeight:"bold", marginTop:"30px"}}>4.9/5</h2>
          <p style={{color:"#555", fontSize:"12px", fontFamily:"sans-serif"}}>Average customer rating</p>
        </div>
      </div>

      {/* Side Menu - EXACT like your screenshot */}
      {menu && (
        <div style={{position:"fixed", top:0, right:0, width:"75%", height:"100vh", background:"#121212", padding:"24px", zIndex:10, borderLeft:"1px solid #222"}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"50px"}}>
            <span style={{fontWeight:"bold"}}>Siki's</span>
            <button onClick={()=>setMenu(false)} style={{background:"none", border:"none", color:"white", fontSize:"32px"}}>×</button>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"28px", fontFamily:"sans-serif", color:"#aaa", fontSize:"16px"}}>
            <span>Menu</span>
            <span>About</span>
            <span>Reviews</span>
            <span>Contact</span>
            <button style={{background:"#d4a85c", color:"#000", padding:"14px", borderRadius:"24px", border:"none", fontWeight:"bold", width:"140px", marginTop:"10px"}}>Order Now</button>
          </div>
        </div>
      )}

      {!menu && (
        <button onClick={()=>setMenu(true)} style={{position:"fixed", top:"20px", right:"20px", background:"none", border:"none", color:"white", fontSize:"28px"}}>☰</button>
      )}
    </div>
  )
}
