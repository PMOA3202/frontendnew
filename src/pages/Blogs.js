import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./Blogs.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import BlogView from "../components/Blogs/BlogViewMore";
import BlogCategory from "../components/Blogs/BlogCategory";
import Form1 from "../components/Common/Form1";

const Blogs = (props) => {
  return (
    <Fragment>
      <div className="blogs">
        <Header />
        <Sidebar />
        <Banner title="BLOGS" image={LaunchBanner} />
        <BlogCategory />
        <BlogView />
        <Form1
          title="Have a question? Connect with us!"
          para="Write to us and we will reach out shortly."
        />
      </div>
    </Fragment>
  );
};

export default Blogs;
