import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./responsive.css";
import "./OffersPackages.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import Form1 from "../components/Common/Form1";
import Card1 from "../components/Common/Card/Card1";

const OfferPackages = (props) => {
  return (
    <div className="offers_packages">
      <Fragment>
        <Header />
        <Sidebar />
        <Banner image={LaunchBanner} />
        <div className="main-pad pt-md-5">
          <div className="row py-md-5">
            <div className="col-md-4 col-12">
              <Card1
                image={"img/offers1.jpg"}
                title=" Brand Name "
                subtitle="EXPLORE THE NEW SPRING COLLECTION"
                para="20 Jan 2023 to 31 Jan 2023"
              />
            </div>
            <div className="col-md-4 col-12">
              <Card1
                image={"img/offers1.jpg"}
                title=" Brand Name "
                subtitle="EXPLORE THE NEW SPRING COLLECTION"
                para="20 Jan 2023 to 31 Jan 2023"
              />
            </div>
            <div className="col-md-4 col-12">
              <Card1
                image={"img/offers1.jpg"}
                title=" Brand Name "
                subtitle="EXPLORE THE NEW SPRING COLLECTION"
                para="20 Jan 2023 to 31 Jan 2023"
              />
            </div>
          </div>
        </div>
        <div className="main-pad pe-0">
          <div className="d-flex">
            <h2> PACKAGES </h2>
            <hr />
          </div>
        </div>
        <div className="main-pad">
          <div className="row py-md-5 my-md-4">
            <div className="col-md-4 col-12">
              <Card1
                image={"img/offers1.jpg"}
                title=" Brand Name "
                subtitle="EXPLORE THE NEW SPRING COLLECTION"
                para="20 Jan 2023 to 31 Jan 2023"
              />
            </div>
            <div className="col-md-4 col-12">
              <Card1
                image={"img/offers1.jpg"}
                title=" Brand Name "
                subtitle="EXPLORE THE NEW SPRING COLLECTION"
                para="20 Jan 2023 to 31 Jan 2023"
              />
            </div>
            <div className="col-md-4 col-12">
              <Card1
                image={"img/offers1.jpg"}
                title=" Brand Name "
                subtitle="EXPLORE THE NEW SPRING COLLECTION"
                para="20 Jan 2023 to 31 Jan 2023"
              />
            </div>
          </div>
        </div>
        <Form1
          title="Have a question? Connect with us!"
          para="Write to us and we will reach out shortly."
        />
      </Fragment>
    </div>
  );
};

export default OfferPackages;
