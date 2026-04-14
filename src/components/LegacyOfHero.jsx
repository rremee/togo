import {useRef, useMemo} from "react";
import {useSplitText} from "../hooks/useSplitText.jsx";
import useArrowReveal from "../hooks/useArrowReveal.jsx";

const LegacyOfHero = () => {
	return (
		<section id='legacy-hero'>
			<LegacyHeader/>
			<LegacyRest/>
			<div className="h-dvh"></div>
		</section>
	);
};

const LegacyHeader = () => {

	const containerRef = useRef(null);

	const splitText = useMemo(() => [
		{selector: 'h2', type: 'words'},
		{selector: 'h3', type: 'lines'},
	], [])

	useSplitText(containerRef, splitText);

	return (
		<div id='legacy-header' className='section-margin'>
			<div ref={containerRef} className="section-container">
				<div>
					<h2>
						<span>the</span> legacy <br/> <span>of</span> togo
					</h2>
					<h3 className='md:max-w-[60%] md:mt-16 mt-10'>
						While Kaasen and Balto were given much of the glory, it was Seppala and Togo who insiders knew had <span className='text-primary'>truly saved the day.</span>
					</h3>
				</div>
			</div>
		</div>
	);
};

const LegacyRest = () => {

	const containerRef = useRef(null);
	const imageRef = useRef(null);

	const splitText = useMemo(() => [
		{ selector: '.typo', type: 'lines' },
		{ selector: 'h3', type: 'lines' }
	], [])

	useSplitText(containerRef, splitText);

	useArrowReveal(containerRef, imageRef, {rotation: 4, duration: 5});

	return (
		<div ref={containerRef} id='legacy-rest' className='section-margin'>

			<div className="section-container relative">
				<img
					ref={imageRef}
					src="/images/rip.svg"
					alt="RIP"
					className='absolute -left-10 opacity-12! lg:opacity-100! z-1'/>
				<div className='max-w-115 justify-self-end relative z-2'>
					<p className="typo">
						In the years following the serum run, Seppala made trips to the Lower 48 states with his heroic sled dogs. Seppala traveled all the way to New England and took on a team of local Chinooks in a friendly sled dog race. With Togo in the lead in what would be his final race, the much-smaller Siberians triumphed.
					</p>
				</div>
				<div className="justify-self-center flex flex-col lg:w-[58%] gap-11 section-margin relative z-2">
					<p className="typo max-w-115">
						Ultimately, Seppala and New England musher Elizabeth Ricker chose to open a kennel of Siberians in Poland Spring, Maine. It was there that Togo lived out the rest of his days in dignity and serenity.
					</p>
					<h3 className='self-end max-w-135'>
						The indomitable dog was finally <span className='text-primary'>
						put to rest in 1929 at the age of 16.</span>
					</h3>
					<p className="typo max-w-115">
						In 1932, Seppala returned to Alaska, whereupon the kennel closed and the dogs were delegated to friend Harry Wheeler. According to the Siberian Husky Club of America, all of the breed’s registered dogs of today can trace their ancestry to the dogs from the Seppala-Ricker kennel or Harry Wheeler’s kennel.
					</p>
				</div>
			</div>
		</div>
	)
}

export default LegacyOfHero;