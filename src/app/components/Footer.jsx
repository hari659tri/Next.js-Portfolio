import React from "react";

const Footer = () => {
  return (
    <footer class="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div class="container py-4 md:p-12  flex justify-between flex-col md:flex-row items-center">
      <div style={{ display: "flex", alignItems: "center"}}> 
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="28" height="28" className="text-yellow-500" role="img" 
         class="svg-inline--fa fa-code fa-3x"

 >
      <path fill="#FFD43B" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
    </svg>
          <span> Harikesh </span>
          <span class="text-yellow-500">  Tripathi </span>


         </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
