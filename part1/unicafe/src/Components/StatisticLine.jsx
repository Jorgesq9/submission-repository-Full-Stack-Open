import React from "react";

const StatisticLine = ({ text, value }) => (
  <div>
    <p>
      {text}: {value}
    </p>
  </div>
);

export default StatisticLine;
