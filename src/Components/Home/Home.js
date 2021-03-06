import React, { useEffect, useState } from 'react';
import SingleLeague from '../SingleLeague/SingleLeague';
import './Home.css'
const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(()=>{
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    fetch(url)
    .then(res => res.json())
    .then(data => setLeagues(data.leagues))
  },[])
  return (
    <div>
      <div className="home-bg text-white d-flex flex-column align-items-center justify-content-center">
        <h1>Choose your Club</h1>
        <p>Browse through hundreds of club to find your perfect Club</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="leagues-container">
            {leagues.map(league => <SingleLeague league ={league}></SingleLeague>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;