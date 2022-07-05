import React, { useState } from "react";
import "./pricing-card.styles.css";
import Slider from "../slider/slider.component";
import ResultOutput from "../result-output/result-output";
import BillingInformation from "../billing-information/billing-information.component";
import BenefitsInformation from "../benefits-information/benefits-information.component";

const values = [10000, 50000, 100000, 500000, 1000000];

export default function PricingCard() {
  const [sliderValue, setSliderValue] = useState(values[2]);
  const [yearly, setYearly] = useState(false);
  const [price, setPrice] = useState(16);

  function onSliderChange(e) {
    setSliderValue((sliderValue) => values[e.target.value]);
    switch (values[e.target.value]) {
      case 10000:
        setPrice(8);
        break;
      case 50000:
        setPrice(12);
        break;
      case 100000:
        setPrice(16);
        break;
      case 500000:
        setPrice(24);
        break;
      case 1000000:
        setPrice(36);
        break;
      default:
        console.log(`Wrong number of views`);
    }
  }

  function handleToggleButton(e) {
    if (e.target.checked) {
      setYearly(true);
    } else {
      setYearly(false);
    }
  }

  return (
    <div className="PricingCard">
      <div className="Labels">
        <ResultOutput className="Views" result={sliderValue} />
        <ResultOutput className="Price" yearly={yearly} price={price} />
      </div>
      <Slider className="PricingSlider" onChange={onSliderChange} />
      <BillingInformation onChange={handleToggleButton} />
      <BenefitsInformation />
    </div>
  );
}
