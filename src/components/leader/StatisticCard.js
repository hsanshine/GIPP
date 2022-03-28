import React from "react";
import { Statistic, Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import "./StatisticCard.css";

const StatisticCard = (props) => {
  const up = true;
  return (
    <div className="site-statistic-demo-card">
      {up && (
        <div className="attendance-block">
          <Statistic
            title="Attendance Rates"
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
          <p>Up from last week.</p>
        </div>
      )}
      {!up && (
        <Card>
          <Statistic
            title="Attendance Rates"
            value={9.3}
            precision={2}
            valueStyle={{ color: "#cf1322" }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
          <p>Down from last week.</p>
        </Card>
      )}
    </div>
  );
};

export default StatisticCard;
