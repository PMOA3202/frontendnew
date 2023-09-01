import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./ServiceTab.css";
import ServiceHead from "./ServiceHead";
import MallServices from "./MallServices";
import ServiceCard from "./ServiceCard";

const ServiceShopper = (props) => {
  return (
    <Fragment>
      <div className="service_delivery">
        <ServiceHead
          title="PERSONAL SHOPPER"
          para="The mall’s in-house Fashion Stylist will help you style and recommend the perfect looks you need as per your requirement. With the latest fashion advice & access to all the fresh styles, you can get a shopping experience like no other! All you need to do is book an appointment and our team of fashion stylists will get the rest done for you."
          image="img/help.jpg"
        />
        <ServiceCard
          title="HOW IT WORKS"
          image1="img/Services/i1.png"
          para1="Fill out the Personal Shopper request form here."
          image2="img/Services/i2.png"
          para2="Phoenix Marketcity’s expert stylist will get in touch with you for more details and recommendations."
          image3="img/Services/i3.png"
          para3="Based on your requirement, the stylist will take you on a virtual shopping tour on a video call."
          image4="img/Services/i4.png"
          para4="You can choose your favorite products, pay the store directly and have the products delivered to your doorstep or pick them up from the curbside pickup point*"
        />
        <MallServices />
      </div>
    </Fragment>
  );
};

export default ServiceShopper;
