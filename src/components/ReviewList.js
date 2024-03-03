import React, { useState } from "react";
import "./ReviewList.css";


const defaultUserPhoto = "https://via.placeholder.com/50";

function ReviewList({ reviewsData }) {
  const [filter, setFilter] = useState("all");

  const filteredReviews = reviewsData.filter(review => {
    if (filter === "good") {
      return review.sentiment === "Positive";
    } else if (filter === "bad") {
      return review.sentiment === "Negative";
    }
    return true;
  });

  const renderStars = (rating, sentiment) => {
    const stars = [];
    const totalStars = sentiment === "Positive" ? 5 : 1;
    for (let i = 1; i <= totalStars; i++) {
      stars.push(<span key={i} className={i <= rating ? "star filled" : "star"}>&#9733;</span>);
    }
    return stars;
  };


  return (
    <div className="review-list">
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All Reviews</button>
        <button onClick={() => setFilter("good")}>Good Reviews</button>
        <button onClick={() => setFilter("bad")}>Bad Reviews</button>
      </div>
      {filteredReviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
          filteredReviews.map(review => (
            <div key={review.review_id} className={`review ${review.sentiment ? review.sentiment.toLowerCase() : ''}`}>
              <div className="review-header">
                <img src={review.user_photo || defaultUserPhoto} alt="User" className="user-image" />
                <div>
                  <p className="reviewer-name"><span className="highlighted">{review.reviewer_name}</span> <span className="w1">wrote a review at </span>  <span className="web">tripadvisor.com</span></p>
                  <div className="rating">{renderStars(review.rating, review.sentiment)}</div>
                  <p className="review-date">Date: {review.date}</p>
                </div>
              </div>
              <p className="review-content">{review.content}</p>
            </div>
          ))
        )}
    </div>
  );
}

export default ReviewList;
