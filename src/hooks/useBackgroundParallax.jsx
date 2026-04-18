import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const useBackgroundParallax = (containerRef, isStart = true) => {

	useGSAP(() => {
		if (!isStart) return;

		gsap.to('.bg-image-parallax',{
			scrollTrigger: {
				trigger: containerRef.current,
				scrub: 1,
				start: "top top",
				end: "bottom top"
			},
			yPercent: -20,
			scale: 1.3,
			ease: "none"
		});
	}, { scope: containerRef, dependencies: [isStart] });
};

export default useBackgroundParallax;