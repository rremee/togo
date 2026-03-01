import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

const HeadingScrollHorizontal = ({header}) => {

	const containerRef = useRef(null);
	const headingRef = useRef(null);

	useGSAP(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top top',
				end: '+=2800',
				scrub: 1.5,
				pin: true,
				invalidateOnRefresh: true
			}
		})

		gsap.set(headingRef.current, { autoAlpha: 1 });

		timeline.to({}, {duration: 0.1})

		timeline.fromTo(headingRef.current,
			{ x: () => window.innerWidth},
			{ x: () => -(headingRef.current.offsetWidth) , ease: 'none'})

		timeline.to({}, {duration: 0.1})

	}, {dependencies: [header], scope: containerRef});

	return (
		<div ref={containerRef} className="header-item">
			<h2 ref={headingRef} className='text-nowrap will-change-transform invisible-on-load'>
				{header}
			</h2>
		</div>
	);
};

export default HeadingScrollHorizontal;