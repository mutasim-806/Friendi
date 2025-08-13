import React from "react";
import styles from "./style.module.css";

const Switch = ({ checked= true, disabled = false }) => {
  return (
    <div>
      <label className={disabled ? `${styles.switch} ${styles.disabled}` : styles.switch}>
        <input type="checkbox" disabled={disabled} checked={checked} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default Switch;
