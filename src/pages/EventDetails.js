import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
// import "./EventMain.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import EventCard from "../components/Events/EventCard";
import Nhance from "../components/Home/Nhance";
import PastEvents from "../components/Events/PastEvent";
import Form1 from "../components/Common/Form1";
import EventInfo from "../components/Events/EventInfo";

const EventDetails = (props) => {
  return (
    <Fragment>
      <div className="event_details">
        <Header />
        <Sidebar />
        <Banner image={LaunchBanner} />
        <EventInfo />
        {/* <Nhance /> */}
        <div className="main-pad">
          <div className="d-flex">
            <h2 className=""> UPCOMING EVENTS </h2>
            <hr />
          </div>
        </div>
        <EventCard />
        <Form1
          title="Do you have any queries about the events?"
          para="Write to us and we’ll get back to you!"
        />
      </div>
    </Fragment>
  );
};

export default EventDetails;
