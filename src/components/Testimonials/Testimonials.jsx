import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {

	const slider = useRef();
	let tx = 0;

	const slideForward = () => {
		if (tx > -50) {
			tx -= 25;
		}
		slider.current.style.transform = `translateX(${tx}%)`
}
	const slideBackward = () => {
	if (tx < 0) {
			tx += 25;
		}
		slider.current.style.transform = `translateX(${tx}%)`
}

	return (
		<div className="testimonials" id="testimonials">
			<img className="next-btn" src={next_icon} alt="" onClick={slideForward} />
			<img className="back-btn" src={back_icon} alt="" onClick={slideBackward} />
			<div className="slider">
				<ul ref={slider}>
					<li>
						<div className="slide-card">
							<div className="user-info">
								<img src={user_1} alt="user-image1" />
								<div>
									<h3>Sarah Ibrahim</h3>
									<span>Edusity, Canada</span>
								</div>
							</div>
							<p>Choosing to pursue my degree At Educity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitments to academic activities have truly exceeded my expectations. </p>
							
						</div>
					</li>
					<li>
						<div className="slide-card">
							<div className="user-info">
								<img src={user_2} alt="user-image2" />
								<div>
									<h3>Bilal Philips</h3>
									<span>Edusity, Gambia</span>
								</div>
							</div>
							<p>Choosing to pursue my degree At Educity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitments to academic activities have truly exceeded my expectations. </p>

						</div>
					</li>
					<li>
						<div className="slide-card">
							<div className="user-info">
								<img src={user_3} alt="user-image3" />
								<div>
									<h3>Sylvia Lee</h3>
									<span>Edusity, USA</span>
								</div>
							</div>
							<p>Choosing to pursue my degree At Educity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitments to academic activities have truly exceeded my expectations. </p>

						</div>
					</li>
					<li>
						<div className="slide-card">
							<div className="user-info">
								<img src={user_4} alt="user-image4" />
								<div>
									<h3>James David</h3>
									<span>Edusity, Colorado</span>
								</div>
							</div>
							<p>Choosing to pursue my degree At Educity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitments to academic activities have truly exceeded my expectations. </p>

						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Testimonials;
