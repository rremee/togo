import {useGSAP} from "@gsap/react";
import {useMemo, useRef} from "react";
import gsap from "gsap";
import {useSplitText} from "../hooks/useSplitText.jsx";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const WaterJourney = () => {
	return (
		<div id="water-journey section-margin">
			<WaterView/>
		</div>
	);
};

const WaterView = () => {

	const containerRef = useRef(null);

	const waterSVG = `
		<svg 
			width="272" 
			height="58" 
			viewBox="0 0 272 58" 
			fill="none" 
			xmlns="http://www.w3.org/2000/svg"
			class="md:w-62 w-42 h-auto absolute right-0 md:top-14 top-9 water">
			<path d="M9.00244 46.7388C12.6253 38.4282 21.049 29.9506 29.5897 26.529C37.1755 23.4899 43.5758 25.0555 51.0631 27.8263C57.7616 30.3051 63.5889 34.109 69.4007 38.1701C74.1071 41.4588 78.4219 46.9734 84.4321 47.8995C93.885 49.356 102.462 36.7349 108.564 31.3425C114.096 26.4539 122.6 24.1583 129.117 20.9986C134.912 18.189 140.077 19.5231 145.546 22.7738C150.548 25.7464 155.718 29.1422 160.305 32.708C163.951 35.5422 169.23 40.9468 174.041 41.8229C177.537 42.4594 180.673 43.0518 184.301 43.0518C187.296 43.0518 188.184 41.3394 189.72 38.887C192.326 34.7269 194.835 30.8432 198.037 27.0752C204.206 19.815 214.888 5.67772 226.225 9.73308C229.406 10.8709 232.253 13.7374 234.848 15.7755C240.901 20.5288 246.794 25.4781 252.913 30.1477C256.703 33.0398 259.712 35.4551 263.002 38.7504" 
			stroke="#BB421B" 
			stroke-width="18" 
			stroke-linecap="round"/>
		</svg>	
	`;

	const splitText = useMemo(() => [
		{selector: 'h3', type: 'lines'},
		{selector: 'p', type: 'lines'},
	], [])

	useSplitText(containerRef, splitText);

	useGSAP(() => {

		ScrollTrigger.create({
			trigger: 'h3',
			start: 'top 60%',
			onEnter: () => {
				const water = containerRef.current.querySelector('.water');

				if (water) {
					gsap.fromTo('.water',
						{
							strokeDasharray: '1000',
							strokeDashoffset: '1000',
						},
						{
							strokeDashoffset: '0',
							duration: 10,
							delay: .7,
							ease: 'power2.out',
						}
					);
				}
			}
		})

	}, {scope: containerRef});

	return (
		<div ref={containerRef} id="water-view">
			<div className="section-container">
				<h3 className='md:max-w-[90%]'>
					On the return trip across the Sound, the team became stranded on an ice floe. The quick-thinking Seppala tied a lead to Togo, his only hope, and tossed the dog across five feet of {' '}
					<span
						className='relative'
						dangerouslySetInnerHTML={{ __html: `water. ${waterSVG}` }}
					/>
				</h3>
				<p className='typo max-w-118 justify-self-end md:mt-38 mt-26'>
					Togo attempted to pull the floe supporting the sled, but the line snapped. Amazingly, the once-in-a-lifetime lead dog had the wherewithal to snatch the line from the water, roll it around his shoulders like a harness, and eventually pull his team to safety.
				</p>
			</div>
		</div>
	);
};

export default WaterJourney;