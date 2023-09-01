import React, { Fragment } from "react";
import "./DineCategory.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import Card4 from "../Common/Card/Card4";
import Dine1 from "../../assets/Dine/dine1.png";
import Dine2 from "../../assets/Dine/dine2.png";
import Dine3 from "../../assets/Dine/dine3.png";
import Button1 from "../Common/Button/Button1";

const DineCategory = ({ props }) => {
  return (
    <div className="dine_category py-xl-5 pt-md-4 pb-md-5 py-4">
      <Fragment>
        <div className="main-pad">
          <div className="row">
            <div className="col-md-4">
              <a href="/dine-detail">
                <Card4
                  category="CAFE"
                  title="CAFE TESU"
                  image={Dine1}
                  location="The Abcd Zone"
                  floor="First Floor"
                />
              </a>
            </div>
            <div className="col-md-4">
              <a href="/dine-detail">
                <Card4
                  category="RESTAURANT"
                  title="BUKHARA"
                  image={Dine2}
                  location="The Abcd Zone"
                  floor="First Floor"
                />
              </a>
            </div>
            <div className="col-md-4">
              <a href="/dine-detail">
                <Card4
                  category="FINE-DINE"
                  title="ANARDANA"
                  image={Dine3}
                  location="The Abcd Zone"
                  floor="First Floor"
                />
              </a>
            </div>
          </div>
          <Nav.Link>
            {" "}
            <Button1 title="VIEW MORE" />{" "}
          </Nav.Link>
        </div>
      </Fragment>
    </div>
  );
};

export default DineCategory;
