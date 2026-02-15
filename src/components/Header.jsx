import BtnAudio from "./BtnAudio.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Header = () => {

	useGSAP(() => {

		gsap.from('#header a', {
			duration: 1,
			ease: 'expo.In',
			xPercent: -50,
			opacity: 0
		})

		gsap.from('#header canvas', {
			duration: 1,
			ease: 'expo.In',
			xPercent: 50,
			opacity: 0
		})
	})

	return (
		<header id='header'>
			<div className="section-container">
				<div className="flex items-center justify-between">
					<a href="#hero">
						<img src="/images/logo.png" alt="logo"/>
					</a>
					<BtnAudio/>
				</div>
			</div>
		</header>
	);
};

export default Header;