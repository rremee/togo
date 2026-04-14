import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useArrowReveal = (containerRef, arrowRef, options = {}) => {
	const {
		rotation = 15,
		duration = 3
	} = options;
	useGSAP(() => {
		gsap.from(arrowRef.current, {
			opacity: 0,
			x: -40,
			duration: 1.5,
			scrollTrigger: {
				trigger: arrowRef.current,
				start: 'top 80%',
			},
			onEnter: () => {
				gsap.to(arrowRef.current, {
					rotation: rotation,
					duration: duration,
					repeat: -1,
					yoyo: true,
					ease: 'sine.inOut'
				});
			}
		});
	}, )
};

export default useArrowReveal;