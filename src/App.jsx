import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

const App = () => {
	const [playState, setPlayState] = useState(false);

	return (
		<div>
			<Navbar />
			<Hero />
			<div className="container">
				<Title subTitle="Our Programs" title="What We Offer" />
				<Programs />
				<About setPlayState={setPlayState} />
				<Title subTitle="Gallery" title="Campus Photos" />
				<Campus />
				<Title subTitle="testimonials" title="What Students are saying" />
				<Testimonials />
				<Title subTitle="contact us" title="get in touch" />
				<Contact />
				<Footer />
			</div>
			<VideoPlayer playState={playState} setPlayState={setPlayState} />
		</div>
	);
};

export default App;
