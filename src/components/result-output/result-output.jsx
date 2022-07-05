import React from "react";
import "./result-output.styles.css";

export default function ResultOutput({ className, result, price, yearly }) {
  console.log(result);
  let viewsNumber = "";
  switch (result) {
    case 10000:
      viewsNumber = "10K";
      break;
    case 50000:
      viewsNumber = "50K";
      break;
    case 100000:
      viewsNumber = "100K";
      break;
    case 500000:
      viewsNumber = "500K";
      break;
    case 1000000:
      viewsNumber = "1M";
      break;
    default:
      console.log(`Wrong number of views`);
  }

  if (yearly) {
    price = price - price * 0.25;
  }

  price = (Math.round(price * 100) / 100).toFixed(2);

  if (className === "Views") {
    return (
      <p
        style={{
          color: "#858FAD",
          fontSize: "22px",
          fontWeight: "bold",
          paddingTop: "20px",
        }}
      >
        {viewsNumber} PAGEVIEWS
      </p>
    );
  } else {
    return (
      <p style={{ color: "#858FAD", fontSize: "22px" }}>
        <span
          style={{
            color: "hsl(227, 35%, 25%)",
            fontSize: "35px",
            fontWeight: "bold",
          }}
        >
          ${price}
        </span>
        /month
      </p>
    );
  }
}
