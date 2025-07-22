import AboutUs from "../components/about";
import CardSlider from "../components/cardslider";
import Events from "../components/events";
import Hero from "../components/hero";
import NavBar from "../components/navbar";
import "./home.css";

const HomePage = () => {
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{order: 1, zIndex: 100}}>
                <NavBar/>
            </div>
            <div className="hero-about" style={{order: 2}}>
                <Hero/>
                <AboutUs/>
            </div>
            <div /*className="events-section-toggle"*/ style={{order: 3}}>
                <Events/>
            </div>
            <div style={{order: 4}}>
                <CardSlider/>
            </div>
        </div>
    );
}

export default HomePage;