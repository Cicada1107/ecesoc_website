import React from "react";
import './ExeBody.scss'
import { useEffect } from "react";
import Card from "../../components/Card/Card.jsx";
import K22 from './K22.jsx';




import particles from "../../particlesjs-config";

function ExeBody() {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
	return (
		<>
			<div className="tos">
				<div className="tos__header padding" id="particles">
					<h1 className="tos__header__heading">Executive Body</h1>
				</div>
				<div className="tos__body padding">
				<div className="CardCotainer">
					
				  {K22.map((person, index) => (
                <Card
                    key={index}
                    name={person.name}
                    batch={person.batch}
                    position={person.position}
                    imageUrl={person.imageUrl}
                    linkedinUrl={person.linkedinUrl}
                    githubUrl={person.githubUrl}
                    instaUrl={person.instaUrl}
                />
            ))}
				  </div>
				</div>
			</div>
		</>
	);
}


export default ExeBody;
