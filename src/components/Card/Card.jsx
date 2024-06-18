import React from 'react'
import "./card.css"
import ritik from "../../../public/K22images/ANANDKASHYAP.jpg";


const Card = ({ name, batch, position, imageUrl, linkedinUrl, githubUrl, instaUrl }) => {
  const Url = `../../../public/K22images/${imageUrl}.jpg`;
  console.log(Url);
  return (

    
    <div className="profile-card">
    <div className="img">
      <img src={Url} alt="" />
    </div>
    <div className="caption">
        <h3>{name}</h3>
        <p>{position}</p>
        <div className="social-links">
            <li className="ll"><a href={linkedinUrl}>LinkedIn</a></li>
            <li className="git"><a href={githubUrl}>GitHub</a></li>
            <li className="insta"><a href={instaUrl}>Instagram</a></li>
        </div>
    </div>
</div>
  )
}

export default Card;