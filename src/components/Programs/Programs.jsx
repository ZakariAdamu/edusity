import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon1 from "../../assets/program-icon-1.png";
import program_icon2 from "../../assets/program-icon-2.png";
import program_icon3 from "../../assets/program-icon-3.png";

const Programs = () => {
	return (
		<div className="programs" id="programs">
			<div className="program">
				<img src={program_1} alt="program-1" />
				<div className="caption">
					<img src={program_icon1} alt="program_icon1" />
					<p>Graduation Degree</p>
				</div>
			</div>
			<div className="program">
				<img src={program_2} alt="program-2" />
				<div className="caption">
					<img src={program_icon2} alt="program_icon2" />
					<p>Master Degree</p>
				</div>
			</div>
			<div className="program">
				<img src={program_3} alt="program-3" />
				<div className="caption">
					<img src={program_icon3} alt="program_icon3" />
					<p>Post Graduation</p>
				</div>
			</div>
		</div>
	);
};

export default Programs;
