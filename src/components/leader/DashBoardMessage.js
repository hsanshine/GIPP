import React from "react";

import "./DashBoardMessage.css";

const DashBoardMessage = (props) => {
  return (
    <div className="welcome-board">
      <div className="welcome-message">
        <p className="greeting">
          Welcome <span className="user-name">{props.userName}.</span>
        </p>
        <div className="general-message">
          <p>GIPP is here to help you to manage your go group.</p>{" "}
          {/* <p>
        You can easily submit meeting reports and prayer requests for your group
        to the pastors.
      </p> */}
          <p>
            Easily make a new report, add a new member or view the latest
            attendance trends here on the dashboard. Cheers!
          </p>
          {/* <p className="signiture">GIPP team.</p> */}
          <p className="signiture">Hamza.</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardMessage;
