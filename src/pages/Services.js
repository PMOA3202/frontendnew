import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./Services.css";
import Header from "../components/Common/Navbar";
import Help from "../components/Home/Help";
import Sidebar from "../components/Common/NavbarMob";
import Form1 from "../components/Common/Form1";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import ServiceTab from "../components/Services/ServiceTab";

const Services = (props) => {
  return (
    <div className="services">
      <Fragment>
        <Header />
        <Sidebar />
        <Banner image={LaunchBanner} />
        <ServiceTab />
        <Help />
        <Form1 title="Luxury is a part of our identity." para="If you have any questions, ask us here!" />
      </Fragment>
    </div>
  );
};

export default Services;
