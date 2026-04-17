import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export const useSplitText = (containerRef, targets = []) => {

	useGSAP(() => {
		let splitInstances = [];
		let lastWidth = window.innerWidth;

		const initSplit = (isResize = false) => {
			splitInstances.forEach(s => {
				s.elements?.forEach(el => {
					ScrollTrigger.getAll()
						.filter(st => st.trigger === el)
						.forEach(st => st.kill());
				});
				s.revert();
			});
			splitInstances = [];

			targets.forEach(({ selector, type, customAnimation, options = {} }) => {
				const elements = containerRef.current.querySelectorAll(selector);

				const { start = 'top 60%' } = options;

				elements.forEach(el => {
					const split = new SplitText(el, { type: type || 'lines, words, chars' });
					splitInstances.push(split);

					if (!isResize) {
						if (customAnimation) {
							customAnimation(split, el);
						} else {
							const items = type.includes('lines')
								? split.lines
								: type.includes('words')
									? split.words
									: split.chars;

							gsap.from(items, {
								scrollTrigger: {
									trigger: el,
									start: start,
								},
								y: 30,
								opacity: 0,
								duration: 1.5,
								stagger: type.includes('lines') ? 0.08 : type.includes('words') ? 0.05 : 0.01,
								ease: 'expo.out',
							});
						}
					}
				});
			});
		};

		const setupSplitText = (isResize = false) => {
			if (document.fonts?.ready) {
				document.fonts.ready.then(() => initSplit(isResize));
			} else {
				initSplit(isResize);
			}
		};

		const handleResize = () => {
			const currentWidth = window.innerWidth;
			if (currentWidth === lastWidth) return;
			lastWidth = currentWidth;
			setupSplitText(true);
			ScrollTrigger.refresh();
		};

		setupSplitText(false);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			splitInstances.forEach(s => {
				s.elements?.forEach(el => {
					ScrollTrigger.getAll()
						.filter(st => st.trigger === el)
						.forEach(st => st.kill());
				});
				s.revert();
			});
		};

	}, { scope: containerRef, dependencies: [targets] });
};