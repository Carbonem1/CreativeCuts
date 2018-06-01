import React, { Component } from 'react';
import './TitleSection.css';
import TitleDisplayImage from "./TitleDisplayImage";

class TitleSection extends Component {
  render() {
    return (
      <div className = "TitleSection">
        <TitleDisplayImage />
      </div>
    );
  }
}

export default TitleSection;
