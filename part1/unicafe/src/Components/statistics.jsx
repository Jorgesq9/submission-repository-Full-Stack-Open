import { useEffect, useState } from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const [totalClicks, setTotalClicks] = useState(0);
  const [averagePuntation, setAveragePuntuation] = useState(0);
  const [positiveClicks, setPositiveClicks] = useState(0);

  useEffect(() => {
    const total = good + neutral + bad;
    setTotalClicks(total);

    if (totalClicks > 0) {
      const totalPuntuation = good - bad;
      setAveragePuntuation(totalPuntuation / total);
    }
  }, [good, neutral, bad]);

  useEffect(() => {
    if (totalClicks > 0) {
      const positivePuntuation = good;
      setPositiveClicks((positivePuntuation / totalClicks) * 100);
    }
  }, [totalClicks, good]);

  if (totalClicks === 0) {
    return "No Feedback Given";
  }

  return (
    <div>
      <ul>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="TotalClicks" value={totalClicks} />
        <StatisticLine text="TotalPuntuation" value={averagePuntation} />
        <StatisticLine
          text="PositivePuntuation"
          value={`${positiveClicks} %`}
        />
      </ul>
    </div>
  );
};

export default Statistics;
