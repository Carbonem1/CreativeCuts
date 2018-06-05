import React, { Component } from 'react';
import './TitleSection.css';
import TitleDisplayImage from "./TitleDisplayImage";
import TitleText from "./TitleText";
import AppointmentButton from "./AppointmentButton";
import Calendar from 'react-calendar'

class TitleSection extends Component {
  render() {
    return (
      <div className = "title-section">
        <TitleText />
        <AppointmentButton />
        <TitleDisplayImage />
      </div>
    );
  }
}

export default TitleSection;
