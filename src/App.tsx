import { Box, Flex, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import React, { Suspense, lazy, useState } from "react";
import { Genre } from "./hooks/UseGenres";
import { Platform } from "./hooks/useGames";

const NavBar = lazy(() => import("./components/NavBar"));
const GameGrid = lazy(() => import("./components/GameGrid"));
const GenreList = lazy(() => import("./components/GenreList"));
const PlatformSelector = lazy(() => import("./components/Platfromselector"));
const SortSelector = lazy(() => import("./components/SortSelector"));
const GameHeading = lazy(() => import("./components/GameHeading"));

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={"5"}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          {gameQuery.platform?.slug === "playstation" ? (
            <Box textAlign="center" padding="10px">
              <Text fontSize="xl" color="red.500">
                The PlayStation section is currently under maintenance. Please
                check back later.
              </Text>
            </Box>
          ) : (
            <GameGrid
              gameQuery={gameQuery}
              selectedPlatform={gameQuery.platform}
            />
          )}
        </GridItem>
      </Grid>
    </Suspense>
  );
}

export default App;
