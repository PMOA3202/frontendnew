import React, { Fragment } from "react";
import "./Help.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button1 from "../Common/Button/Button1";

const Help = (props) => {
  return (
    <Fragment>
      <div className="help pt-md-4 pb-4">
        <div className="d-flex main-pad pe-0">
          <h2> NEED HELP? </h2>
          <hr />
        </div>
        <div className="main-pad pb-md-4">
          <div className="row mt-xl-5 my-md-5 pt-md-4 pt-xl-3 mt-4 mb-xl-4 w-100 ms-0">
            <div className="col-md-6 px-0 pe-md-3">
              <img src="img/help.jpg" />
              {/* <div className="gborder"></div> */}
            </div>
            <div className="col-md-6 px-0 px-md-3">
              <div className="text">
                <div>
                  <h3>A Personal Guide on your Smartphone </h3>
                  <p>
                    {" "}
                    The Mall of Asia Digital Concierge service is your personal
                    secretary. It will assist you in making informed shopping
                    decisions and notifies you of any limited-time offers and
                    new arrivals at the mall. It also helps you choose the ideal
                    gift for your loved ones for any occasion. All you need to
                    do is type in your query and relax as our concierge answers
                    your queries. Just scan the QR code to start using the
                    Digital Concierge.
                  </p>
                  <Link>
                    <Button1 title="CHAT WITH CONCIERGE" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Help;
