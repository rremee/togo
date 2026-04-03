import gsap from "gsap";
import {useGSAP} from "@gsap/react";

export const useBackgroundParallax = (containerRef) => {

	useGSAP(() => {
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
	}, {scope: containerRef})
};

export default useBackgroundParallax;