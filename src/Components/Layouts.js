import React, { Children } from "react";
import "../styles/Layouts.css";
const Layout = () => {
  const cardArray = Array.from({ length: 12 }, (v, i) => i);
  return (
<>


<div className="top">

<div className="logo">
         <img src="data:image/jpeg;base64,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"  alt="" height={"40px"}/>
</div>
</div>

    <div class="navbar">

      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#contact">Contact Us</a>
      <a href="#expert">Consult Expert</a>
    </div>
    
    <div className="card-grid">
      {cardArray.map((card, index) => (
        <div className="card" key={index}>
          {/* Add your content inside each card */}
        </div>
      ))}
    </div>
    </>
    /* <nav className="navbar">

<div className="logo"><h5>logo</h5></div>


<li>Home</li>
<li>About</li>
<li>Contact Us</li>
<li>Expert consultation</li>


</nav> */
  );
};

export default Layout;
