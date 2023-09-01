import React, { Fragment } from "react";
import "./BrandsCategory.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Card3 from "../Common/Card/Card3";
import Brand1 from "../../assets/Brands/i1.png";
import Brand2 from "../../assets/Brands/i2.png";
import Brand3 from "../../assets/Brands/i3.png";
import Brand4 from "../../assets/Brands/i4.png";
import Button1 from "../Common/Button/Button1";
import View from "./BrandViewMore";

const BrandsCategory = ({ props }) => {
  return (
    <div className="brands_category ">
      <Fragment>
        <div className="main-pad ">
          <div className="row px-md-0 px-2">
            <div className="col-md-3 col-6 px-md-3 px-1">
              <a href="/brand-detail">
                <Card3
                  category="FASHION"
                  image={Brand1}
                  location="The Abcd Zone"
                  floor="First Floor"
                />
              </a>
            </div>
            <div className="col-md-3 col-6 px-md-3 px-1">
              <a href="/brand-detail">
                <Card3
                  category="FASHION"
                  image={Brand2}
                  location="The Abcd Zone"
                  floor="First Floor"
                />
              </a>
            </div>
            <div className="col-md-3 col-6 px-md-3 px-1">
              <a href="/brand-detail">
                <Card3
                  category="FASHION"
                  image={Brand3}
                  location="The Abcd Zone"
                  floor="First Floor"
                />
              </a>
            </div>
            <div className="col-md-3 col-6 px-md-3 px-1">
              <a href="/brand-detail">
                <Card3
                  category="FASHION"
                  image={Brand4}
                  location="The Abcd Zone"
                  floor="First Floor"
                />
              </a>
            </div>
          </div>
          {/* <Nav.Link href="/brand-detail">
            {" "}
            <Button1 title="VIEW MORE" />{" "}
          </Nav.Link> */}
        </div>
      </Fragment>
    </div>
  );
};

export default BrandsCategory;
