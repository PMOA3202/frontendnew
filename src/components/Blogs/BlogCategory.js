import React, { Fragment } from "react";
import "./BlogCategory.css";
import Card3 from "../Common/Card/Card3";
import Brand1 from "../../assets/Brands/i1.png";
import Brand2 from "../../assets/Brands/i2.png";
import Brand3 from "../../assets/Brands/i3.png";
import Brand4 from "../../assets/Brands/i4.png";
import Card13 from "../Common/Card/Card13";

const BlogCategory = ({ props }) => {
  return (
    <div className="blog_category py-md-5">
      <Fragment>
        <div className="main-pad pt-md-5">
          <div className="row px-md-0 px-2">
            <div className="col-md-4 col-6 px-md-3 px-1">
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
            <div className="col-md-4 col-6 px-md-3 px-1">
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
            <div className="col-md-4 col-6 px-md-3 px-1">
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
          {/* <Nav.Link href="/brand-detail">
            {" "}
            <Button1 title="VIEW MORE" />{" "}
          </Nav.Link> */}
        </div>
      </Fragment>
    </div>
  );
};

export default BlogCategory;
