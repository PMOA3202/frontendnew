import React, { Fragment } from "react";
import "./LuxCategory.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button1 from "../Common/Button/Button1";
import Card3 from "../Common/Card/Card3";
import Carousel1 from "../Common/Carousel/Carousel1";

function LuxCategory() {
  return (
    <Fragment>
      <div className="lux_category py-md-5 mt-md-4">
        <div className="row w-100 mt-md-0 mt-0 ms-0">
          <div className="col-md-6 px-0">
            <Carousel1
              image1="img/Luxury/exq1.jpg"
              image2="img/Luxury/exq2.jpg"
            />

            <div className="category-text">
              <h3>
                {" "}
                EVERYTHING <br /> <span>Exquisite</span>{" "}
              </h3>
            </div>
          </div>
          <div className="col-md-6 px-0 px-md-3">
            <Container>
              <div className="row w-100 ms-0">
                <div className="col-md-6 col-6 px-md-3 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l1.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-6 px-md-3 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l2.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-6 px-md-3 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l3.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-6 px-md-3 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l4.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
              </div>
            </Container>
            <a href="/luxury-category">
              {" "}
              <button> SEE MORE </button>{" "}
            </a>
          </div>
        </div>
        <div className="row w-100 mt-md-5 ms-0 row-reverse">
          <div className="col-md-6 px-md-3 px-0">
            <Container>
              <div className="row w-100 ms-0 mt-md-0 mt-1">
                <div className="col-md-6 col-6 px-md-3 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l5.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-6 px-md-3 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l6.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-6 px-md-3 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l7.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-6 px-md-3 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l8.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
              </div>
            </Container>
            <a href="/luxury-category">
              {" "}
              <button> SEE MORE </button>{" "}
            </a>
          </div>
          <div className="col-md-6 px-0">
            <Carousel1
              image1="img/Luxury/exq3.jpg"
              image2="img/Luxury/exq4.jpg"
            />
            <div className="category-text">
              <h3>
                {" "}
                STEP INTO YOUR <br /> <span>power</span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LuxCategory;
