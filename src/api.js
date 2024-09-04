// //Base URL
// const base_url = "https://api.rawg.io/api/";
// const apiKey = "5928e24dbd7b4070888afcb08180b2eb";

// //Getting the date
// const getCurrentMonth = ()=>{
//     const month = new Date().getMonth() +1;
//     if(month <10){
//         return `0${month}`;
//     }
//     else{
//         return month;
//     }
// };

// const getCurrentDay = ()=>{
//     const day = new Date().getDate();
//     if(day<10){
//         return `0${day}`;
//     }
//     else{
//         return day;
//     }
// }

// const currentYear = new Date().getFullYear();
// const currentMonth = getCurrentMonth();
// const currentDay = getCurrentDay();
// const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
// const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;

// const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${apiKey}`;
// const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${apiKey}`;
// const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${apiKey}`;

// export const popularGamesURL = () => `${base_url}${popular_games}`;
// export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
// export const newGamesURL = () => `${base_url}${newGames}`;

// //Game Details
// export const gameDetailsURL = (game_id) =>
//     `${base_url}games/${game_id}?key=${apiKey}`;
//   //Game ScreenShots
// export const gameScreenshotURL = (game_id) =>
//     `${base_url}games/${game_id}/screenshots?key=${apiKey}`;
//   //Searched game
// export const searchGameURL = (game_name) =>
//     `${base_url}games?search=${game_name}&page_size=9&key=${apiKey}`;

const API_KEY = "b4dc57776f629e4da36c9463a6886e8f";
export const moviesList = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
export const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
export const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
export const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

export const movieDetailsUrl = (game_id) =>
  `https://api.themoviedb.org/3/movie/${game_id}?api_key=${API_KEY}`;
export const movieImagesUrl = (game_id) =>
  `https://api.themoviedb.org/3/movie/${game_id}/images?api_key=${API_KEY}`;
export const searchMovieUrl = (game_name) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${game_name}`;
