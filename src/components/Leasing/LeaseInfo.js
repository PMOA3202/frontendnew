import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./LeaseInfo.css";

const LeaseInfo = ({ id, title, para }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        para: para,
      },
    });
  };
  return (
    <Fragment>
      <div className="lease_info pt-md-5 pb-md-0 py-4">
        <div className="main-pad pe-0 mt-md-4">
          <div className="d-flex">
            <h2>{title} </h2>
            <hr />
          </div>
        </div>
        <div className="main-pad mt-md-4">
          <p>{para}</p>

          <div className="row">
            <div className="col-md-4">
              <div className="text-center">
                <h3> Email </h3>
                <a>
                  <p> basial@pheonixmills.com</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h3> Weekdays</h3>
                <a>
                  <p> 10:00am - 11:00pm</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h3> Weekends</h3>
                <a>
                  <p> 10:00am - 11:00pm</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LeaseInfo;
