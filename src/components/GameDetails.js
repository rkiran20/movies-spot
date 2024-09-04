import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = ({ pathId }) => {
  const movieData = useSelector((state) => state.movieDetails.items);
  const imageData = useSelector((state) => state.movieDetails.images);
  const mainImage = `https://image.tmdb.org/t/p/original${movieData.poster_path}`;
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(movieData.vote_average);
    for (let i = 1; i <= 10; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" src={starFull} key={i}></img>);
      } else {
        stars.push(<img alt="star" src={starEmpty} key={i}></img>);
      }
    }
    return stars;
  };
  //const starsArray = getStars();
  return (
    <>
      {movieData && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="ratings">
                <motion.h3 layoutId={`title${pathId}`}>
                  {movieData.title}
                </motion.h3>
                <p>{movieData.vote_average}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Genres</h3>
                <Platforms>
                  <h3>{movieData.genres.map((data) => data.name).join(",")}</h3>
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image${pathId}`}
                src={mainImage}
                alt="pho"
              ></motion.img>
            </Media>
            <Description>
              <p>{movieData.overview}</p>
            </Description>
            <div className="gallery">
              {imageData.backdrops.slice(0, 5).map((data) => (
                <img
                  key={data.file_path}
                  src={`https://image.tmdb.org/t/p/original${data.file_path}`}
                  alt="pho"
                ></img>
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  padding: 2rem 5rem;
  width: 80%;
  border-radius: 1rem;
  background-color: white;
  position: absolute;
  left: 10%;
  z-index: 10;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetails;
