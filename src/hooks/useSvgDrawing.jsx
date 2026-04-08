import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useSvgDrawing = (containerRef, animations = []) => {
	useGSAP(() => {
		// setTimeout for svgs inside SplitText (when using dangerouslySetInnerHTML)
		const timer = setTimeout(() => {
			animations.forEach(({ selector, trigger, enter = false }) => {
				const el = containerRef.current?.querySelector(selector);

				const triggerEl = trigger
					? containerRef.current?.querySelector(trigger)
					: el;

				const paths = Array.from(el.querySelectorAll('path'));

				paths.forEach(path => {
					const length = path.getTotalLength();

					gsap.fromTo(path,
						{ strokeDasharray: length * 3, strokeDashoffset: length * 3 },
						{
							strokeDashoffset: 0,
							duration: 7,
							delay: 0.7,
							ease: 'power2.out',
							scrollTrigger: {
								trigger: triggerEl,
								start: 'top 40%',
								once: true,
								onEnter: enter ? () => {
									gsap.to(el, {
										rotation: -3,
										scale: 1.1,
										duration: 1,
										repeat: -1,
										yoyo: true,
										ease: 'sine.inOut',
									});
								} : undefined,
							},
						}
					);
				});
			});

			import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
				ScrollTrigger.refresh();
			});

		}, 100);

		return () => clearTimeout(timer);
	}, { scope: containerRef, dependencies: [animations] });
};

export default useSvgDrawing;