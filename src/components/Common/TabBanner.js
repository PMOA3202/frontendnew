import { useState } from "react";
import LeisureGames from "../Leisure/LeisureGames";
import LeisureInox from "../Leisure/LeisureInox";
import LeisurePark from "../Leisure/LeisurePark";
import LeisureSpa from "../Leisure/LeisureSpa";
import "./TabBanner.css";

const content = [
  [<LeisureGames />],
  [<LeisureInox />],
  [<LeisureSpa />],
  [<LeisurePark />],
];

export default function LeisureTab() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="tab_banner pt-md-5">
      <div className="mt-md-5 pt-md-4" id="tabs">
        <menu>
          <div className="row w-100 ms-0">
            <div className="col-md-3 col-6 px-0">
              <button
                className={activeContentIndex === 0 ? "active" : ""}
                onClick={() => setActiveContentIndex(0)}
              >
                <img src="img/Leisure/tab3.jpg" />
                <div className="overlay"></div>
                <div className="text">
                  <h1> GAMES </h1>
                  <img className="normal" src="img/Leisure/icon1.png" />
                  <img className="action" src="img/Leisure/icon1a.png" />
                </div>
              </button>
            </div>
            <div className="col-md-3 col-6 px-0">
              <button
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                <img src="img/Leisure/tab2.png" />
                <div className="overlay"></div>
                <div className="text">
                  <h1> INOX MOVIES</h1>
                  <img className="normal" src="img/Leisure/icon2.png" />
                  <img className="action" src="img/Leisure/icon2a.png" />
                </div>
              </button>
            </div>
            <div className="col-md-3 col-6 px-0">
              <button
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                <img src="img/Leisure/tab1.jpg" />
                <div className="overlay"></div>
                <div className="text">
                  <h1> SALON & SPA </h1>
                  <img className="normal" src="img/Leisure/icon3.png" />
                  <img className="action" src="img/Leisure/icon3a.png" />
                </div>
              </button>
            </div>
            <div className="col-md-3 col-6 px-0">
              <button
                className={activeContentIndex === 3 ? "active" : ""}
                onClick={() => setActiveContentIndex(3)}
              >
                <img src="img/Leisure/tab4.jpg" />
                <div className="overlay"></div>
                <div className="text">
                  <h1> FAN PARK </h1>
                  <img className="normal" src="img/Leisure/icon4.png" />
                  <img className="action" src="img/Leisure/icon4a.png" />
                </div>
              </button>
            </div>
          </div>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
