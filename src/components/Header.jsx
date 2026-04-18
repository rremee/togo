import BtnAudio from "./BtnAudio.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useLayoutEffect} from "react";

const Header = ({isStarted}) => {

	useLayoutEffect(() => {
		gsap.set('#header a', { opacity: 0 });
		gsap.set('#header canvas', { opacity: 0 });
	}, []);

	useGSAP(() => {
		if (!isStarted) return;

		gsap.to('#header a', {
			duration: 1,
			ease: 'power1.out',
			xPercent: 50,
			opacity: 1
		})

		gsap.to('#header canvas', {
			duration: 1,
			ease: 'power1.out',
			xPercent: -50,
			opacity: 1
		})
	}, [isStarted]);

	return (
		<header id='header'>
			<div className="section-container">
				<div className="flex items-center justify-between">
					<a href="#hero">
						<img src="/images/logo.png" alt="logo"/>
					</a>
					<BtnAudio autoStart={isStarted} />
				</div>
			</div>
		</header>
	);
};

export default Header;