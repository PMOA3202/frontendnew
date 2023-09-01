import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./ServiceTab.css";
import ServiceHead from "./ServiceHead";
import MallServices from "./MallServices";
import ServiceCard from "./ServiceCard";

const ServiceDelivery = (props) => {
  return (
    <Fragment>
      <div className="service_delivery">
        <ServiceHead
          title="HOME DELIVERY"
          para="Mall of Asia, Bangalore offers Home Delivery Service for all its valued shoppers across the city. With deliveries happening across the city*, shoppers can pick from over 300+ brands from the comfort of their homes."
          image="img/help.jpg"
        />
        <ServiceCard
          title="EASY STEPS FOR YOUR HOME DELIVERY"
          image1="img/Services/i1.png"
          para1="Customers can purchase products either by:
Visiting the Mall, 
Connecting with the store personnel over a Video call"
          image2="img/Services/i2.png"
          para2="Once the customer has finished all billing formalities, the store personnel will guide the customer on the home delivery formalities."
          image3="img/Services/i3.png"
          para3="Once details are filled & confirmed, the store personnel will book and schedule the delivery and share tracking details with the customer."
          image4="img/Services/i4.png"
          para4="The partnered delivery service provider will deliver the product(s) to the customer’s doorstep on the same day**"
        />
        <MallServices />
      </div>
    </Fragment>
  );
};

export default ServiceDelivery;
