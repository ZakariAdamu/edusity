import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";
const Hero = () => {
	return (
		<div className="hero container" id="hero">
			<div className="hero-text">
				<h1>We ensure quality education for all our students</h1>
				<p>
					Our cutting-edge curriculum is designed to empower students with the
					knowledge, skills, and experience needed to excel in any field of your
					choice.{" "}
				</p>
				<Link
					to="programs"
					smooth={true}
					offset={-260}
					duration={300}
					className="btn"
				>
					Explore more <img src={dark_arrow} />
				</Link>
			</div>
		</div>
	);
};

export default Hero;
