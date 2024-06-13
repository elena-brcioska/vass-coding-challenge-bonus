import React, { useState, useEffect } from "react";
import Star from "./Star";
import styles from "./styles/StarsComponent.module.css";

const StarsComponent = () => {
  const [userRating, setUserRating] = useState(() => {
    const savedRating = sessionStorage.getItem("userRating");
    return savedRating ? parseInt(savedRating.replace(/,/g, ".")).toFixed(1) : 0;
  });

  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("userRating", userRating);
  }, [userRating]);

  const rate = [1, 2, 3, 4, 5];

  return (
    <div className={styles.rating}>
      {rate.map((star) => (
        <Star
          key={star}
          value={star}
          setUserRating={setUserRating}
          userRating={userRating}
          setHoverRating={setHoverRating}
          hoverRating={hoverRating}
        />
      ))}
    </div>
  );
};

export default StarsComponent;
