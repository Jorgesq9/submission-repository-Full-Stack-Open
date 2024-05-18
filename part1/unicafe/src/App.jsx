import { useEffect, useState } from "react";
import Statistics from "./Components/statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);

    console.log(`Good = ${good}`);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);

    console.log(`Neutral = ${neutral}`);
  };

  const handleBadClick = () => {
    setBad(bad + 1);

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

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
