import { useEffect, useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [averagePuntation, setAveragePuntuation] = useState(0);
  const [positiveClicks, setPositiveClicks] = useState(0);

  useEffect(() => {
    if (totalClicks > 0) {
      const totalPuntuation = good * 1 + neutral * 0 + bad * -1;
      setAveragePuntuation(totalPuntuation / totalClicks);
    }
  });

  useEffect(() => {
    if (totalClicks > 0) {
      const positivePuntuation = good;
      setPositiveClicks((positivePuntuation / totalClicks) * 100);
    }
  });

  const handleGoodClick = () => {
    setGood(good + 1);
    setTotalClicks(totalClicks + 1);
    console.log(`Good = ${good}`);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotalClicks(totalClicks + 1);
    console.log(`Neutral = ${neutral}`);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotalClicks(totalClicks + 1);
    console.log(`Bad = ${bad}`);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
      </div>
      <h2>Statistics</h2>
      <div>
        <p>Good = {good}</p>
        <p>Neutral = {neutral}</p>
        <p>Bad = {bad}</p>
        <p>All Clicks = {totalClicks}</p>
        <p>Average = {averagePuntation}</p>
        <p>Positive = {positiveClicks} %</p>
      </div>
    </div>
  );
};

export default App;
