import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./PheonixCard.css";
import Card11 from "../Common/Card/Card11";

const PheonixCard = (props) => {
  return (
    <Fragment>
      <div className="pheonix_card py-md-4 pb-md-5 py-5">
        <div className="main-pad pe-0">
          <div className="d-flex">
            <h2>HOW PHOENIX CARD CAN HELP YOU </h2>
            <hr />
          </div>
        </div>
        <div class="main-pad">
          <div className="row mt-md-5">
            <div className="col-md-4">
              <Card11
                title="Enjoy shopping above and beyond your imagination"
                image="img/category1.jpg"
                para="Shop to your heart’s content. Rejoice in memorable shopping and entertainment experiences with Phoenix Gift Card pre-loaded with balance and 3 years of validity."
              />
            </div>
            <div className="col-md-4">
              <Card11
                title="There’s so much more for the whole family to enjoy"
                image="img/category1.jpg"
                para="A multitude of incredible choices from 1000+ brands. At Phoenix Malls, there’s something for everyone."
              />
            </div>
            <div className="col-md-4">
              <Card11
                title="Truly delicious, tangy food just a swipe away"
                image="img/category1.jpg"
                para="A meal that is straight out of your dreams. Savour an eclectic spread of food on the taste tour at any of our Phoenix Malls across India."
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PheonixCard;
