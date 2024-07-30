import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import PlatformSelector from "./Platfromselector";
import GameGrid from "./GameGrid";
import { GameQuery } from "../App";
import { Platform } from "../hooks/useGames";

const GameHub = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

  return (
    <Box>
      <PlatformSelector
        selectedPlatform={selectedPlatform}
        onSelectPlatform={setSelectedPlatform}
      />
      <GameGrid gameQuery={gameQuery} selectedPlatform={selectedPlatform} />
    </Box>
  );
};

export default GameHub;
