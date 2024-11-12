// TravelLoop.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Create this CSS file for styling

function Home() {
    const navigate = useNavigate();

    const goToFlights = () => navigate("/flights");
  const goToActivities = () => navigate("/activities");
  const goToHomesAndApts = () => navigate("/homes-apts");



  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>TravelLoop</h1>
        <div className="notification-icon">🔔</div>
      </header>

      {/* Navigation Tabs */}
      <nav className="tabs">
        <button className="tab active">🏨 Stays</button>
        <button className="tab">🚗 Car rental</button>
        <button className="tab">🚕 Taxi</button>
      </nav>

      {/* Main Content */}
      <div className="content">
        {/* Hotels Section */}
        <div className="hotels-section">
          <h2>Hotels</h2>
          <div className="hotel-image">
            <img src="hotel-image-url" alt="Hotel" />
          </div>
        </div>

        {/* Options Section */}
        <div className="options">
          <button className="option" onClick={goToFlights}>✈️ Flights</button>
          <button className="option" onClick={goToActivities}>🎉 Activities</button>
          <button className="option" onClick={goToHomesAndApts}>🏠 Homes & Apts</button>
        </div>

        {/* Promotion Banner */}
        <div className="coupon-banner">
          <p>10% off coupon for 1st App Booking</p>
          <button className="claim-button">Claim</button>
        </div>

        {/* Promotions Section */}
        <div className="promotions-section">
          <h2>Promotions</h2>
          <div className="promotions">
            <div className="promotion-card">Explore the Destination - 50% off</div>
            <div className="promotion-card">Travel - 50% off</div>
          </div>
        </div>

        {/* VIP Status Section */}
        <div className="vip-section">
          <p>As a VIP Bronze member, receive a larger discount.</p>
        </div>

        {/* Explore Section */}
        <div className="explore-section">
          <h2>Explore the World</h2>
          <div className="explore-cards">
            <div className="explore-card">Explore the World</div>
            <div className="explore-card">Explore the World</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <footer className="bottom-nav">
        <button className="nav-button">❤️</button>
        <button className="nav-button">🔍</button>
        <button className="nav-button">👤</button>
      </footer>
    </div>
  );
}

export default Home;