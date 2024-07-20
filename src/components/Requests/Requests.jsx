import "./Requests.css";
import React from "react";

import { RequestedData } from "../../Data/RequestedData";

const Requests = () => {
  return (
    <div className="requests">
      <div className="container">
        <div className="space">
          <h3>Requests</h3>
        </div>
        <div className="box">View More</div>
      </div>

      {RequestedData.map((requested, id) => {
        return (
          <div className="request">
            <div>
              <img src={requested.img} alt="" className="requestedImage" />
              <div className="requestedDesc">
                <span>{requested.name}</span>
                <span>@{requested.userId}</span>
              </div>
            </div>
            <div className="center">
              <button className="button accept-btn">Accept</button>
              <button className="button reject-btn">Reject</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
