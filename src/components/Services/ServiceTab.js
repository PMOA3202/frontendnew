import { useState } from "react";
import "./ServiceTab.css";
import ServiceCurb from "./ServiceCurb";
import ServiceDelivery from "./ServiceDelivery";
import ServiceShopper from "./ServiceShopper";

const content = [
  [<ServiceCurb />],
  [<ServiceDelivery />],
  [<ServiceShopper />],
];

export default function ServiceTab() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="service_tab">
      <div className="" id="tabs">
        <menu>
          <div className="row w-100 ms-0">
            <div className="col-md-4 col-4 px-0">
              <button
                className={activeContentIndex === 0 ? "active" : ""}
                onClick={() => setActiveContentIndex(0)}
              >
                <h2> CURB SIDE PICK-UP</h2>
              </button>
            </div>
            <div className="col-md-4 col-4 px-0">
              <button
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                <h2 className="line-h2"> HOME DELIVERY </h2>
              </button>
            </div>
            <div className="col-md-4 col-4 px-0">
              <button
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                <h2> PERSONAL SHOPPER </h2>
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
