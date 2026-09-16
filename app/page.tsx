"use client";
import { useState } from "react";

export default function Page() {
  const [menu, setMenu] = useState(false);

  const scrollTo = (id: string) => {
    setMenu(false);
    setTimeout(()=>{
      document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    }, 100);
  };

  const orderNow = () => {
    // CHANGE this number to your WhatsApp number
    window.open("https://wa.me/2348012345678?text=Hello%20Siki's%20Kitchen%20I%20want%20to%20order", "_blank");
  };

  return (
    <div style={{background:"#0e0e0e", color:"white", minHeight:"100vh", fontFamily:"sans-serif"}}>
      
      {/* HEADER */}
      <div style={{display:"flex", justifyContent:"space-between", padding:"20px", alignItems:"center"}}>
        <b style={{fontFamily:"serif"}}>Siki's Kitchen</b>
        <button onClick={()=>setMenu(true)} style={{background:"none", border:"none", color:"white", fontSize:"28px"}}>☰</button>
      </div>

      {/* HERO */}
      <div style={{padding:"20px"}}>
        <h1 style={{fontSize:"42px", lineHeight:"0.95", fontWeight:"900", fontFamily:"serif"}}>
          Nigerian flavor,<br/>plated with<br/><i style={{color:"#d4a85c", fontWeight:"400"}}>intention.</i>
        </h1>
        <p style={{color:"#888", marginTop:"16px", fontSize:"14px", maxWidth:"300px"}}>
          Siki's Kitchen brings authentic Naija dishes cooked with love.
        </p>
        <div style={{marginTop:"24px", display:"flex", gap:"12px"}}>
          <button onClick={()=>scrollTo("menu")} style={{background:"#d4a85c", color:"black", padding:"12px 22px", borderRadius:"24px", border:"none", fontWeight:"bold"}}>View Menu</button>
          <button onClick={orderNow} style={{border:"1px solid #333", background:"transparent", color:"white", padding:"12px 22px", borderRadius:"24px"}}>Order via WhatsApp</button>
        </div>

        <div id="menu" style={{marginTop:"60px"}}>
          <h2 style={{color:"#d4a85c"}}>Our Menu</h2>
          <p style={{color:"#666", fontSize:"14px"}}>Jollof, Egusi, Suya, and more...</p>
        </div>
        <div id="about" style={{marginTop:"60px"}}>
          <h2 style={{color:"#d4a85c"}}>About Us</h2>
          <p style={{color:"#666", fontSize:"14px"}}>Since 2014 serving Onitsha.</p>
        </div>
        <div id="reviews" style={{marginTop:"60px"}}>
          <h2 style={{color:"#d4a85c"}}>4.9/5 Reviews</h2>
          <p style={{color:"#666", fontSize:"14px"}}>Our customers love us.</p>
        </div>
        <div id="contact" style={{marginTop:"60px", paddingBottom:"100px"}}>
          <h2 style={{color:"#d4a85c"}}>Contact</h2>
          <p style={{color:"#666", fontSize:"14px"}}>Tap Order Now to chat us.</p>
        </div>
      </div>

      {/* SIDE MENU DRAWER - NOW WORKING */}
      {menu && (
        <div style={{position:"fixed", top:0, right:0, width:"75%", height:"100vh", background:"#121212", padding:"24px", zIndex:20, borderLeft:"1px solid #222"}}>
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:"50px"}}>
            <b>Siki's</b>
            <button onClick={()=>setMenu(false)} style={{background:"none", border:"none", color:"white", fontSize:"32px"}}>×</button>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"24px"}}>
            <button onClick={()=>scrollTo("menu")} style={{background:"none", border:"none", color:"#aaa", textAlign:"left", fontSize:"16px"}}>Menu</button>
            <button onClick={()=>scrollTo("about")} style={{background:"none", border:"none", color:"#aaa", textAlign:"left", fontSize:"16px"}}>About</button>
            <button onClick={()=>scrollTo("reviews")} style={{background:"none", border:"none", color:"#aaa", textAlign:"left", fontSize:"16px"}}>Reviews</button>
            <button onClick={()=>scrollTo("contact")} style={{background:"none", border:"none", color:"#aaa", textAlign:"left", fontSize:"16px"}}>Contact</button>
            <button onClick={orderNow} style={{background:"#d4a85c", color:"#000", padding:"14px", borderRadius:"24px", border:"none", fontWeight:"bold", width:"140px", marginTop:"10px"}}>Order Now</button>
          </div>
        </div>
      )}
    </div>
  )
            }
