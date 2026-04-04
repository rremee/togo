import {useGSAP} from "@gsap/react";
import {useMemo, useRef} from "react";
import gsap from "gsap";
import {useSplitText} from "../hooks/useSplitText.jsx";
import InfoScrolling from "./InfoScrolling.jsx";
import {infoScrollingParagraphsSecond} from "../constants/index.jsx";


const IntroGreatRace = () => {
	return (
		<div id='intro-great-race'>
			<IntroGreatRaceView/>
			<InfoScrolling text={infoScrollingParagraphsSecond}/>
		</div>
	);
};

const IntroGreatRaceView = () => {

	const containerRef = useRef(null);
	const imageRef = useRef(null);

	const splitParagraphs = useMemo(() => [
		{ selector: '.typo', type: 'lines' }
	], []);

	useSplitText(containerRef, splitParagraphs);

	useGSAP(() => {

		gsap.from(imageRef.current, {
			opacity: 0,
			xPercent: 10,
			duration: 2,
			ease: 'expo.out',
			scrollTrigger: {
				trigger: imageRef.current,
				start: 'top 60%'
			}
		})

	}, {scope: containerRef})

	return (
		<div id="intro-gr-view" className='desktop:mt-60 mt-40'>
			<div className='section-container'>
				<div ref={containerRef} className='flex flex-col desktop:flex-row items-center justify-between gap-15 dekstop:gap-30'>
					<div className='max-w-md'>
						<p className="typo">
							Over the years, Togo became known across Alaska for his tenacity, strength, endurance, and intelligence as Seppala’s prized lead dog. Togo led Seppala’s team in races and excursions long and short, and dog and man became inseparable. During this time, Seppala himself won the All-Alaska Sweepstakes in 1915, 1916, and 1917.
						</p>
					</div>
					<div ref={imageRef} className='intro-gr-view-img desktop:-mr-46 rotate-5'></div>
				</div>
			</div>
		</div>
	)
}

export default IntroGreatRace;