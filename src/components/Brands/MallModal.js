import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MapImg from "../../assets/Brands/map.jpg";
import MapFull from "../../assets/Brands/map-full.jpg";
import "./Mall.css";

function MallModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row mall w-100 ms-0">
        <div className="col-md-12">
          <div className="image-box">
            <Button variant="primary" onClick={handleShow}>
              <img src={MapImg} />
            </Button>

            <Modal show={show} onHide={handleClose}>
              <img src={MapFull} />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default MallModal;
