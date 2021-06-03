import React, { useState } from "react";
import "./style.css"

function Rating(props) {

    const [rating, setRating] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="star text-2xl">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  }
  
  export default Rating;
  