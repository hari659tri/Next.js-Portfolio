"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div>
        <h2 class="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            Social
            <span class="font-extrabold text-transparent text-4xl sm:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900"> Handles </span>

        </h2>
       
        <div class="flex justify-center md:flex-row space-x-4" >
            <div class="group flex items-center space-x-2 p-2 transition-transform transform scale-100 group-hover:scale-110">
            <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-11 h-11 text-linkedin-blue"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="linkedin"
    role="img"
    style={{ color: "#0077B5" }} // Convert style attribute to an object
  >   <path
      fill="#0077b5"
      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    />
  </svg>
  <span className="hidden group-hover:block text-white bg-opacity-80 rounded-lg rounded-t text-center py-1" style={{ color: "white", fontSize: "1rem", fontWeight: "bold", borderRadius: "0px 0px 0.375rem 0.375rem", background: "rgb(24, 24, 24)", boxShadow: "rgba(255, 255, 255, 0.25) 0px 0px 0.5rem 0.25rem", opacity: 1, transform: "none" }}>
    LinkedIn
  </span>
   </div>
     
       <div class="group flex items-center space-x-2 p-2 transition-transform transform scale-100 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-11 h-11 text-white">
                <path fill="currentColor" d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.802 8.206 11.385.6.111.793-.258.793-.577 0-.285-.01-1.042-.015-2.045-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.083-.729.083-.729 1.205.086 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.494.998.109-.776.421-1.305.764-1.605-2.675-.305-5.487-1.336-5.487-5.93 0-1.31.465-2.385 1.235-3.229-.124-.304-.535-1.527.117-3.18 0 0 1.008-.323 3.3 1.23A11.54 11.54 0 0112 6.513c1.026.003 2.056.138 3.016.403 2.29-1.553 3.297-1.23 3.297-1.23.654 1.653.244 2.877.12 3.18.774.844 1.232 1.92 1.232 3.229 0 4.606-2.816 5.623-5.493 5.922.43.371.816 1.102.816 2.222 0 1.606-.015 2.896-.015 3.289 0 .32.193.692.801.574C20.566 21.802 24 17.304 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="hidden group-hover:block text-white bg-opacity-80 rounded-lg rounded-t text-center py-1" style={{ color: "white", fontSize: "1rem", fontWeight: "bold", borderRadius: "0px 0px 0.375rem 0.375rem", background: "rgb(24, 24, 24)", boxShadow: "rgba(255, 255, 255, 0.25) 0px 0px 0.5rem 0.25rem", opacity: 1, transform: "none" }}>
                GitHub
              </span>
            </div>
            <div className="group flex items-center space-x-2 p-2 transition-transform transform scale-100 group-hover:scale-110">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        aria-hidden="true"
        focusable="false"
        className="w-12 h-12 text-red-500" // You can adjust the width, height, and color of the icon here
    >
        <path
            fill="currentColor"
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
        />
    </svg>

    <span className="hidden group-hover:block text-white bg-opacity-80 rounded-lg rounded-t text-center py-1" style={{ color: "white", fontSize: "1rem", fontWeight: "bold", borderRadius: "0px 0px 0.375rem 0.375rem", background: "rgb(24, 24, 24)", boxShadow: "rgba(255, 255, 255, 0.25) 0px 0px 0.5rem 0.25rem", opacity: 1, transform: "none" }}>
        YouTube
    </span>
</div>
        
      </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
