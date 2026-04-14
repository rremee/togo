import {useRef, useMemo} from "react";
import {useSplitText} from "../hooks/useSplitText.jsx";
import useArrowReveal from "../hooks/useArrowReveal.jsx";
import usePictureAppear from "../hooks/usePictureAppear.jsx";
import QuoteBlock from "./QuoteBlock.jsx";

const LegacyOfHero = () => {
	return (
		<section id='legacy-hero'>
			<LegacyHeader/>
			<LegacyRest/>
			<LegacyTruth/>
			<LegacySeppala/>
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

const LegacyTruth = () => {

	const containerRef = useRef(null);
	const imageRef = useRef(null);

	const splitText = useMemo(() => [
		{ selector: 'h3', type: 'lines' },
		{ selector: '.typo', type: 'lines' }
	], [])

	useSplitText(containerRef, splitText);

	usePictureAppear(containerRef, imageRef);

	return (
		<div ref={containerRef} id='legacy-truth' className='section-margin'>
			<div className="section-container">
				<h3 className='max-w-lg'>
					Over the years, more and more began to recognize <span className='text-primary'>Togo as the serum run’s true hero dog.</span>
				</h3>
			</div>
			<div ref={imageRef} className='legacy-img rotate-2 my-16 md:my-22 justify-self-center'></div>
			<div className="section-container">
				<p className="typo max-w-139 justify-self-end">
					Eventually, in 1983, his mounted body was given a place of honor at the Iditarod Race Headquarters in Wasilla, Alaska. Most famous among modern dog sled races, the Iditarod Trail Sled Dog Race is held each year in March, with parts of the route traversing the same 1925 serum run trails taken all those years ago.
				</p>
			</div>
		</div>
	)
}

const LegacySeppala = () => {

	const containerRef = useRef(null);
	const arrowRef = useRef(null);

	const splitText = useMemo(() => [
		{ selector: 'h3:first-child', type: 'lines' },
		{ selector: '.typo', type: 'lines' }
	], [])

	useSplitText(containerRef, splitText);

	useArrowReveal(containerRef, arrowRef);

	return (
		<div ref={containerRef} id='legacy-seppala' className='section-margin'>
			<div className="section-container">
				<h3 className="sm:max-w-[80%] lg:max-w-[60%]">
					<span className='text-primary'>Seppala himself passed away in 1967 at the age of 89.</span> A fitting tribute, the Leonhard Seppala Humanitarian Award is given to the Iditarod musher each year judged to have taken the best care of their dogs.
				</h3>
				<div className="mt-11 relative">
					<img ref={arrowRef} src="/images/legacy-arrow.svg" alt="Arrow" className='absolute min-[934px]:block! hidden! left-[-4%] desktop:left-[-14%] md:bottom-[-340%] desktop:bottom-[-450%]! w-[clamp(140px,24vw,520px)] desktop:w-auto pointer-events-none'/>

					<p className="typo max-w-127">
						As for his thoughts on Togo and the “Great Race of Mercy”, which changed the course of his own life and dog sledding forevermore, Seppala summed it up thusly in his unpublished autobiography before his passing:
					</p>
				</div>
				<QuoteBlock
					className='mt-34 md:mt-56 ml-auto max-w-174'
					quote={(
						<>
							Afterwards, I thought of the ice and the darkness and the terrible wind and the irony that men could build planes and ships. But when Nome needed life in little packages of serum, it took the <span className='text-primary'>dogs</span> to bring it through.
						</>
					)}
					author={'Leonhard Seppala'}
				/>
			</div>
		</div>
	)
}

export default LegacyOfHero;