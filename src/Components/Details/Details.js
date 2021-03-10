import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from '../../images/male.png';
import female from '../../images/female.png';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faLandmark, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../images/facebook.jpg';
import twitter from '../../images/twitter.png';
import youtube from '../../images/youtube.png'

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
      <div className="details-top-bg text-center">
        <img className="position-relative h-100 p-3" src={strBadge} alt=""/>
      </div>
      <div className="container text-white">
        <div className="row details-container p-3 d-flex align-items-center rounded mt-5 mb-5">
          <div className="col-md-6 league-info">
            <h3>{strLeague}</h3>
            <p><FontAwesomeIcon icon={faLandmark}/>Founded: {intFormedYear}</p>
            <p><FontAwesomeIcon icon={faFlag}/>Country: {strCountry}</p>
            <p><FontAwesomeIcon icon={faFutbol}/>Sport Type: {strSport}</p>
            {
              strGender === 'Male' && <p><FontAwesomeIcon icon={faMars}/>Gender: Male</p>
            }
            {
              strGender === 'Female' && <p><FontAwesomeIcon icon={faVenus}/>Gender: Female</p>
            }
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
        <div className="social-icons text-center mb-5 mt-5">
          <a href={`//${strFacebook}`} target='_blank'><img src={facebook} alt=""/></a>
          <a href={`//${strTwitter}`} target='_blank'><img src={twitter} alt=""/></a>
          <a href={`//${strYoutube}`} target='_blank'><img src={youtube} alt=""/></a>
        </div>
      </div>
    </div>
  );
};

export default Details;