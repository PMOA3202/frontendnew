import React, { Fragment } from "react";
import "../../pages/EventMain.css";
import Container from "react-bootstrap/esm/Container";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

const PastEvents = (props) => {
  return (
    <div className="past_events pb-md-5 pt-3 mt-md-4">
      <Fragment>
        <div className="main-pad">
          <div className="d-flex">
            <h2> EXPLORE OUR PAST EVENTS </h2>
            <hr/>
          </div>
          <div className="row my-md-5 my-4 w-100 ms-0">
            <div className="col-md-3 px-1 mb-2">
                <img src="img/Events/p1.png" />
            </div>
            <div className="col-md-3 px-1 mb-2">
                <img src="img/Events/p2.png" />
            </div>
            <div className="col-md-3 px-1 mb-2">
                <img src="img/Events/p3.png" />
            </div>
            <div className="col-md-3 px-1 mb-2">
                <img src="img/Events/p4.png" />
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default PastEvents;
