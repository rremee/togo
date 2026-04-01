import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export const useSplitText = (containerRef, targets = []) => {
	useGSAP(() => {
		if (!containerRef.current || !targets.length) return;

		let splitInstances = [];

		let lastWidth = window.innerWidth;

		const setupSplitText = () => {
			splitInstances.forEach(s => s.revert());
			splitInstances = [];

			targets.forEach(({ selector, type }) => {
				const elements = containerRef.current.querySelectorAll(selector);

				elements.forEach(el => {

					const isAnimated = el.classList.contains('animated');

					const split = new SplitText(el, { type: type || 'lines, words, chars' });
					splitInstances.push(split);

					if (!isAnimated) {
						const items = type.includes('lines')
							? split.lines
							: (type.includes('words') ? split.words : split.chars);

						gsap.from(items, {
							scrollTrigger: {
								trigger: el,
								start: 'top 60%',
								onEnter: () => el.classList.add('animated')
							},
							y: 30,
							opacity: 0,
							duration: 1.5,
							stagger: type.includes('lines') ? 0.08 : (type.includes('words') ? 0.05 : 0.01),
							ease: 'expo.out',
						});
					}
				});
			});
		};

		setupSplitText();

		const handleResize = () => {

			const currentWidth = window.innerWidth;
			if (currentWidth === lastWidth) return;

			lastWidth = currentWidth;

			setupSplitText();
			ScrollTrigger.refresh();
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);

	}, { scope: containerRef, dependencies: [targets] });
};