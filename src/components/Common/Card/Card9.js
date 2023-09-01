import React, { Fragment } from "react";
import "./Card9.css";
import Button2 from "../Button/Button2";

const Card9 = ({ id, title, para, subtitle, image }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        para: para,
        subtitle: subtitle,
        image: image,
      },
    });
  };
  return (
    <div className="card9 mb-md-4">
      <Fragment>
        <div className="card">
          <div>
            <img src={image} />
          </div>
          <div className="text py-md-3 py-3">
            <h3> {title}</h3>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Card9;
