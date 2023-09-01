import React, { Fragment } from "react";
import "./Panache.css";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Panache1 from "../../assets/Home/panache1.jpg";
import Panache2 from "../../assets/Home/panache2.jpg";
import Panache3 from "../../assets/Home/panache3.jpg";
import Button2 from "../Common/Button/Button2";

const Panache = (props) => {
  return (
    <Fragment>
      <div className="panache w-100 pb-xl-5 pb-md-3 ">
        <div className="main-pad">
          <div className="d-flex pt-md-4">
            <h2 className="py-md-3"> PANACHE </h2>
          </div>
          <div className="row pt-md-5">
            <div className="col-md-6 pe-0">
              <Carousel>
                <Carousel.Item>
                  <img src={Panache1} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Panache2} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Panache3} />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-6">
              <div className="panache-text">
                <h3 className="mt-md-2">REDEFINING LUXURY</h3>
                <p className="mt-md-3 mb-md-4 mt-2">
                  A dizzying array of top brands-homegrown <br /> and from
                  around the world!
                </p>
                <Link href="">
                  <Button2 title="EXPLORE" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Panache;
