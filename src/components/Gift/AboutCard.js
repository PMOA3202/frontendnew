import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./AboutCard.css";
import Button3 from "../Common/Button/Button3";

const AboutCard = (props) => {
  return (
    <Fragment>
      <div className="about_card py-md-5 py-5">
        <div class="main-pad pt-md-5">
          <div className="row">
            <div className="col-md-6">
              <img src="img/category1.jpg" />
            </div>
            <div className="col-md-6">
              <div className="text">
                <div>
                  <div className="d-flex">
                    <h2> ABOUT CARD </h2>
                    <hr />
                  </div>
                  <p>
                    Experience the delight for the Gift card that gives you
                    endless choices from 1000+ brands for shopping, dining and
                    entertainment redeemable at all our Phoenix Malls across
                    India.
                  </p>
                  <Button3 title="BUY NOW" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutCard;
