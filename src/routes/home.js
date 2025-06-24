import CardSlider from "../components/cardslider";
import Events from "../components/events";
import Hero from "../components/hero";
import NavBar from "../components/navbar";

const HomePage = () => {
    return(
        <div>
            <NavBar/>
            <Hero/>
            <Events/>
            <CardSlider/>
        </div>
    );
}

export default HomePage;