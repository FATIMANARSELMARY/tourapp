import React from 'react';
import './Kerala.css';
import { useNavigate } from 'react-router-dom';
const activities = [
  {
    id: 1,
    name: 'Munnar',
    image: 'munnar.jpg',
    rating: 4.6,
    reviews: 102,
    originalPrice: '₹2,000',
    discountedPrice: '₹1,800',
    discount: '10% OFF',
  },
  {
    id: 2,
    name: 'Wayanad',
    image: 'wayanad.jpg',
    rating: 4.4,
    reviews: 63,
    originalPrice: '₹6,000',
    discountedPrice: '₹5,500',
    discount: '9% OFF',
  },
  {
    id: 3,
    name: 'Jadayu',
    image: 'jadayu.jpg',
    rating: 4.6,
    reviews: 85,
    originalPrice: '₹8,000',
    discountedPrice: '₹6,500',
    discount: '18% OFF',
  },
  {
    id: 4,
    name: 'Varkala',
    image: 'varkala.jpg',
    rating: 4.4,
    reviews: 115,
    originalPrice: '₹5,000',
    discountedPrice: '₹4,500',
    discount: '10% OFF',
  },
];

const Kerala = () => {
    const navigate = useNavigate();
  const goToActivities =()=> navigate("/Activities");  
  return (
    <div className="activities-container">
      <div className="header">
        <button className="back-button" onClick={goToActivities}>&#8592;</button>
        <h1 className="title">Activities</h1>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Kerala" className="input" />
      </div>

      <p className="results-text">Kerala, {activities.length} activities found</p>

      <div className="activities-list">
        {activities.map(activity => (
          <div key={activity.id} className="activity-card">
            <img src={activity.image} alt={activity.name} className="activity-image" />
            <div className="activity-info">
              <h3 className="activity-name">{activity.name}</h3>
              <p className="activity-rating">
                ⭐ {activity.rating} ({activity.reviews})
              </p>
              <p className="activity-price">
                <span className="original-price">{activity.originalPrice}</span>
                <span className="discounted-price">{activity.discountedPrice}</span>
              </p>
              <p className="discount">{activity.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kerala;