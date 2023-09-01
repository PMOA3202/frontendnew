import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./PressRelease.css";
import Card13 from "../Common/Card/Card13";

export class PressRelease extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  render() {
    return (
      <div className="press_release pb-md-5 pt-md-0 pb-4">
        <div className="main-pad pe-md-0">
          <div className="d-flex pt-md-4">
            <h2>PRESS RELEASE </h2>
            <hr />
          </div>
        </div>
        <div className="main-pad">
          <div class="container-fluid">
            <OwlCarousel
              items={2}
              className="owl-theme mt-md-5 pt-md-0 my-3"
              loop
              nav
              autoplay
              margin={25}
              responsive={this.state.responsive}
            >
              <div>
                <Card13
                  image={"img/offers1.jpg"}
                  title=" Lorem ipsum dolor sit amet, Lorem ipsu consectetur "
                  para="Did you come here for something in particular or just general Riker-bashing? And blowing into"
                  author="Jenny Kiaa"
                  date="02 December 2022"
                  time="3 Min To Read"
                />
              </div>
              <div>
                <Card13
                  image={"img/offers1.jpg"}
                  title=" Lorem ipsum dolor sit amet, Lorem ipsu consectetur "
                  para="Did you come here for something in particular or just general Riker-bashing? And blowing into"
                  author="Jenny Kiaa"
                  date="02 December 2022"
                  time="3 Min To Read"
                />
              </div>
              <div>
                <Card13
                  image={"img/offers1.jpg"}
                  title=" Lorem ipsum dolor sit amet, Lorem ipsu consectetur "
                  para="Did you come here for something in particular or just general Riker-bashing? And blowing into"
                  author="Jenny Kiaa"
                  date="02 December 2022"
                  time="3 Min To Read"
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default PressRelease;
