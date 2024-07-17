import React, { useContext } from "react";
import { UserContext } from "./App";
import { Coins, Zap } from "lucide-react";

function Header() {
  const {
    name,
    points,
    levelNames,
    pointsToAdd,
    BotGainPerHour,
    levelMinPoints,
    levelIndex,
  } = useContext(UserContext);

  const formatBotGainPerHour = (profit) => {
    if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
    if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
    if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
    return `+${profit}`;
  };

  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress =
      ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  return (
    <header className="bg-gradient-to-r from-[#333533] via-[#ffee32] to-[#ffd100] text-[#202020] shadow-lg p-2 w-full">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Coins className="w-4 h-4 mr-1 text-[#d6d6d6]" />
          <span className="text-sm font-medium text-[#d6d6d6]">{name}</span>
        </div>
        <div className="flex text-xs">
          <div className="flex items-center bg-[#333533]/10 rounded-lg px-2 py-1 mr-2">
            <Zap className="w-3 h-3 text-[#ffee32] mr-1" />
            <span className="font-medium">+{pointsToAdd}</span>
          </div>
          <div className="flex items-center bg-[#333533]/10 rounded-lg px-2 py-1">
            <Coins className="w-3 h-3 text-[#ffee32] mr-1" />
            <span className="font-medium">
              {formatBotGainPerHour(BotGainPerHour)}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between text-xs text-[#202020]">
          <p className="text-[#d6d6d6]">{levelNames[levelIndex]}</p>
          <p>
            {levelIndex + 1}
            <span className="text-[#202020]">/{levelNames.length}</span>
          </p>
        </div>
        <div className="mt-1 border border-[#43433b] rounded-full">
          <div className="w-full h-1.5 bg-[#43433b]/[0.6] rounded-full">
            <div
              className="progress-gradient h-1.5 rounded-full"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
