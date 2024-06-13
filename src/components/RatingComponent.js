import React, { useState } from "react";
import logo from "../images/logo.svg";
import StarsComponent from "./StarsComponent";
import styles from "./styles/RatingComponent.module.css";

const RatingComponent = () => {

  return (
    <div className={styles.card}>
      <h4>Please Rate</h4>
      <StarsComponent />
      <p>Your feedback is very important to us.</p>
      <img src={logo} alt="VASS" />
    </div>
  );
};

export default RatingComponent;
