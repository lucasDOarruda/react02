import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import { json } from "react-router-dom";





const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer b161c2b50e0bf1fb3cbf26dffc40a075'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));


    
  }, []);
  console.log(json);

  return <div>Main</div>;
};


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer b161c2b50e0bf1fb3cbf26dffc40a075'
  }
};





export default Main;
