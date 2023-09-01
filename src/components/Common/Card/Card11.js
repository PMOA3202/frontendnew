import React, { Fragment } from "react";
import "./Card11.css";

const Card11 = ({ id, title, para, image }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        image: image,
        para: para,
      },
    });
  };
  return (
    <div className="card11 mb-md-4">
      <Fragment>
        <div className="card border-0">
          <div>
            <img src={image} />
          </div>
          <h3> {title}</h3>
          <p> {para} </p>
        </div>
      </Fragment>
    </div>
  );
};

export default Card11;
