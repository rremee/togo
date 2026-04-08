import {useRef, useMemo} from "react";
import {useSplitText} from "../hooks/useSplitText.jsx";
import useBackgroundParallax from "../hooks/useBackgroundParallax.jsx";
import useSvgDrawing from "../hooks/useSvgDrawing.jsx";
import useArrowReveal from "../hooks/useArrowReveal.jsx";

const FinalJourney = () => {

	const containerImageRef = useRef(null);
	const containerContentRef = useRef(null);
	const arrowRef = useRef(null);

	const splitText = useMemo(() => [
		{selector: 'h3:first-of-type', type: 'lines'},
		{selector: 'p', type: 'lines'},
		{selector: 'h3:last-of-type', type: 'lines'},
	], [])

	useSplitText(containerContentRef, splitText);

	useBackgroundParallax(containerImageRef);

	useSvgDrawing(containerContentRef, [
		{ selector: '.sign',  trigger: 'h3:last-of-type', enter: true }
	])

	useArrowReveal(containerContentRef, arrowRef);

	return (
		<div id='final-journey' className='section-margin pb-70'>
			<div ref={containerImageRef} id='final-journey-bg' className='relative overflow-hidden'>
				<div className='bg-image-parallax' style={{backgroundImage: `var(--gradient),
                    url("/images/great-race-final.png")`,
					backgroundPosition: 'top 6% right 20%'}}>
				</div>
			</div>
			<div ref={containerContentRef} className="section-margin section-container grid grid-cols-1 md:grid-cols-12 gap-x-10">
				<div className="col-span-full sm:col-start-1 sm:col-span-10 lg:col-span-8">
					<h3>
						Back on land after covering a near-impossible number of miles, Seppala and his team eventually made the serum handoff in Golovin, <span className='text-primary'>just 78 miles from Nome.</span>
					</h3>
				</div>
				<div className="col-span-full sm:col-start-3 sm:col-span-7 lg:col-start-3 lg:col-span-5 mt-16 relative">
					<p className='typo'>
						Late additions to this final stretch of the relay included musher Gunnar Kaasen who, against Seppala’s instincts, had chosen Balto to lead his team. On February 3rd, 1925, Kaasen and Balto rode into Nome to a hero’s welcome.
					</p>
					<img
						ref={arrowRef}
						src="/images/arrow-final-journey.svg"
						alt="Arrow"
						className="absolute hidden! md:block! bottom-[-112%] right-[-30%] desktop:bottom-[-110%]! desktop:right-[-10%]! w-[clamp(100px,8vw,178px)] md:w-auto"
					/>
				</div>
				<div className="col-span-full sm:col-start-6 sm:col-span-7 lg:col-start-7 lg:col-span-5 relative mt-30 md:mt-55 sign-trigger">
					<h3>
						The serum had arrived, and the town had been saved.
					</h3>
					<svg
						width="79"
						height="195"
						viewBox="0 0 79 195"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className='absolute right-[10%] md:left-[-40%] md:top-[-20%] desktop:!left-auto desktop:!right-[-15%] desktop:!top-[-20%] sign'>
						<path d="M68.0921 10.002C65.8613 23.3863 59.1971 35.3517 54.2272 47.8637C48.8575 61.3821 45.649 75.147 41.7844 89.1027C39.5797 97.064 37.1935 112.891 31.2969 118.788" stroke="#BB421B" strokeWidth="20" strokeLinecap="round"/>
						<path d="M20.0984 165.182C12.834 172.446 3.21296 178.726 16.9877 184.024C27.8543 188.203 17.5114 171.036 15.2991 168.381" stroke="#BB421B" strokeWidth="20" strokeLinecap="round"/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default FinalJourney;

