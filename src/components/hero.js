import "./hero.css";
import heroVideo from "../assets/hero-video.mp4"

const Hero = () => {

  return (
    <div className="hero-container">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <div className="hero-title">Where Passion Meets Play</div>
      </div>
      {/*<div className="hero-cover" />*/}
    </div>
  );
};

export default Hero;
