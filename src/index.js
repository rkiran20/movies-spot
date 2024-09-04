import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import gamesReducer from '../src/utils/GameSlice'
import movieDetailsReducer from '../src/utils/DetailsSlice'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// creating a store and a place where all the reducers will be
const appStore = configureStore({
  reducer:{
    games: gamesReducer,
    movieDetails : movieDetailsReducer,
  }
});  

root.render(
  <React.StrictMode>
    <Provider store={appStore} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
