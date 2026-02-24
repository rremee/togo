import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {SplitText} from 'gsap/all';

const LeadSection = () => {
	return (
		<section id="born-to-lead">
			{/*<div className='h-dvh'></div>*/}
			<LeadHeader/>
			{/*<div className='h-dvh'></div>*/}

		</section>
	);
};

const LeadHeader = () => {

	const containerRef = useRef(null);

	useGSAP(() => {

		const splitTextAnimation = (
				selector,
				type = 'words',
				stagger = 0.04,
				duration = 2) => {
			const splitText = SplitText.create(selector, {type: type});
			const splitTextType = type === 'lines' ? splitText.lines : splitText.words;
			gsap.from(splitTextType, {
				scrollTrigger: {
					trigger: selector,
					start: 'top 60%',
				},
				y: -10,
				opacity: 0,
				duration: duration,
				ease: 'expo.out',
				stagger: stagger
			})
		}
		splitTextAnimation('.lead-header p');
		splitTextAnimation('.lead-header h2', 'words', 0.1, 4);
		splitTextAnimation('.lead-header h3', 'lines', 0.08);

		gsap.fromTo('.arrow',
			{
				strokeDasharray: '1000',
				strokeDashoffset: '1000',
			},
			{
				strokeDashoffset: '0',
				duration: 10,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.arrow',
					start: 'top 80%',
				}
			}
		);

	}, {scope: containerRef});

	return (
		<div className='lead-header'>
			<div ref={containerRef} className="section-container">
				<div>
					<p className='uppercase text-[clamp(12px,5vw,14px)]'>
						From Rambunctious Pup To Legendary Lead
					</p>
					<h2 className='md:max-w-[90%] mt-3'>
						BORN <br/> TO LEAD
					</h2>
					<h3 className='md:max-w-[90%] md:mt-16 mt-10'>
						He was about eight months old when he finally got the chance to show his quality as a sled dog and a potential lead dog. Sepp had to rush out with a team to a mining camp outside of Nome. A prospector had hired Sepp to take him up to Dime Creek, where there was word of a new gold strike. It was <span className='relative'>160 miles away <ArrowSVG className='absolute right-0 desktop:top-14 top-10 arrow'/></span>.
					</h3>
				</div>
			</div>
		</div>
	);
};

const ArrowSVG = ({className}) => {
	return (
		<svg
			viewBox="0 0 290 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`md:w-62 w-42 h-auto ${className || ''}`}>
			<path
				d="M9.00098 27C66.3608 19.8014 123.362 12.3605 181.178 10.2308C214.436 9.00567 247.727 9 281.001 9"
				stroke="#BB421B"
				strokeWidth="18"
				strokeLinecap="round" />
		</svg>
	)
}
export default LeadSection;