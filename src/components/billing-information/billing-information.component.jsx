import React from "react";
import "./billing-information.styles.css";

export default function BillingInformation({ onChange }) {
  return (
    <>
      <div className="BillingInformation">
        <p className="Monthly">Monthly Billing</p>
        <div className="slidecontainer">
          <label className="switch">
            <input type="checkbox" onChange={onChange} />
            <span className="sliderToggle round"></span>
          </label>
        </div>
        <p className="Yearly">Yearly Billing</p>
        <p className="Discount">25% Discount</p>
      </div>
      <hr />
    </>
  );
}
