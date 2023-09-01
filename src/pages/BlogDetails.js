import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./Blogs.css";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import BlogView from "../components/Blogs/BlogViewMore";
import BlogCategory from "../components/Blogs/BlogCategory";
import Form1 from "../components/Common/Form1";
import BlogHead from "../components/Blogs/BlogHead";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import BlogMore from "../components/Blogs/BlogMore";

const BlogDetails = (props) => {
  return (
    <Fragment>
      <div className="blog_details">
        <Header />
        <Sidebar />
        <Banner title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque " image={LaunchBanner} />
        <BlogHead />
        <BlogMore />
        <Form1
          title="Have a question? Connect with us!"
          para="Write to us and we will reach out shortly."
        />
      </div>
    </Fragment>
  );
};

export default BlogDetails;
