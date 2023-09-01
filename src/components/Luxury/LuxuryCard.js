import React, { Fragment } from "react";
import "./LuxCategory.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button1 from "../Common/Button/Button1";
import Card3 from "../Common/Card/Card3";
import Carousel1 from "../Common/Carousel/Carousel1";

function LuxuryCard() {
  return (
    <Fragment>
      <div className="luxury_card lux_category pt-md-5 mt-md-4">
        <div className="row w-100 mt-md-0 mt-0 ms-0">
          <div className="col-md-12 px-0 px-md-3">
            <div className="main-pad">
              <div className="row w-100 ms-0">
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l1.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l2.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l3.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <a href="/luxury-details">
                    <Card3
                      image="img/Luxury/l4.png"
                      location="The Abcd Zone"
                      floor="First Floor"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LuxuryCard;
