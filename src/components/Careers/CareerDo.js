import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "../../pages/Careers.css";

const CareerDo = (props) => {
  return (
    <Fragment>
      <div className="career_do">
        <div className="d-flex pb-md-3 main-pad pe-0">
          <h2> WHAT WE DO </h2>
          <hr />
        </div>
        <div className="main-pad py-md-5 py-4">
          <div className="row mb-md-4">
            <div className="col-md-4">
              <div>
                <img src="img/offers1.jpg" />
              </div>
              <div className="text">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  qu
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src="img/offers1.jpg" />
              </div>
              <div className="text">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  qu
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src="img/offers1.jpg" />
              </div>
              <div className="text">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  qu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CareerDo;
