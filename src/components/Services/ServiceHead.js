import React, { Fragment } from "react";
import "./ServiceHead.css";

const ServiceHead = ({ id, title, para, image }) => {
  const AddCurb = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        para: para,
        image: image,
      },
    });
  };
  return (
    <Fragment>
      <div className="service_head pt-md-4 pb-4">
        <div className="main-pad pb-md-4">
          <div className="row mt-xl-5 my-md-5 pt-md-4 pt-xl-3 mt-4 mb-xl-4 w-100 ms-0">
            <div className="col-md-6 px-0 px-md-3">
              <img src={image}/>
            </div>
            <div className="col-md-6 px-0 px-md-3">
              <div className="text">
                <div>
                  <h3>{title} </h3>
                  <hr />
                  <p>
                    {para}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServiceHead;
