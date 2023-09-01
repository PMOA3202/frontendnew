import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Carousel3 from "../Common/Carousel/Carousel3";
import ParkCard from "../Common/Card/Card8";

const LeisurePark = (props) => {
  return (
    <Fragment>
      <div className="leisure_park pt-md-5 pb-md-4 pt-4" >
        <div className="main-pad">
          <div className="d-flex py-md-2">
            <h2> UPCOMING EVENTS </h2>
            {/* <hr /> */}
          </div>
          <div className="row mb-md-3">
            <div className="col-md-4">
              <ParkCard
                title="Bangalore Fashion Show"
                subtitle="Brand Launch"
                para="Date: 02nd Aug 2023"
                image="img/Leisure/upcoming.png"
              />
            </div>
          </div>
        </div>
        <Carousel3 image="img/Leisure/upcoming.png" />
      </div>
    </Fragment>
  );
};

export default LeisurePark;
