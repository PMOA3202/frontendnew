import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/flogo.png";
import "./Navbar.css";
import { Fragment } from "react";
import { BsSearch, BsHeartFill, BsFillHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
  BiMap,
} from "react-icons/bi";
import Form from "react-bootstrap/Form";

function Header() {
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#000") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <Navbar className="pt-md-2 d-none d-sm-block position-fixed" style={{
      backgroundColor: navColor,
      transition: "all 1s"
    }}>
      <div className="main-pad">
        <Nav className="top w-100">
          <Nav.Link className="px-md-0 mx-md-0"
            href="https://www.google.com/maps/dir/13.0055878,77.687969/Phoenix+Mall+Of+Asia,+239%2F240,+Byatarayanapura,+Yelahanka,+Hobli+Yelahanka+Taluk,+Bellary+Rd,+Bengaluru,+Karnataka+560092/@13.0330797,77.5566393,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae1925ed3bc12f:0x7b731ab2850d5f8b!2m2!1d77.592492!2d13.0708252?entry=ttu"
            target="_blank"
          >
            {" "}
            <BiMap /> HOW TO REACH
          </Nav.Link>
          <Navbar.Brand className="logo ms-md-5 ps-md-5" href="/">
            <img className="w-100" src={Logo} />{" "}
          </Navbar.Brand>
          <NavDropdown title="Mall of Asia, Bangalore" id="basic-nav-dropdown">
            <NavDropdown.Item
              className=""
              href="https://www.phoenixmarketcity.com/mumbai"
              target="_blank"
            >
              Pheonix Marketcity, Mumbai
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://phoenixpalladium.com/"
              target="_blank"
            >
              Pheonix Palladium, Mumbai
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.phoenixmarketcity.com/pune"
              target="_blank"
            >
              Pheonix Marketcity, Pune
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.phoenixmarketcity.com/chennai"
              target="_blank"
            >
              Pheonix Marketcity, Chennai
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.phoenixmarketcity.com/chennai"
              target="_blank"
            >
              Pheonix Palladium, Chennai
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.phoenixmarketcity.com/bangalore"
              target="_blank"
            >
              Pheonix Marketcity, Bangalore
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.phoenixunited.in/lucknow"
              target="_blank"
            >
              Pheonix United, Lucknow
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.phoenixpalassio.com/"
              target="_blank"
            >
              Pheonix Palassio, Lucknow
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.phoenixunited.in/bareilly"
              target="_blank"
            >
              Pheonix United, Bareilly
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.palladiumahmedabad.com/"
              target="_blank"
            >
              Pheonix Palladium, Ahmedabad
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.phoenixcitadel.in/"
              target="_blank"
            >
              Pheonix Citadel, Indore
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.thephoenixmills.com/"
              target="_blank"
            >
              Corporate Website
            </NavDropdown.Item>
          </NavDropdown>
          {/* <Form.Select aria-label="Default select example">
            <option>Mall of Asia, Bangalore</option>
            <Link href="https://www.phoenixmarketcity.com/bangalore" target="_blank" ><option value="1">Pheonix Marketcity, Mumbai</option></Link>
            <option value="2">Pheonix Palladium, Mumbai</option>
            <option value="3">Three</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select> */}
        </Nav>
      </div>
      <div className="main-pad">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="bottom  mt-md-1 ms-md-0 w-100">
            <div className="row w-100">
              <div className="col-md-3">
                <div class="social-media d-flex mt-md-1 mt-xl-0">
                  <Link href="">
                    {" "}
                    <BiLogoFacebook />{" "}
                  </Link>
                  <Link href="">
                    {" "}
                    <BiLogoTwitter />{" "}
                  </Link>
                  <Link href="">
                    {" "}
                    <BiLogoInstagram />
                  </Link>
                  <Link href="">
                    {" "}
                    <BiLogoYoutube />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <div className="mx-auto d-flex mt-md-1">
                  <Nav.Link href="/launch">MOA ARRIVALS</Nav.Link>
                  <Nav.Link href="/brands">BRANDS</Nav.Link>
                  <Nav.Link href="/dine">DINE</Nav.Link>
                  <Nav.Link href="/leisure">LEISURE</Nav.Link>
                  <Nav.Link href="/luxury">LUXURY</Nav.Link>
                  <Nav.Link href="/services">SERVICES</Nav.Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="">
                  <Nav.Link
                    href="/sign-up"
                    className="ms-auto d-flex w-100 justify-content-end"
                  >
                    {" "}
                    Sign In / Register{" "}
                    <div className="search-wish-bag">
                      <Link href="#">
                        {" "}
                        <BsSearch />{" "}
                      </Link>
                    </div>
                  </Nav.Link>
                </div>
              </div>
            </div>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar className="justify-content-end search-wish-bag">
          <Nav.Link href="#" className="mx-auto">
            {" "}
            Sign In / Register{" "}
          </Nav.Link>

          <NavbarBrand className="d-flex mx-auto">
            <Link href="#">
              {" "}
              <BsSearch />{" "}
            </Link>
            <Link href="#">
              {" "}
              <BsHeartFill />{" "}
            </Link>
            <Link href="#">
              {" "}
              <BsFillHandbagFill />
            </Link>
          </NavbarBrand>
        </Navbar> */}
      </div>
    </Navbar>
  );
}

export default Header;
