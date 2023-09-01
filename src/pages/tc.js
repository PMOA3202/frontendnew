import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./tc.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import MediaNews from "../components/News/MediaNews";
import PressRelease from "../components/News/PressRelease";
import TermsTab from "../components/Terms/TermsTab";

const TermsConditions = (props) => {
  return (
    <Fragment>
      <div className="terms_condition">
        <Header />
        <Sidebar />
        <Banner image={LaunchBanner} title="Terms & Conditions" />
        <TermsTab />
      </div>
    </Fragment>
  );
};

export default TermsConditions;
