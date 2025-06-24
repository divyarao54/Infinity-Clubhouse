import React, { useState, useEffect } from "react";
import "./hero.css";

const Hero = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 850) {
        setIsMobileMenu(true);
      } else {
        setIsMobileMenu(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleStarClick = (index) => {
    setActiveIndex(index); 
  };

  return (
    <div>
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/assets/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
                  <img className="star-icon" alt="star-icon" src="/assets/star.png" />
                </div>
              )
            )}
          </div>

          <div className="mobile-tab-info">
            {[
              { title: "Tennis Club", desc: "Tennis Club for Tennis enthusiasts!", color: "lightblue" },
              { title: "Cricket Club", desc: "Cricket Club for Cricket enthusiasts!", color: "lightcoral" },
              { title: "Football Club", desc: "Football Club for Football enthusiasts!", color: "lightgoldenrodyellow" },
              { title: "Chess Club", desc: "Chess Club for Chess enthusiasts!", color: "lightgreen" },
              { title: "Music Club", desc: "Music Club for Music enthusiasts!", color: "lightpink" },
            ].map((info, index) => (
              <div
                key={index}
                style={{backgroundColor: `${info.color}`}}
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
      ) : (
        <div className="hero-menu">
          <div className="hero-menu-item" style={{ backgroundColor: "lightblue" }}>
            <img className="item-star" src="/assets/star.png" alt="star-icon" />
            <div className="menu-item-title">Tennis Club</div>
            <div className="menu-item-desc">Tennis Club for Tennis enthusiasts!</div>
          </div>
          <div className="hero-menu-item" style={{ backgroundColor: "lightcoral" }}>
            <img className="item-star" src="/assets/star.png" alt="star-icon" />
            <div className="menu-item-title">Cricket Club</div>
            <div className="menu-item-desc">Cricket Club for Cricket enthusiasts!</div>
          </div>
          <div className="hero-menu-item" style={{ backgroundColor: "lightgoldenrodyellow" }}>
            <img className="item-star" src="/assets/star.png" alt="star-icon" />
            <div className="menu-item-title">Football Club</div>
            <div className="menu-item-desc">Football Club for Football enthusiasts!</div>
          </div>
          <div className="hero-menu-item" style={{ backgroundColor: "lightgreen" }}>
            <img className="item-star" src="/assets/star.png" alt="star-icon" />
            <div className="menu-item-title">Chess Club</div>
            <div className="menu-item-desc">Chess Club for Chess enthusiasts!</div>
          </div>
          <div className="hero-menu-item" style={{ backgroundColor: "lightpink" }}>
            <img className="item-star" src="/assets/star.png" alt="star-icon" />
            <div className="menu-item-title">Music Club</div>
            <div className="menu-item-desc">Music Club for Music enthusiasts!</div>
          </div>
        </div>
      )}

      {/*<div className="hero-cover" />*/}
    </div>
  );
};

export default Hero;
