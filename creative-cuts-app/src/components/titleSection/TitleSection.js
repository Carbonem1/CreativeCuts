import React, { Component } from 'react';
import './TitleSection.css';
import TitleDisplayImage from "./TitleDisplayImage";

class TitleSection extends Component {
  render() {
    return (
      <div className = "TitleSection">
        <p> TitleSection! </p>
        <TitleDisplayImage />
      </div>
    );
  }
}

export default TitleSection;
