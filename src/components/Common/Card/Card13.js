import React, { Fragment } from "react";
import "./Card13.css";
import Container from "react-bootstrap/esm/Container";
import { BsCalendarDate, BsFillPersonFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const Card13 = ({ id, title, para, image, date, time, author }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        para: para,
        image: image,
        date: date,
        time: time,
        author: author,
      },
    });
  };
  return (
    <div className="card13">
      <Fragment>
        <div className="card">
          <h4> {title} </h4>
          <div>
            <img className="img" src={image} />
          </div>
          <div className="text">
            <div className="d-flex">
              <label>
                <BsFillPersonFill /> {author}{" "}
              </label>
              <span> | </span>{" "}
              <label>
                <BsCalendarDate />
                {date}{" "}
              </label>{" "}
              <span> | </span>{" "}
              <label>
                {" "}
                <BiTimeFive /> {time}
              </label>
            </div>
            <p className="mt-md-3 mt-2">{para}</p>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Card13;
