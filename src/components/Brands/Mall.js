import { useState } from "react";
import "./Mall.css";
import Container from "react-bootstrap/esm/Container";
import MallModal from "./MallModal";

const content = [
  [
    <MallModal />,
  ],
  [],
  [],
  [],
  [],
  [],
  [],
];

export default function Mall() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="mall py-xl-0 pt-4">
      <header className="main-pad pe-0">
        <div className="d-flex">
          <h2> FIND YOUR WAY AROUND THE MALL </h2>
          <hr />
        </div>
      </header>

      <Container className="mt-xl-4 px-0">
        <div id="tabs">
          <menu>
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              <div className="dot"></div> LOWER GROUND FLOOR
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              <div className="dot"></div> GROUND FLOOR
            </button>
            <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              <div className="dot"></div> FIRST FLOOR
            </button>
            <button
              className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => setActiveContentIndex(3)}
            >
              <div className="dot"></div> SECOND FLOOR
            </button>
            <button
              className={activeContentIndex === 4 ? "active" : ""}
              onClick={() => setActiveContentIndex(4)}
            >
              <div className="dot"></div> THIRD FLOOR
            </button>
          </menu>
          <div id="tab-content">
            <ul>
              {content[activeContentIndex].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
