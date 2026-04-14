import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const usePictureAppear = (containerRef, imageRef) => {

	useGSAP(() => {
		gsap.from(imageRef.current, {
			opacity: 0,
			xPercent: -10,
			duration: 2,
			ease: 'expo.out',
			scrollTrigger: {
				trigger: imageRef.current,
				start: 'top 65%'
			}
		})
	})

};

export default usePictureAppear;