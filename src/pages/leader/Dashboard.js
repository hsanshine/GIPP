import React from "react";

import PageHeading from "../../components/shared/PageHeading";
import DashBoardMessage from "../../components/leader/DashBoardMessage";
import StatisticCard from "../../components/leader/StatisticCard";
const Dashboard = () => {
  const firstName = "Chloe";
  return (
    <div>
      <PageHeading heading={"Dashboard"} />
      <DashBoardMessage userName={firstName} />
      <StatisticCard />
    </div>
  );
};

export default Dashboard;
