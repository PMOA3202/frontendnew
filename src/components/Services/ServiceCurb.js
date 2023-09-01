import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./ServiceTab.css";
import ServiceHead from "./ServiceHead";
import MallServices from "./MallServices";

const ServiceCurb = (props) => {
  return (
    <Fragment>
      <div className="service_curb">
        <ServiceHead
          title="CURB SIDE PICK-UP"
          para="Enjoy your favorite brands from the comfort of your car!"
          image="img/help.jpg"
        />
        <Container>
          <div className="curb_cards pb-md-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div>
                    <img src="img/Services/bag.png" />
                  </div>
                  <h4> PLACE YOUR ORDER </h4>
                  <p>
                    Discover the best of Fashion, Apparel, Cosmetics, Skincare
                    Jewelry, Electronics, Food & much more from 300+ brands at
                    Mall of Asia, Bangalore
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div>
                    <img src="img/Services/time.png" />
                  </div>
                  <h4> ARRIVE AT MALL MAIN GATE </h4>
                  <p>
                    Confirm your pick-up time and preferred mode of payment with
                    the store manager. Visit the Curbside Pickup Point located
                    at mall main gate.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div>
                    <img src="img/Services/package.png" />
                  </div>
                  <h4> RECIEVE PACKAGE </h4>
                  <p>
                    The store representative will hand over your package safely
                    at the “Curbside Pickup” point at the Mall’s main gate at
                    the expected time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <MallServices />
      </div>
    </Fragment>
  );
};

export default ServiceCurb;
