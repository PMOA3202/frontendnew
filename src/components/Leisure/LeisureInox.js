import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Inox from "../Home/Inox";
import InoxMob from "../Home/InoxMob";
import "../../pages/Leisure.css";
import Carousel3 from "../Common/Carousel/Carousel3";
import MovieCard from "../Common/Card/Card7";

const LeisureInox = (props) => {
  return (
    <Fragment>
      <div className="leisure_inox mt-md-5 mt-4">
        <div className="main-pad">
          <div className="d-flex py-md-3">
            <h2> NOW RUNNING </h2>
            {/* <hr /> */}
          </div>
          <div className="row w-100 ms-0">
            <div className="col-md-3 px-md-3 px-0">
              <MovieCard title="EVERYTHING EVERYWHERE ALL AT ONCE" subtitle="EVERYTHING EVERYWHERE ALL AT ONCE" para="English | Telugu | Kannada | Tamil | Malyalam" image="img/Leisure/upcoming.png" />
            </div>
          </div>
        </div>

        {/* <Inox />
        <InoxMob />
        <Carousel3
          title="UPCOMING MOVIES"
          subtitle="Coming to theatres on 25th March 2023"
          button="PRE-BOOK"
          image="img/Leisure/upcoming.png"
        /> */}
      </div>
    </Fragment>
  );
};

export default LeisureInox;
