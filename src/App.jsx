import React, { createContext, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

export const UserContext = createContext();

function App() {
  const levelNames = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Epic",
    "Legendary",
    "Master",
    "GrandMaster",
    "Lord",
    "Creator",
  ];

  const levelMinPoints = [
    0, 5000, 25000, 100000, 1000000, 2000000, 10000000, 50000000, 100000000,
    1000000000, 10000000000,
  ];

  const [name, setName] = useState("Amir");
  const [levelIndex, setLevelIndex] = useState(6);
  const [isRobotRunning, setIsRobotRunning] = useState(false);
  const [points, setPoints] = useState(10000000);
  const pointsToAdd = 10000000;
  const BotGainPerHour = 1150000000;


  return (
    <div className="bg-[#333533] min-h-screen flex flex-col">
      <UserContext.Provider
        value={{
          name,
          setName,
          levelIndex,
          setLevelIndex,
          points,
          setPoints,
          pointsToAdd,
          BotGainPerHour,
          levelMinPoints,
          levelNames,
        }}
      >
        <Header />
        <main className="flex-grow flex flex-col justify-center">
          <Home />
        </main>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
