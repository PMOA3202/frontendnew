import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./Luxury.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import Form1 from "../components/Common/Form1";
import LuxuryBanner from "../assets/Luxury/banner.jpg";
import Culinary1 from "../assets/Luxury/culinary1.jpg";
import Culinary2 from "../assets/Luxury/culinary2.jpg";
import Glory from "../assets/Luxury/glory.jpg";
import LuxCategory from "../components/Luxury/LuxCategory";
import Carousel1 from "../components/Common/Carousel/Carousel1";
import LuxEvents from "../components/Luxury/LuxEvents";

const Luxury = (props) => {
  return (
    <Fragment>
      <div className="luxury">
        <Header />
        <Sidebar />
        <Banner
          title="Louis Vuitton"
          para="Explore the newest, most exclusive designs at LV, synonymous with quality and class"
          image={LuxuryBanner}
        />
        <LuxCategory />
        <div className="jewellery_watch">
          <img src={Glory} />
          <div className="text">
            <h2>
              SHINING <br /> <span>Glory</span>
            </h2>
            <a href="">
              <button> EXPLORE MORE </button>
            </a>
          </div>
        </div>
        <Carousel1 image1={Culinary1} image2={Culinary2} />
        <div className="culinary_adv">
          <div>
            <h4> ENRICHING YOUR </h4>
            <h3> Culinary</h3>
            <p> ADVENTURE </p>
            <a href="">
              {" "}
              <button type="button"> EXPLORE MORE </button>{" "}
            </a>
          </div>
        </div>
        <LuxEvents />
        <Form1
          title="Luxury is a part of our identity."
          para="If you have any questions, ask us here!"
        />
      </div>
    </Fragment>
  );
};

export default Luxury;
