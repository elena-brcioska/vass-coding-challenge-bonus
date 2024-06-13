import React, { useState } from "react";
import styles from "./styles/Star.module.css";

const Star = ({
  value,
  setUserRating,
  userRating,
  setHoverRating,
  hoverRating,
}) => {
  const [halfStep, setHalfStep] = useState(false);

  const handleClick = (value) => {
    setUserRating(value);
  };

  const handleMouseEnter = () => {
    setHoverRating(value);
    console.log(hoverRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
    setHalfStep(false);
  };

  const fill =
    hoverRating >= value || (!hoverRating && userRating >= value)
      ? "#FFB400"
      : "#808080";

      const displayHalfStep = halfStep || userRating === (value - 0.5) ? true : false;

  return (
    <div className={styles.star}>
      <div
        className={styles.half}
        onClick={() => handleClick(value - 0.5)}
        onMouseEnter={() => setHalfStep(true)}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        onClick={() => handleClick(value)}
        onMouseEnter={() => handleMouseEnter(value)}
        onMouseLeave={handleMouseLeave}
      >
        <label htmlFor={value}>
          {!displayHalfStep && (
            <svg
              width="38"
              height="42"
              viewBox="0 0 38 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6923 32.0283L26.8146 29.5849L30.2081 42L18.6923 32.0283ZM37.3846 15.9811H23.0872L18.6923 0L14.2974 15.9811H0L11.5714 25.8868L7.17651 41.8679L18.7479 31.9623L25.8688 25.8868L37.3846 15.9811Z"
                fill={fill}
              />
            </svg>
          )}

          {displayHalfStep && (
            <svg
              width="37"
              height="42"
              viewBox="0 0 37 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_86)">
                <path
                  d="M18.5 30.9045L26.5387 28.5467L29.8972 40.5263L18.5 30.9045ZM37 15.4204H22.8498L18.5 0L14.1503 15.4204H0L11.4524 24.9786L7.10266 40.3989L18.5551 30.8408L25.6028 24.9786L37 15.4204Z"
                  fill="#FFB400"
                />
                <mask
                  id="mask0_2_86"
                  maskUnits="userSpaceOnUse"
                  x="18"
                  y="0"
                  width="38"
                  height="42"
                >
                  <path d="M55.5 0H18.5V42H55.5V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_2_86)">
                  <path
                    d="M18.5 30.9045L26.5387 28.5467L29.8972 40.5263L18.5 30.9045ZM37 15.4204H22.8498L18.5 0L14.1503 15.4204H0L11.4524 24.9786L7.10266 40.3989L18.5551 30.8408L25.6028 24.9786L37 15.4204Z"
                    fill="#808080"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_2_86">
                  <rect width="37" height="42" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </label>

        <input
          id={value}
          name="rating"
          type="radio"
          value={value}
          checked={userRating === value}
          readOnly
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default Star;
