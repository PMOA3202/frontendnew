import React, { Fragment } from "react";
import "./Card9.css";

const Card10 = ({ id, title, image }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        image: image,
      },
    });
  };
  return (
    <div className="card10 mb-md-4">
      <Fragment>
        <div className="card text-center border-0">
          <div>
            <img src={image} />
          </div>
          <h3> {title}</h3>
        </div>
      </Fragment>
    </div>
  );
};

export default Card10;
