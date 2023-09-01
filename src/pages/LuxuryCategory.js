import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./Luxury.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LuxuryBanner from "../assets/Luxury/banner.jpg";
import Help from "../components/Home/Help";
import LuxuryCard from "../components/Luxury/LuxuryCard";
import LuxuryHead from "../components/Luxury/LuxuryHead";

const LuxuryCategory = (props) => {
  return (
    <Fragment>
      <div className="luxury_category">
        <Header />
        <Sidebar />
        <Banner
          image={LuxuryBanner}
        />
        <div className="culinary_adv">
          <div>
            <h4> A selection that <br/> leaves you spolit </h4>
            <h3> Choice</h3>
            <p> UPPER GROUND FLOOR </p>
          </div>
        </div> 
        <LuxuryHead /> 
        <LuxuryCard />     
        <Help />
      </div>
    </Fragment>
  );
};

export default LuxuryCategory;
