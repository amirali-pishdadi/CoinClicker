import React, { useContext, useEffect } from "react";
import { UserContext } from "./App";
import "./App.css";
import Coin from "./assets/coin.png";

function Home() {
  const {
    points,
    setPoints,
    levelNames,
    pointsToAdd,
    BotGainPerHour,
    levelMinPoints,
    setLevelIndex,
    levelIndex,
  } = useContext(UserContext);

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length, setLevelIndex]);

  useEffect(() => {
    const profitPerSecond = Math.floor(BotGainPerHour / 3600);
    const interval = setInterval(() => {
      setPoints((prevPoints) => prevPoints + profitPerSecond);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [BotGainPerHour, setPoints]);

  const formatPoints = (points) => {
    if (points >= 1000000) return `${(points / 1000000).toFixed(3)} M`;
    if (points >= 1000) return `${(points / 1000).toFixed(3)} K`;
    return `${points}`;
  };

  function handleAddCount() {
    setPoints((prevPoints) => prevPoints + pointsToAdd);
  }
  const handleCardClick = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    setPoints(points + pointsToAdd);
  };
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <div className="text-center mb-8">
        <h1 className="text-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-1">
          {formatPoints(points)}
        </h1>
      </div>
      <div
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 p-2 rounded-full circle-outer"
        onClick={handleAddCount}
      >
        <div className="w-full h-full rounded-full circle-inner flex circle-outer items-center justify-center">
          <img src={Coin} onClick={(event) => handleCardClick(event)} className="" alt="Coin" />
        </div>
      </div>
    </div>
  );
}

export default Home;
