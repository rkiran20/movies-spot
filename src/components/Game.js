import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadImagess, loadMovieDetails } from "../utils/getData";
import { Link } from "react-router-dom";
import { popUp } from "../animations";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  const realImg = `https://image.tmdb.org/t/p/w400${image}`;
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadMovieDetails(id));
    dispatch(loadImagess(id));
  };
  return (
    <StyleGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image${stringPathId}`}
          src={realImg}
          alt={name}
        ></motion.img>
      </Link>
    </StyleGame>
  );
};

const StyleGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

export default Game;
