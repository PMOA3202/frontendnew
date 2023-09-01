import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./Gift.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import AboutCard from "../components/Gift/AboutCard";
import PheonixCard from "../components/Gift/PheonixCard";
import CorporateEnquiry from "../components/Gift/CorporateEnquiry";
import Faq from "../components/Gift/Faq";

const Gift = (props) => {
  return (
    <Fragment>
      <div className="gift">
        <Header />
        <Sidebar />
        <Banner image={LaunchBanner} />
        <AboutCard />
        <div className="main-pad pb-md-5">
          <div className="gift-card">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <img src="img/category1.jpg" />
                  <div className="text">
                    <h3> Check Balance </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <img src="img/category1.jpg" />
                  <div className="text">
                    <h3> FAQs </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <img src="img/category1.jpg" />
                  <div className="text">
                    <h3> Corporate / Bulk Orders </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PheonixCard />
        <div className="gift-image">
            <img src={LaunchBanner} />
        </div>
        <CorporateEnquiry />
        <Faq />
      </div>
    </Fragment>
  );
};

export default Gift;
