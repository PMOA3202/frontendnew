import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./CorporateEnquiry.css";
import Button2 from "../Common/Button/Button2";

const CorporateEnquiry = (props) => {
  return (
    <Fragment>
      <div className="corporate_enquiry py-md-5 py-4">
        <div className="main-pad pe-0 py-4">
          <div className="d-flex mb-md-4">
            <h2> CORPORATE ENQUIRY</h2>
            <hr />
          </div>
        </div>
        <div className="main-pad">
          <p>
            Phoenix Gift Card is a unique way for corporates to gift their
            employees, vendors and clients. It gives the receiver the freedom to
            shop from a wide range of brands, dine-in & enjoy all the
            entertainment.
          </p>
          <div className="row mt-md-5 mt-4">
            <div className="col-md-6">
              <Form className="form">
                <Row>
                  <Col>
                    <label>Full Name </label>
                    <Form.Control />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Phone Number </label>
                    <Form.Control />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Company Name </label>
                    <Form.Control />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Company Email </label>
                    <Form.Control />
                  </Col>
                </Row>
                <Button2 title="SUBMIT" />
              </Form>
            </div>
            <div className="col-md-6">
              <img src="img/category1.jpg" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CorporateEnquiry;
