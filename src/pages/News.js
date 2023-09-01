import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./News.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import MediaNews from "../components/News/MediaNews";
import PressRelease from "../components/News/PressRelease";

const News = (props) => {
  return (
    <Fragment>
      <div className="news">
        <Header />
        <Sidebar />
        <Banner image={LaunchBanner} />
        <MediaNews
          title="MEDIA AND NEWS"
          title1="Did you come here for something in particular or just general Riker-bashing?"
          para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi "
          image={LaunchBanner}
          date="02 december 2022"
          time="3 min. to read"
        />
        <PressRelease />
      </div>
    </Fragment>
  );
};

export default News;
