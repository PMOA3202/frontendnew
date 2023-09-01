import React, { Fragment } from "react";
import "./Button3.css";
import Container from "react-bootstrap/esm/Container";

const Button3 = ({ id, title }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
      },
    });
  };
  return (
    <div className="button3">
      <Fragment>
        <button> {title} </button>
      </Fragment>
    </div>
  );
};

export default Button3;
