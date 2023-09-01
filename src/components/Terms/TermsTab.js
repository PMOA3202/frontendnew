import { useState } from "react";
import "./TermsTab.css";
import General from "./General";
import EventsTC from "./EventsTc";
import TermsUse from "./TermsUse";
import Miscellaneous from "./Miscellaneous";

const content = [
  [<General />],
  [<EventsTC />],
  [<TermsUse />],
  [<Miscellaneous />],
];

export default function TermsTab() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="terms_tab">
      <div className="" id="tabs">
        <menu>
          <div className="row w-100 ms-0">
            <div className="col-md-3 col-4 px-0">
              <button
                className={activeContentIndex === 0 ? "active" : ""}
                onClick={() => setActiveContentIndex(0)}
              >
                <h2> GENERAL</h2>
              </button>
            </div>
            <div className="col-md-3 col-4 px-0">
              <button
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                <h2 className="line-h2"> EVENTS </h2>
              </button>
            </div>
            <div className="col-md-3 col-4 px-0">
              <button
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                <h2  className="line-h2"> TERMS OF USE </h2>
              </button>
            </div>
            <div className="col-md-3 col-4 px-0">
              <button
                className={activeContentIndex === 3 ? "active" : ""}
                onClick={() => setActiveContentIndex(3)}
              >
                <h2 > MISCELLANEOUS </h2>
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
