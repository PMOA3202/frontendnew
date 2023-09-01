import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import Grandeur1 from "../../assets/Home/grandeur1.jpg";
import Grandeur2 from "../../assets/Home/grandeur2.jpg";
import Grandeur3 from "../../assets/Home/grandeur3.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./Grandeur.css";

const Grandeur = (props) => {
  return (
    <Fragment>
      <div className="grandeur pt-xl-4 pb-md-4 pt-4 pb-2">
        <div className="main-pad">
          <div className="d-flex">
            <h2 className="py-md-4 pb-3 text-center w-100">
              {" "}
              WORLD OF GRANDEUR
            </h2>
            {/* <hr /> */}
          </div>
          <Carousel>
            <Carousel.Item>
              <div className="row mt-xl-5 mt-md-4 mb-md-3 ms-md-0">
                
                <div className="col-md-6 px-md-0">
                  <img src={Grandeur1} className="w-100" />
                </div>
                <div className="col-md-6 mb-md-4 mb-3 px-md-3">
                  <div className="grandeur-text ps-md-5">
                    <div>
                      <h3> LUXURY BOULEVARD </h3>
                      <p className="mt-md-4 mt-2">
                        Mall Of Asia makes a statement at every turn, every
                        corner. You’ll discover a world of premium vintage
                        opulence at Luxury Boulevard, featuring high end
                        designer stores in a walk-through reminiscent of the
                        world’s best streets for luxury shopping. Visitors get
                        to immerse themselves in an iconic retail environment
                        featuring creative use of elements of nature and
                        technology – embracing refinement and the spirit of the
                        times.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-md-0 mt-md-3 d-none d-sm-block">
                  <img src={Grandeur2} className="w-100" />
                </div>
                <div className="col-md-6 px-md-3 mt-md-3  d-none d-sm-block">
                  <img src={Grandeur3} className="w-100" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row mt-xl-5 mt-md-4 mb-md-3 ms-md-0">
                <div className="col-md-6 px-md-0">
                  <img src={Grandeur1} className="w-100" />
                </div>
                <div className="col-md-6 mb-md-4 mb-3 px-md-3">
                  <div className="grandeur-text ps-md-5">
                    <div>
                      <h3> LUXURY BOULEVARD </h3>
                      <p className="mt-md-4 mt-2">
                        Mall Of Asia makes a statement at every turn, every
                        corner. You’ll discover a world of premium vintage
                        opulence at Luxury Boulevard, featuring high end
                        designer stores in a walk-through reminiscent of the
                        world’s best streets for luxury shopping. Visitors get
                        to immerse themselves in an iconic retail environment
                        featuring creative use of elements of nature and
                        technology – embracing refinement and the spirit of the
                        times.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-md-0 mt-md-3 d-none d-sm-block">
                  <img src={Grandeur2} className="w-100" />
                </div>
                <div className="col-md-6 px-md-3 mt-md-3 d-none d-sm-block">
                  <img src={Grandeur3} className="w-100" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};

export default Grandeur;
