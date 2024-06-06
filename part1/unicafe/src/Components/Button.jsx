const Button = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
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
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
    </div>
  );
};

export default Button;
