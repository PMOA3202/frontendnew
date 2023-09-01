import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./responsive.css";
import "./Leasing.css";
import Header from "../components/Common/Navbar";
import BannerVideo from "../assets/Home/Banner-video.mp4";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import Dummy from "../assets/Launch/coming.jpg";
import Carousel1 from "../components/Common/Carousel/Carousel1";
import Collection from "../components/Launch/Collection";
import Cooking from "../components/Launch/Cooking";
import Form1 from "../components/Common/Form1";
import PastEvents from "../components/Events/PastEvent";
import Categories from "../components/Home/Categories";
import EventInfo from "../components/Events/EventInfo";
import LeaseInfo from "../components/Leasing/LeaseInfo";

const Leasing = (props) => {
  return (
    <Fragment>
      <div className="leasing">
        <Header />
        <Sidebar />
        <Banner image={LaunchBanner} />
        <LeaseInfo
          title="ABOUT THE SPACE"
          para="Phoenix Marketcity Bangalore, a part of Phoenix Mills Limited is one of the biggest malls in Asia. Phoenix Marketcity was built with the objective of providing unique experiences to its customers. Phoenix Marketcity covers over 300 leading brands in its prime retail and leisure space. Built in an area encompassing 0.13 million square meter the mall boasts of an assorted tenant mix –PVR screens, over 10 large anchor tenants for the first time in the country and brands like Zara, Lifestyle, Marks & Spencer, Pantaloons, Trends, Max, Tommy Hilfiger, Vero Moda, Calvin Klein Jeans, Label Ritu Kumar, Mango, ForeverNew, Promod, EdHardy, Lacoste, Only, Coverstory, AND, Globus, Kazo, GAS, GAP, Global Desi, Taneira, ALDO, Call It Spring, Steve Madden, Charles & Keith, Da Milano, HiDesign, LaSenza, Wacoal, Enamor, Sephora, BobbiBrown, Mac, Kiehls, Forest Essentaisl, Health & Glow, Tanishq, Malabar Gold, TBZ, Alukkas, Bhima, C Krishniah Chetty & Sons, and many others making it the most happening destination in Bangalore. Over the years our pioneering vision and dynamic efforts have been globally recognised with business innovation and excellence awards."
        />
        {/* <Categories /> */}
        <Carousel1 title="FEATURED OUTLETS" image1={Dummy} />
        <br />
        <PastEvents />
        <Form1
          title="Have a question? Connect with us!"
          para="Write to us and we will reach out shortly."
        />
      </div>
    </Fragment>
  );
};

export default Leasing;
