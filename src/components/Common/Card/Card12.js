import React, { Fragment } from "react";
import "./Card12.css";
import Container from "react-bootstrap/esm/Container";

const Card12 = ({ id, title, para, image }) => {
  const addBanner = () => {
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
    <div className="card12">
      <Fragment>
        <div className="card">
          <div>
            <img className="img" src={image} />
          </div>
          <div className="text">
            <h4> {title} </h4>
            <p className="mt-md-2 mt-2">{para}</p>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Card12;
