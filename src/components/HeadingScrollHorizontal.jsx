import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import {useRef} from "react";

const HeadingScrollHorizontal = ({header}) => {

	const containerRef = useRef(null);

	useGSAP(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top top',
				end: '+=2300',
				scrub: 1.5,
				pin: true,
				invalidateOnRefresh: true
			}
		})

		timeline.fromTo(containerRef.current.querySelector('h2'),
			{ x: () => window.innerWidth},
			{ x: () => -window.innerWidth , ease: 'none'})

	}, [header])

	return (
		<div ref={containerRef} className="header-item">
			<h2>
				{header}
			</h2>
		</div>
	);
};

export default HeadingScrollHorizontal;