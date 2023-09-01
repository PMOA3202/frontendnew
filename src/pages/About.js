import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./About.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import Dummy from "../assets/Launch/coming.jpg";
import Carousel1 from "../components/Common/Carousel/Carousel1";
import Form1 from "../components/Common/Form1";
import PastEvents from "../components/Events/PastEvent";
import LeaseInfo from "../components/Leasing/LeaseInfo";
import Card5 from "../components/Common/Card/Card5";
import AboutCard from "../components/About/AboutCard";

const About = (props) => {
  return (
    <Fragment>
      <div className="about">
        <Header />
        <Sidebar />
        <Banner
          image={LaunchBanner}
          title="USHERING IN A NEW AGE OF LUXURY SHOPPING"
        />
        <LeaseInfo
          title="ABOUT THE MALL"
          para="Mall Of Asia in Hebbal, North Bengaluru is India’s first luxury retail mall to usher in a new age of shopping and leisure. Conceptualized as a destination that breaks the boundaries between retailer and shopper, MOA spells magnificence across millions of square feet. Enriching your time here is unique, sophisticated and chic design – featuring awe-inspiring façades and entrances, nature-inspired installations, dynamic spaces and experiences. Each floor is thematically designed to look straight out of a painting! An ‘open plan’ adds to the fun and seamless journey as you meander through the spaces.
          What makes MOA incredible is an exceptionally immersive retail atmosphere, where dreams see the light of day. Reminiscent of taking strolls through the fashion capitals of the world."
        />
        <div className="about-sect main-pad">
          <div className="reverse">
            <Card5
              title="ONE STOP DESTINATION"
              para="Shoppers soak in the distinctive feel of refinement as they journey through the stores, restaurants, cafes, spas and the city’s largest multiplex with a whopping 14 screens, all under one elegant roof. Mall Of Asia houses countless premium brands including world-renowned fashion labels like GUCCI, BURBERRY, BOTTEGA VENETA, JIMMY CHOO, MICHAEL KORS, COACH, VERSACE, ARMANI EXCHANGE, PAUL SMITH, HUGO BOSS and many more. Brace yourselves for an unforgettable day out and experience the epitome of grandeur."
              image="img/Leisure/game2.png"
            />
          </div>
          <Card5
            title="THE WOW FACTOR"
            para="With over 1.6 million sq. ft of retail space over 5 floors, 440+ brands, parking for over 3400 vehicles, dedicated metro station and mall zones that leave quite an impression, Mall Of Asia is unabashedly king-size. The luxe spaces are buzzing with coveted luxury labels, high fashion brands, cafes, fine dining restaurants, spas and salons, Instaworthy get-togethers and events. MOA also provides exclusive services such as a personal concierge, Wi-Fi and Valet Parking for visitors. Boasting several firsts in facilities and amenities, MOA is set to redefine the lifestyle destination skyline of the country."
            image="img/Leisure/game1.png"
          />
        </div>
        <AboutCard />
        <Carousel1 title="FEATURED OUTLETS" image1={Dummy} />
        <div className="about-info pb-md-5">
          <LeaseInfo
            title="REINVENTING RETAIL THERAPY"
            para="With an amalgamation of beautiful design, high-end shopping, dining and entertainment options, all in a singularly luxuriant ambience, Mall of Asia is the embodiment of our dreams and desires manifested into a shopping environment like no other. Everything you need to fulfill your luxury wish list!
          Bringing you joy and invigorating all senses, MOA keeps you truly ‘immersed in the moment’. An ode to true luxury, if you will. That’s not something you can put a price on! You are invited to experience the extraordinary.
          
          For any memorable social experience, our brain associates our memories with the 5 senses. A combination of smells, sights, sounds, touch, and tastes keeps us ‘immersed in the moment’. This was the inspiration for the Mall of Asia. With an amalgamation of beautiful design, exquisite dining options, and luxurious ambience, the Mall of Asia is the embodiment of our social desires manifested into a unique shopping experience like no other."
          />
        </div>
        <Form1
          title="Have a question? Connect with us!"
          para="Write to us and we will reach out shortly."
        />
      </div>
    </Fragment>
  );
};

export default About;
