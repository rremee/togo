import {useRef, useMemo} from "react";
import {useSplitText} from "../hooks/useSplitText.jsx";

const LegacyOfHero = () => {
	return (
		<section id='legacy-hero'>
			<LegacyHeader/>
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

export default LegacyOfHero;