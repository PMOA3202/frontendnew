import React, { Fragment } from "react";
import "./ServiceCard.css";

const ServiceCard = ({
  id,
  title,
  image1,
  para1,
  image2,
  para2,
  image3,
  para3,
  image4,
  para4,
}) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        image1: image1,
        para1: para1,
        image2: image2,
        para2: para2,
        image3: image3,
        para3: para3,
        image4: image4,
        para4: para4,
      },
    });
  };
  return (
    <div className="service_card mb-md-4">
      <Fragment>
        <div className="main-pad">
          <div className="d-flex">
            <h2> {title} </h2>
            <hr />
          </div>
          <div className="row w-100 mt-md-5 mt-4">
            <div className="col-md-6">
              <div className="card">
                <label> 1. </label>
                <div className="d-flex">
                  <div>
                    <img src={image1} />
                  </div>
                  <p>{para1}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <label>2. </label>
                <div className="d-flex">
                  <div>
                    <img src={image2} />
                  </div>
                  <p>{para2}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <label>3. </label>
                <div className="d-flex">
                  <div>
                    <img src={image3} />
                  </div>
                  <p>{para3}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <label> 4. </label>
                <div className="d-flex">
                  <div>
                    <img src={image4} />
                  </div>
                  <p>{para4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default ServiceCard;
