import { useEffect, useState } from "react";

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
      <p>Good = {good}</p>
      <p>Neutral = {neutral}</p>
      <p>Bad = {bad}</p>
      <p>All Clicks = {totalClicks}</p>
      <p>Average = {averagePuntation}</p>
      <p>Positive = {positiveClicks} %</p>
    </div>
  );
};

export default Statistics;
