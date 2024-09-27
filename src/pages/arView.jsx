import "../styleSheet/arView.css";
import { ReactComponent as ArLogo } from "../images/icons/AR/ARLogo.svg";
import { useEffect } from "react";
import arData from "../json/arData";

const ArView = () => {
  // console.log(window.localStorage.getItem("itemId"));
  // console.log(arData[window.localStorage.getItem("itemId") - 1]);
  const data = arData[window.localStorage.getItem("itemId") - 1];
  // useEffect(() => {}, []);
  // console.log(arData[window.localStorage.getItem("itemId") - 1].hotspots);

  return (
    <div className="ar-view-container">
      <div className="ar-top-container">
        <div className="ar-top-container-left">
          <ArLogo />
          <hr className="ar-hr" />
          <hr className="ar-hr-second" />
        </div>
        <div className="ar-top-container-right"></div>
      </div>
      <div className="container-ar-viewer">
        <model-viewer
          id="modelviewer"
          src={data.modelUrl}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="neutral"
          poster="poster.webp"
          shadow-intensity="1"
        >
          {data.hotspots.map((ele) => {
            return (
              <button
                key={ele.slot}
                className="Hotspot"
                slot={ele.slot}
                data-position={ele.DataPosition}
                data-normal={ele.DataNormal}
                data-visibility-attribute="visible"
              >
                <div className="HotspotAnnotation">{ele.HotspotAnnotation}</div>
              </button>
            );
          })}
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
          </div>
          <button slot="ar-button" id="ar-button">
            View in your space
          </button>
        </model-viewer>
      </div>
    </div>
  );
};

export default ArView;
