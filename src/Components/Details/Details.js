import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from '../../images/male.png';
import female from '../../images/female.png'
const Details = () => {
  const {idLeague} = useParams();
  const [singleLeague, setSingleLeague] = useState([])
  useEffect(()=> {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
  .then(res => res.json())
  .then(data =>  setSingleLeague(data.leagues[0]))
  },[])
 

  const {strGender, strCountry, strSport, strBadge, strFacebook, strTwitter, strYoutube, strLeague, intFormedYear, strDescriptionEN} = singleLeague || {};
  console.log(strGender)
  return (
    <div>
      <div className="top-bg text-center">
        <h3>{strLeague}</h3>
      </div>
      <div className="container">
        <div className="row bg-primary p-3 d-flex align-items-center">
          <div className="col-md-6">
            <h2>{strLeague}</h2>
            <p>{strCountry}</p>
            <p>{strSport}</p>
            <p>{intFormedYear}</p>
          </div>
          <div className="col-md-6">
            {/* Component render first then fetches data, so to avoid showing the female image first for a few seconds everytime to check details, used two different condition */}
            {
              strGender === 'Male'&& <img className="w-100" src={male} alt=""/>
            }
            {
              strGender === 'Female' &&  <img src={female} alt=""/>
            }
          </div>
        </div>
        <div className="row">
          <p>{strDescriptionEN}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;