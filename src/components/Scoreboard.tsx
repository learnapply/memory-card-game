type Props = {
  bestScore: number;
  currentScore: number;
};

const Scoreboard = (props: Props) => {
  const { bestScore, currentScore } = props;
  return (
    <div className="scoreboard">
      <p>Best score: {bestScore}</p>
      <p>Current score: {currentScore}</p>
    </div>
  );
};

export default Scoreboard;
