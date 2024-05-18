import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
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
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
      </div>
    </div>
  );
};

export default App;
