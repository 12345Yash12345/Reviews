import React from "react";

function ReviewHighlighter({ review }) {
  const { content, analytics } = review;

  return (
    <div className="review-highlighter">
      {content.split("\n").map((sentence, index) => {
        const sentiment = analytics.find(
          (analytic) => analytic.sentences && analytic.sentences.includes(sentence.trim())
        );

        const style = sentiment ? { color: getSentimentColor(sentiment.sentiment) } : {};

        return (
          <p key={index}>
            <span style={style}>{sentence}</span>
          </p>
        );
      })}
    </div>
  );
}

function getSentimentColor(sentiment) {
  switch (sentiment) {
    case "Positive":
      return "green";
    case "Negative":
      return "red";
    default:
      return "black";
  }
}

export default ReviewHighlighter;
