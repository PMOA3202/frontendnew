import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button1 from "../Common/Button/Button1";
import "./BlogView.css";
import Card13 from "../Common/Card/Card13";

function BlogView() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="main-pad blog_view_more pb-md-5">
        <div>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <div className="row px-md-0 px-2 pb-md-5">
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
            </div>
          </Collapse>
        </div>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <div className="view-more">
            <Button1 title="VIEW MORE" />{" "}
          </div>
          {/* 
          <div className="view-less">
            <Button1 title="VIEW LESS" />{" "}
          </div> */}
        </Button>
      </div>
    </>
  );
}

export default BlogView;
