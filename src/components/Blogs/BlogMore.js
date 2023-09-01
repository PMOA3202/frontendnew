import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./BlogHead.css";
import LaunchBanner from "../../assets/Home/panache1.jpg";
import { BsCalendarDate, BsFillPersonFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Card13 from "../Common/Card/Card13";

const BlogMore = (props) => {
  return (
    <Fragment>
      <div className="blog_more pb-md-5">
        <div className="main-pad pe-md-0">
          <div className="d-flex pt-md-4">
            <h2> MORE FROM MALL OF ASIA </h2>
            <hr />
          </div>
        </div>
        <Container>
          <div className="row my-md-5">
            <div className="col-md-6">
              <a href="/blog-detail">
                <Card13
                  image={"img/offers1.jpg"}
                  title=" Lorem ipsum dolor sit amet, Lorem ipsu consectetur "
                  para="Did you come here for something in particular or just general Riker-bashing? And blowing into"
                  author="Jenny Kiaa"
                  date="02 December 2022"
                  time="3 Min To Read"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="/blog-detail">
                <Card13
                  image={"img/offers1.jpg"}
                  title=" Lorem ipsum dolor sit amet, Lorem ipsu consectetur "
                  para="Did you come here for something in particular or just general Riker-bashing? And blowing into"
                  author="Jenny Kiaa"
                  date="02 December 2022"
                  time="3 Min To Read"
                />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default BlogMore;
