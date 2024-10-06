import React from "react";

import "./style.css";

const StatsCard = (props: any) => {
  return (
    <>
      <div className="statsCard w-full shadow-lg theme-white-bg rounded-lg border">
        <div className="statsContent">
          <div className="statsData">
            <h3 className="statsNumber title-2">{props.number}</h3>
            <p className="statsText paragraph-6">{props.text}</p>
          </div>
          <div className="statsImg">
            <img src={props.image} alt="Card Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
