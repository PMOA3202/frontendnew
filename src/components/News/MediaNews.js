import React, { Fragment } from "react";
import "./MediaNews.css";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { BsCalendarDate } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const MediaNews = ({ id, title, title1, image, para, date, time }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        title1: title1,
        image: image,
        para: para,
        date: date,
        time: time,
      },
    });
  };
  return (
    <div className="media_news py-md-5 pb-4">
      <Fragment>
        <div className="main-pad pe-md-0">
          <div className="d-flex pt-md-4">
            <h2> {title} </h2>
            <hr />
          </div>
        </div>
        <Container>
          <Carousel className="mt-md-5 mt-3">
            <Carousel.Item>
              <div>
                <img src={image} />
              </div>
              <div className="text">
                <h3> {title1}</h3>
                <div className="d-flex">
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
                <p>{para} </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <img src={image} />
              </div>
              <div className="text">
                <h3> {title1}</h3>
                <div className="d-flex">
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
                <p>{para} </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Fragment>
    </div>
  );
};

export default MediaNews;
