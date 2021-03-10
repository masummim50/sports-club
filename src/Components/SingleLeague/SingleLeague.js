import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './SingleLeague.css'

const SingleLeague = (props) => {
  const {idLeague,strLeague, strSport} = props.league;
  const [badge, setBadge] = useState('');
  let history = useHistory();
  const showDetails = id => {
    let url = `league/${id}`;
    history.push(url)
  };
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
  .then(res => res.json())
  .then(data =>  setBadge(data.leagues[0].strBadge))
  return (
    <div className="single-league-container d-flex flex-column align-items-center justify-content-center p-3">
      <img className="w-50" src={badge} alt=""/>
      <h6 className="mt-3">{strLeague}</h6>
      <p>{strSport}</p>
      <button className="details-btn px-5 py-2 btn btn-danger" onClick={()=> {showDetails(idLeague)}}>Details<FontAwesomeIcon icon={faArrowRight}/></button>
    </div>
  );
};

export default SingleLeague;