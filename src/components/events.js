import "./events.css";
import birthdayEvent from "../assets/birthday-event.jpg"
import playDate from "../assets/play-date.jpg"
import teamBonding from "../assets/team-bonding.jpg"

const Events = () =>{
    return(
        <div className="event-container">
            <div className="event-heading">Play, Your Way</div>
            <div className="heading-desc">When it comes to get-togethers, the more is always the merrier. You bring the people, we’ll take care of the rest. Call us for customized birthdays, farewells, anniversaries and other events or group packages with entertainment, music and a fantastic range of F&B to choose from.</div>

            <div className="event-group">
                <div className="event-section">
                    <div className="event-title">Birthday Bashes!</div>
                    <img className="event-img" src={birthdayEvent} alt="event-img"/>
                    <div className="event-desc">Thrilling activities, exciting games, and delicious food—our custom packages ensure unforgettable experiences for all ages!</div>
                    <button className="event-btn">Join Now!</button>
                </div>
                <div className="event-section">
                    <div className="event-title">Club-Events!</div>
                    <img className="event-img" src={playDate} alt="event-img"/>
                    <div className="event-desc">Talk to us to find out more about our packages for team building activities, leadership meets, outbound learning and more.</div>
                    <button className="event-btn">Join Now!</button>
                </div>
                <div className="event-section">
                    <div className="event-title">Play Dates!</div>
                    <img className="event-img" src={teamBonding} alt="event-img"/>
                    <div className="event-desc">Experience Play Dates, any day of the week, enjoy this special offer and quality time with your partner. Perfect for fun and connection!</div>
                    <button className="event-btn">Join Now!</button>
                </div>
            </div>
        </div>
    );
}

export default Events;