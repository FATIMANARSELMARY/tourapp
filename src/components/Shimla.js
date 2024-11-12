import React from 'react';
import './Shimla.css';
import { useNavigate } from 'react-router-dom';
const activities = [
  {
    id: 1,
    name: 'The Ridge',
    image: 'the_ridge.jpg',
    rating: 4.6,
    reviews: 101,
    originalPrice: '₹2,500',
    discountedPrice: '₹2,000',
    discount: '20% OFF',
  },
  {
    id: 2,
    name: 'Green Valley',
    image: 'green_valley.jpg',
    rating: 4.4,
    reviews: 92,
    originalPrice: '₹3,000',
    discountedPrice: '₹2,500',
    discount: '17% OFF',
  },
  {
    id: 3,
    name: 'Viceregal Lodge',
    image: 'viceregal_lodge.jpg',
    rating: 4.6,
    reviews: 115,
    originalPrice: '₹2,500',
    discountedPrice: '₹2,100',
    discount: '16% OFF',
  },
  {
    id: 4,
    name: 'Hatu Peak',
    image: 'hatu_peak.jpg',
    rating: 4.6,
    reviews: 103,
    originalPrice: '₹5,000',
    discountedPrice: '₹4,500',
    discount: '10% OFF',
  },
];

const Shimla = () => {

    const navigate = useNavigate();
    const goToActivities =()=> navigate('/Activities');
  return (
    <div className="activities-container">
      <div className="header">
        <button className="back-button" onClick={goToActivities}>&#8592;</button>
        <h1 className="title">Activities</h1>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Shimla" className="input" />
      </div>

      <p className="results-text">Shimla, {activities.length} activities found</p>

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

export default Shimla;