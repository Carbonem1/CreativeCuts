import React, { Component } from 'react';
import './Body.css';
import TitleSection from "./titleSection/TitleSection";
import AboutSection from "./aboutSection/AboutSection";
import HoursSection from "./hoursSection/HoursSection";
import PricingSection from "./pricingSection/PricingSection";

class Body extends Component {
  render() {
    return (
      <div className = "Body">
        <TitleSection />
        <AboutSection />
        <HoursSection />
        <PricingSection />
      </div>
    );
  }
}

export default Body;
