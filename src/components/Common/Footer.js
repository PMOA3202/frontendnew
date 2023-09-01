import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import "./Footer.css";
import Flogo from "../../assets/flogo.png";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

function Footer() {
  return (
    <Fragment>
      <div className="footer py-md-5 py-4">
        <div className="pt-md-4 main-pad">
          <div className="row mb-md-4">
            <div className="col-md-3">
              <img className="mt-xl-4 mt-md-4 flogo w-75" src={Flogo} />
            </div>
            <div className="col-md-6">
              <div className="row my-md-0 mt-4 mb-3">
                <div className="col-md-4 col-6">
                  <a href="/luxury"> 
                    {" "}
                    <p> Luxury</p>
                  </a>
                  <a href="/brands">
                    {" "}
                    <p> Brands</p>
                  </a>
                  <a href="/dine">
                    {" "}
                    <p> Dine </p>
                  </a>
                  <a href="/events">
                    {" "}
                    <p> Events</p>
                  </a>
                  <a href="/launch">
                    {" "}
                    <p> MOA ARRIVALS </p>
                  </a>
                </div>
                <div className="col-md-4 col-6">
                  <a>
                    {" "}
                    <p> Offers & Packages</p>
                  </a>
                  <a href="/leisure">
                    {" "}
                    <p> Leisure</p>
                  </a>
                  <a href="/services">
                    {" "}
                    <p> Services</p>
                  </a>
                  <a href="/gift">
                    {" "}
                    <p> Gift Card</p>
                  </a>
                  <a href="/blogs">
                    {" "}
                    <p> Blogs </p>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="/leasing">
                    {" "}
                    <p> Leasing</p>
                  </a>
                  <a href="/careers">
                    {" "}
                    <p> Careers </p>
                  </a>
                  <a href="/terms-conditions">
                    {" "}
                    <p> Terms & Conditions </p>
                  </a>
                  <a href="/about">
                    {" "}
                    <p> About Us</p>
                  </a>
                  <a href="/news">
                    {" "}
                    <p> News </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6252894084078!2d77.6963968!3d12.995801699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110b04a3be4b%3A0xcffb252dab2e9643!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1689326543450!5m2!1sen!2sin"
            
                className="mb-md-3 mb-3 w-100"
                height="150"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <label>
                Island Star Mall Developers Pvt. Ltd. ,<br /> Phoenix Marketcity
                Bangalore, Whitefield Main Road,
                <br /> Mahadevpura, Bangalore - 560048
              </label>
            </div>
          </div>
          <hr />
          <div className="subscribe d-flex">
            <h3>SUBSCRIBE TO OUR NEWSLETTER FOR OFFERS AND MORE</h3>
            <div className="d-flex ">
              <input type="text" className="form-control" />
              <Link>
                {" "}
                <button type="button">
                  {" "}
                  <BsChevronRight />{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
