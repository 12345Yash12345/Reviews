// App.js
import React, { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import "./App.css";

// Random placeholder image URL
const randomUserPhoto = "user.jpg";

function App() {
  const [reviewsData, setReviewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  useEffect(() => {
    fetch("/reviewsData.json")
      .then(response => response.json())
      .then(data => setReviewsData(data))
      .catch(error => console.error("Error fetching reviews data:", error));
  }, []);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="header">
        <h1>Review Sentiment Analysis</h1>
      </div>
      <ReviewList reviewsData={currentReviews} randomUserPhoto={randomUserPhoto} />
      <div className="pagination">
        {Array.from({ length: Math.ceil(reviewsData.length / reviewsPerPage) }, (_, i) => i + 1).map(page => (
          <button key={page} className={page === currentPage ? "active" : ""} onClick={() => paginate(page)}>
            {page}
          </button>
        ))}
      </div>
      
    </div>
  );
}

export default App;
