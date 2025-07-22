import React, { useState, useEffect, useLayoutEffect } from "react";
import "./about.css";
import starIcon from "../assets/star.png"

const AboutUs = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); 

useEffect(() => {
  if (typeof window === "undefined") return;

  const checkWidth = () => {
    const width = window.innerWidth;
    setIsMobileMenu(width <= 850);
  };

  checkWidth(); // run on mount
  window.addEventListener("resize", checkWidth);
  return () => window.removeEventListener("resize", checkWidth);
}, []);

useEffect(() => {
  console.log(" isMobileMenu updated:", isMobileMenu);
}, [isMobileMenu]);

if (isMobileMenu === null) return null; // Don't render anything until known


  const handleStarClick = (index) => {
    setActiveIndex(index);
    console.log("Star clicked:", index); 
  };

  return (
    <div className="ab-full-container">
        <div className="about-container">
            <div className="about-heading">About Infinity Clubhouse</div>
            <div className="about-desc">
                At Infinity Clubhouse, we believe that great communities start with shared passions. Whether you're rallying on the court or jamming to your favorite beats, our clubhouse brings together people who love to play, connect, and celebrate life.
            </div>
            <div className="about-desc">
                We’re home to a vibrant range of hobby clubs, including:
            </div>
        </div>
        <div>
      {isMobileMenu ? (
        <div className="mobile-hero-section">
          <div className="mobile-hero-menu">
            {["lightblue", "lightcoral", "lightgoldenrodyellow", "lightgreen", "pink"].map(
              (color, index) => (
                <div
                  key={index}
                  className={`star-container ${
                    activeIndex === index ? "active" : ""
                  }`} 
                  style={{ backgroundColor: color }}
                  onClick={() => handleStarClick(index)}
                >
                  <img className="star-icon" alt="star-icon" src={starIcon} />
                </div>
              )
            )}
          </div>

          <div className="mobile-tab-info">
            {[
              { title: "Tennis Club", desc: "For tennis lovers looking to improve their game or just enjoy a rally.", color: "lightblue" },
              { title: "Cricket Club", desc: "Celebrate your love for cricket with matches, screenings, and bonding.", color: "lightcoral" },
              { title: "Football Club", desc: "For football enthusiasts ready to kick off some fun.", color: "lightgoldenrodyellow" },
              { title: "Chess Club", desc: "For strategic minds who enjoy a quiet challenge.", color: "lightgreen" },
              { title: "Music Club", desc: "From jamming sessions to open mics, this is your stage.", color: "lightpink" },
            ].map((info, index) => (
              <div
                key={index}
                style={{backgroundColor: `${info.color}`, zIndex: 100, position: "absolute"}}
                className={`info-tab-container ${
                  activeIndex === index ? "visible" : "hidden"
                }`}
              >
                <div className="menu-item-title">{info.title}</div>
                <div className="menu-item-desc">{info.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ):(
        <div className="hero-menu">
          <div className="hero-menu-item" style={{ backgroundColor: "lightblue" }}>
            <img className="item-star" src={starIcon} alt="star-icon" />
            <div className="menu-item-title">Tennis Club</div>
            <div className="menu-item-desc"> For tennis lovers looking to improve their game or just enjoy a rally.</div>
          </div>
          <div className="hero-menu-item" style={{ backgroundColor: "lightcoral" }}>
            <img className="item-star" src={starIcon} alt="star-icon" />
            <div className="menu-item-title">Cricket Club</div>
            <div className="menu-item-desc">Celebrate your love for cricket with matches, screenings, and bonding.</div>
          </div>
          <div className="hero-menu-item" style={{ backgroundColor: "lightgoldenrodyellow" }}>
            <img className="item-star" src={starIcon} alt="star-icon" />
            <div className="menu-item-title">Football Club</div>
            <div className="menu-item-desc">For football enthusiasts ready to kick off some fun.</div>
          </div>
          <div className="hero-menu-item" style={{ backgroundColor: "lightgreen" }}>
            <img className="item-star" src={starIcon} alt="star-icon" />
            <div className="menu-item-title">Chess Club</div>
            <div className="menu-item-desc">For strategic minds who enjoy a quiet challenge.</div>
          </div>
          <div className="hero-menu-item" style={{ backgroundColor: "lightpink" }}>
            <img className="item-star" src={starIcon} alt="star-icon" />
            <div className="menu-item-title">Music Club</div>
            <div className="menu-item-desc">From jamming sessions to open mics, this is your stage.</div>
          </div>
        </div>
      )}
        </div>
    </div>
  );
};

export default AboutUs;
