import React, { Component } from 'react';
import './TitleDisplayImage.css';
import image1 from "../../resources/how-to-make-short-hair-curly-and-greasy-hair-cuts.jpg";
import image2 from "../../resources/modern-haircuts-boys-sensational-mens-modern-slick-back-hairstyle-amp-haircut-tutorial-2018-mens-of-modern-haircuts-boys.jpg";
import image3 from "../../resources/short-haircut-for-round-face.jpg";

class TitleDisplayImage extends Component {
  constructor() {
    super();
    this.state = {
      images: [image1, image2, image3],
      imageCounter: 0,
      currentImage: image1
    };
  }

  render() {
    setTimeout(() => {
      if (this.state.imageCounter < this.state.images.length-1) {
        this.setState({imageCounter: this.state.imageCounter+1});
      }
      else {
        this.setState({imageCounter: 0});
      }
      console.log(this.state.images[this.state.imageCounter]);
    }, 15000);

    return (
      <div className = "TitleDisplayImage">
        <img src = {this.state.images[this.state.imageCounter]} alt = "titleImage" className = "title-image" />
      </div>
    );
  }
}

export default TitleDisplayImage;
