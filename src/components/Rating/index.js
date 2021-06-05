import React, { useEffect, useState } from "react";
import API from "../utils/API";
import "./style.css"

function Rating(props) {
  const { userState, walkthrough } = props
  const [rating, setRating] = useState(0);
  const [aRating, setArating] = useState(0);

  useEffect(() => {
    if (walkthrough.ratings) {
      let averageRating = (walkthrough.ratings.reduce((a, b) => a + b, 0) / walkthrough.ratings.length).toFixed(2);
      averageRating = +averageRating || "no rating";
      setArating(averageRating)
      setRating(averageRating)
    }
  }, [walkthrough.ratings])

  function handleRating(index) {
    setRating(index);
    API.addRating(index, walkthrough._id, userState.token)
  }
  return (
    <>
      <div className="text-white pb-0 mb-0">{aRating}</div>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => handleRating(index)}
            >
              <span className="star text-2xl">&#9733;</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Rating;
