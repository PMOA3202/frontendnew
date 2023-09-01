import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button1 from "../Common/Button/Button1";
import Card3 from "../Common/Card/Card3";
import Brand1 from "../../assets/Brands/i1.png";
import Brand2 from "../../assets/Brands/i2.png";
import Brand3 from "../../assets/Brands/i3.png";
import Brand4 from "../../assets/Brands/i4.png";
import "./BrandViewMore.css";

function BrandView() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="main-pad brand_view_more">
        <div>
          <Collapse in={open}>
            <div id="example-collapse-text">
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

export default BrandView;
