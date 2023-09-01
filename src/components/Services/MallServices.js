import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./MallServices.css";
import Card10 from "../Common/Card/Card10";

function MallServices() {
  return (
    <div className="mall_services mt-md-4">
      <div className="main-pad d-flex">
        <h2> MALL SERVICES </h2>
        <hr />
      </div>
      <Container className="py-md-5 py-4 w-75">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Parking and Transport</Nav.Link>
                </Nav.Item>
                <hr />
                <Nav.Item>
                  <Nav.Link eventKey="second">Services for Disabled</Nav.Link>
                </Nav.Item>
                <hr />
                <Nav.Item>
                  <Nav.Link eventKey="third">Family Services</Nav.Link>
                </Nav.Item>
                <hr />
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Emergency Support</Nav.Link>
                </Nav.Item>
                <hr />
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="row">
                    <div className="col-md-3">
                      <Card10
                        title="Valet Parking"
                        image="img/Services/bag.png"
                      />
                    </div>
                    <div className="col-md-3">
                      <Card10
                        title="Valet Parking"
                        image="img/Services/bag.png"
                      />
                    </div>
                    <div className="col-md-3">
                      <Card10
                        title="Valet Parking"
                        image="img/Services/bag.png"
                      />
                    </div>
                    <div className="col-md-3">
                      <Card10
                        title="Valet Parking"
                        image="img/Services/bag.png"
                      />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second"><div className="row">
                    <div className="col-md-3">
                      <Card10
                        title="Valet Parking"
                        image="img/Services/bag.png"
                      />
                    </div>
                    <div className="col-md-3">
                      <Card10
                        title="Valet Parking"
                        image="img/Services/bag.png"
                      />
                    </div>
                    <div className="col-md-3">
                      <Card10
                        title="Valet Parking"
                        image="img/Services/bag.png"
                      />
                    </div>
                    <div className="col-md-3">
                      <Card10
                        title="Valet Parking"
                        image="img/Services/bag.png"
                      />
                    </div>
                  </div></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
                <Tab.Pane eventKey="fourth"></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default MallServices;
