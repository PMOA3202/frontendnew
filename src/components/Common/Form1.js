import React, { Fragment } from "react";
import "./Form1.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const Form1 = ({ id, title, para }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        para: para,
      },
    });
  };
  return (
    <div className="form1 py-xl-5 pt-4 pb-3">
      <div className="main-pad mx-auto ">
        <Fragment>
          <div className="row pt-md-3">
            <div className="col-md-7">
              <div className="mt-md-5">
                <h2> {title}</h2>
                <p>{para}</p>
              </div>
            </div>
            <div className="col-md-5">
              <form>
                <div className="row mt-md-0 mt-3">
                  <div className="col-md-6 pe-md-1">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-md-6 ps-md-1">
                    <input type="text" placeholder="Phone No" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      rows="3"
                      className="w-100"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <Link>
                    <input type="submit" className="submit_btn" name="SUBMIT" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default Form1;
