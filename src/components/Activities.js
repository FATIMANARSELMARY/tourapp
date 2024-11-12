import React from 'react';
import './Activities.css';
import { useNavigate } from "react-router-dom";
const Activities = () => {


  const navigate = useNavigate();
  const goToShimla =() => navigate("/Shimla");
  const goToKerala = () => navigate("/kerala");
  const goToHomesAndApts = () => navigate("/home");
  return (
    <div className="container">
      <div className="header">
        <button className="backButton" onClick={goToHomesAndApts}>&#8592;</button>
        <h1 className="title">Activities</h1>
      </div>
      <p className="subtitle">Find your next adventure</p>

      <div className="searchBox">
        <input type="text" placeholder="Location" className="input" />
        <button className="searchButton">Search</button>
      </div>

      <div className="activitiesContainer">
        <h3 className="activitiesTitle">Things to do on your trip</h3>
        <div className="topActivities">
          <div className="activityCard">
            <img src="kerala.jpg" alt="Kerala" onClick={goToKerala} className="activityImage" />
            <p className="activityLabel">Kerala</p>
          </div>
          <div className="activityCard">
            <img src="shimla.jpg" alt="Shimla" onClick={goToShimla} className="activityImage" />
            <p className="activityLabel">Shimla</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;