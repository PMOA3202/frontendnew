import React, { Fragment } from "react";
import "./Card7.css";
import Container from "react-bootstrap/esm/Container";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillLike } from "react-icons/ai";
import Button2 from "../Button/Button2";

const MovieCard = ({ id, title, para, subtitle, image }) => {
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
    <div className="movie_card pt-md-5 pb-md-4 pt-3">
      <Fragment>
        <div className="card">
          <div>
            <img src={image} />
          </div>
          
          <div className="overlay">
            <div>
              <h4> {subtitle} </h4>
              <a href="">
                <Button2 title="BOOK NOW" />
              </a>
            </div>
          </div>
          
        </div>
        <div className="text py-md-3 py-3">
            <h3> {title}</h3>
            <p>{para} </p>
          </div>
      </Fragment>
    </div>
  );
};

export default MovieCard;
