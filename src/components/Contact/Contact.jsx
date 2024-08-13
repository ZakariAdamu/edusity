import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
const Contact = () => {
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "7b4c11ae-ba06-4c3d-9b41-14e503005040");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully!");
			console.log("Success", data);
			event.target.reset();
			setTimeout(setResult, 3000, "");
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};
	const style = {
		background: result ? "#0f963c" : "",
	};

	return (
		<div className="contact" id="contact">
			<div className="contact-col">
				<h3>
					Send us a message
					<img src={msg_icon} alt="envelope icon" />
				</h3>
				<p>
					Feel free to reach out through contact form or find our contact
					information below. Your feedback, questions, and suggestions are
					important to us as we strive to provide exceptional service to our
					university community.
				</p>
				<ul>
					<li>
						<img className="contact-icon" src={mail_icon} alt="mail icon" />
						contact@edusity.io
					</li>
					<li>
						{" "}
						<img className="contact-icon" src={phone_icon} alt="phone icon" />
						+234 8167 842 561
					</li>
					<li>
						{" "}
						<img
							className="contact-icon"
							src={location_icon}
							alt="location icon"
						/>
						45 Blue ave, <br /> 100021, Kanifing, The Gambia
					</li>
				</ul>
			</div>
			<div className="contact-col">
				<form onSubmit={onSubmit}>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" placeholder="Your name" required />
					<label htmlFor="">Email</label>
					<input
						type="email"
						name="email"
						placeholder="Email address"
						required
					/>
					<label htmlFor="">Message</label>
					<textarea
						name="message"
						rows="6"
						placeholder="Enter your message here..."
						required
					></textarea>
					<button className="btn dark-btn">Submit</button>
				</form>
				<span style={style}>{result}</span>
			</div>
		</div>
	);
};

export default Contact;
