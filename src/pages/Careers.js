import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./Careers.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import Form1 from "../components/Common/Form1";
import Button1 from "../components/Common/Button/Button1";
import Button2 from "../components/Common/Button/Button2";
import CareerLife from "../components/Careers/CareerLife";
import CareerDo from "../components/Careers/CareerDo";

const Careers = (props) => {
  return (
    <Fragment>
      <div className="careers">
        <Header />
        <Sidebar />
        <Banner
          image={LaunchBanner}
          title="Find a perfect job that your deserve. Join the Phoenix team today!!"
        />
        <a>
          <Button2 title="APPLY NOW" />
        </a>
        <CareerLife />
        <CareerDo />
        <div className="join text-center pb-md-5 pb-4">
          <h4> Join the team that is revolutionizing the retail space </h4>
          <a>
            <Button2 title="APPLY NOW" />
          </a>
        </div>
        <Form1
          title="Have a question? Connect with us!"
          para="Write to us and we will reach out shortly."
        />
      </div>
    </Fragment>
  );
};

export default Careers;
