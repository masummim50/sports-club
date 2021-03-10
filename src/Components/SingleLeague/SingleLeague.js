import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
    <div className="d-flex flex-column align-items-center justify-content-center border-rounded bg-secondary p-3">
      <img className="w-50" src={badge} alt=""/>
      <h6>{strLeague}</h6>
      <p>{strSport}</p>
      <button className="px-5 py-2" onClick={()=> {showDetails(idLeague)}}>Details</button>
    </div>
  );
};

export default SingleLeague;