import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "../../pages/Careers.css";

const CareerLife = (props) => {
  return (
    <Fragment>
      <div className="career_life py-md-5 py-4">
      <div className="d-flex pb-md-3 main-pad pe-0 mt-md-5 pt-md-4">
          <h2> LIFE AT THE PHOENIX MILLS </h2>
          <hr />
        </div>
        <div className="main-pad mt-md-5  mt-4">
          <div className="row">
            <div className="col-md-5">
              <div>
                <img src="img/offers1.jpg" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="text">
                <div>
                  <h3> LIFE AT PHOENIX </h3>
                  <p>
                    {" "}
                    Life at Phoenix is dynamic and fun, a place where people
                    love to work, and we truly believe in creating an
                    environment that rejuvenates and reignites. A career with
                    freedom, full of learning and development opportunities and
                    the support to take your career to new heights.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="text">
                <div>
                  <h3>EMPLOYEE WELL BEING </h3>
                  <p>
                    In addition to our competitive basic salaries and bonuses,
                    we never forget the importance of health and well-being. We
                    empower our people and help change lives by creating an
                    environment of high trust and high performance. It’s about
                    encouraging a healthy lifestyle, facilitating a work-life
                    balance, fostering self-development and providing career
                    growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img src="img/offers1.jpg" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div>
                <img src="img/offers1.jpg" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="text">
                <div>
                  <h3> LEARNING AND DEVELOPMENT </h3>
                  <p>
                    We believe that the right people will take the organization
                    in the right direction. Our endeavour has always been to
                    provide an environment that offers avenues to learn and
                    grow. A career at Phoenix means an ocean of opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="text">
                <div>
                  <h3>REWARDS & RECOGNITION</h3>
                  <p>
                    If you crave challenges & display high level of initiative,
                    responsibility and team spirit, we have an exciting basket
                    of rewards & recognition for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img src="img/offers1.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CareerLife;
