import React, { Fragment } from "react";
import Card9 from "../Common/Card/Card9";

function LuxuryHead() {
  return (
    <Fragment>
      <div className="luxury_head pt-md-5 mt-md-4">
        <div className="row w-100 mt-md-0 mt-0 ms-0">
          <div className="col-md-12 px-0 px-md-3">
            <div className="main-pad w-75 mx-auto px-0">
              <div className="row w-100 ms-0">
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <Card9
                    title="APPARREL & ACCESSORIES"
                    image="img/Luxury/exq1.jpg"
                  />
                </div>
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <Card9 title="JEWELLERY" image="img/Luxury/jw.png" />
                </div>
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <Card9 title="WATCHES" image="img/Luxury/exq4.jpg" />
                </div>
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <Card9 title="BAGS & FOOTWARE" image="img/Luxury/exq3.jpg" />
                </div>
              </div>
              <div className="row w-100 ms-0 justify-content-center">
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <Card9
                    title="APPARREL & ACCESSORIES"
                    image="img/Luxury/exq1.jpg"
                  />
                </div>
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <Card9 title="JEWELLERY" image="img/Luxury/jw.png" />
                </div>
                <div className="col-md-3 col-6 px-md-2 px-1">
                  <Card9 title="WATCHES" image="img/Luxury/exq4.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LuxuryHead;
