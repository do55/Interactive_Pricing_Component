import React from "react";
import "./slider.styles.css";

export default function Slider({ className, onChange }) {
  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="0"
        max="4"
        defaultValue="2"
        step="1"
        className={`slider ${className}`}
        onInput={onChange}
      />
    </div>
  );
}
