import {useGSAP} from "@gsap/react";
import {useMemo, useRef} from "react";
import gsap from "gsap";

const JourneyGreatRace = () => {
	return (
		<div id='journey-great-race'>
			<JourneyTrain/>
		</div>
	);
};

const JourneyTrain = () => {

	const containerRef = useRef(null);
	const trainRef = useRef(null);

	useGSAP(() => {
		gsap.set(trainRef.current, {xPercent: -100});
		gsap.to(trainRef.current, {
			xPercent: 100,
			duration: 25,
			ease: 'none',
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top 70%',
				invalidateOnRefresh: true
			}
		})

	}, {scope: containerRef});

	return (
		<div ref={containerRef} id='journey-train' className='overflow-hidden w-full'>

			<div className='w-[250%] md:w-full pointer-events-none'>

				<div ref={trainRef} className='will-change-transform'>
					<img
						src="/images/journey-gr/train.svg"
						alt="Train Journey"
						className='h-auto w-[80%] 2xl:w-full'
					/>
				</div>

				<img
					src="/images/journey-gr/railway.svg"
					alt="Train Journey"
					className='min-w-full'
				/>

			</div>

		</div>
	)
}

export default JourneyGreatRace;