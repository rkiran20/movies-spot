import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieDetails,
  MoviesList,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from "../utils/getData";

import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  LayoutGroup,
} from "framer-motion";
import Game from "../components/Game";
import { addItems } from "../utils/DetailsSlice";
import GameDetails from "../components/GameDetails";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(popularMovies());
    dispatch(MoviesList());
    dispatch(topRatedMovies());
    dispatch(upcomingMovies());
  }, [dispatch]);
  const movies = useSelector((state) => state.games);
  //console.log(movies.searchedMovies);
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <LayoutGroup>
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId} />}
        </AnimatePresence>
        {movies.searchedMovies.length !== 0 && (
          <div>
            <h2>Searched Movies</h2>
            <Games>
              {movies.searchedMovies.map((data) => (
                <Game
                  key={data.id}
                  name={data.title}
                  released={data.release_date}
                  id={data.id}
                  image={data.poster_path}
                />
              ))}
            </Games>
          </div>
        )}
        <h2>Upcoming Movies</h2>
        <Games>
          {movies.upComingMovies.map((data) => (
            <Game
              key={data.id}
              name={data.title}
              released={data.release_date}
              id={data.id}
              image={data.poster_path}
            />
          ))}
        </Games>
        <h2>Popular Movies</h2>
        <Games>
          {movies.popularMovies.map((data) => (
            <Game
              key={data.id}
              name={data.title}
              released={data.release_date}
              id={data.id}
              image={data.poster_path}
            />
          ))}
        </Games>
        <h2>Top Rated Movies</h2>
        <Games>
          {movies.topRatedMovies.map((data) => (
            <Game
              key={data.id}
              name={data.title}
              released={data.release_date}
              id={data.id}
              image={data.poster_path}
            />
          ))}
        </Games>
      </LayoutGroup>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
