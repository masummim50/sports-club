import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from '../../images/male.png'
const Details = () => {
  const {idLeague} = useParams();
  const [singleLeague, setSingleLeague] = useState([])
  useEffect(()=> {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
  .then(res => res.json())
  .then(data =>  setSingleLeague(data.leagues[0]))
  },[])
  console.log(singleLeague.strGender);
  const {strGender, strCountry, strSport, strBadge, strFacebook, strTwitter, strYoutube, strLeague, intFormedYear, strDescriptionEN} = singleLeague;
  console.log(strGender)
  return (
    <div className="container">
      <div className="row bg-primary p-3">
        <div className="col-md-6">
          <h2>{strLeague}</h2>
          <p>{strCountry}</p>
          <p>{strSport}</p>
          <p>{intFormedYear}</p>
        </div>
        <div className="col-md-6">
          {
            strGender === 'Male' && <img className="w-100" src={male} alt=""/>
          }
        </div>
      </div>
    </div>
  );
};

export default Details;