import { SimpleGrid, Skeleton, Text, Box } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/UseGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  // Show "Under Maintenance" message for PlayStation
  if (selectedPlatform?.slug === "playstation") {
    return (
      <Box textAlign="center" padding="10px">
        <Text fontSize="xl" color="red.500">
          The PlayStation section is currently under maintenance. Please check
          back later. Feel free to search for playstation games in the search
          bar.
        </Text>
      </Box>
    );
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 3, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
