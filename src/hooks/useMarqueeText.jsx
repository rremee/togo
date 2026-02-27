import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export const useMarqueeText = (containerRef, textRef, duration = 80) => {

	useGSAP(() => {
		const container = containerRef.current;
		const text = textRef.current;

		for (let i = 0; i < 2; i++) {
			container.appendChild(text.cloneNode(true));
		}

		gsap.to(container, {
			x: -text.offsetWidth,
			repeat: -1,
			duration: duration,
			ease: 'linear',
			onRepeat: () => {
				gsap.set(container, { x: 0 });
			}
		})
	}, {scope: containerRef});
}