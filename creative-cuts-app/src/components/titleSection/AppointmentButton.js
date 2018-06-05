import React, { Component } from 'react';
import './AppointmentButton.css';

class AppointmentButton extends Component {
  render() {
    return (
      <button className = "appointment-button">
        <p className = "button-text"> Book Appointment </p>
      </button>
    );
  }
}

export default AppointmentButton;
