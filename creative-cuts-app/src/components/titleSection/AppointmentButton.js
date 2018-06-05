import React, { Component } from 'react';
import './AppointmentButton.css';

class AppointmentButton extends Component {
  constructor() {
    super();

    this.toggleVisible = this.toggleVisible.bind(this)

    this.state = {
      visible: true,
    };
  }

  toggleVisible() {
    const currentState = this.state.visible;
    this.setState({visible: !currentState});
  }

  render() {
    const isVisible = this.state.visible;
    const button = isVisible ? (
      <button className = "appointment-button" onClick = {this.toggleVisible}>
        <p className = "button-text"> Book Appointment </p>
      </button>
    ) : (
      <a></a>
    );
    return (
      <div>
        {button}
      </div>
    );
  }
}

export default AppointmentButton;
