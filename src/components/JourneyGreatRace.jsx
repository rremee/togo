import {useGSAP} from "@gsap/react";
import {useMemo, useRef} from "react";
import gsap from "gsap";
import {useSplitText} from "../hooks/useSplitText.jsx";

const JourneyGreatRace = () => {
	return (
		<div id='journey-great-race'>
			<JourneyTrain/>
			<JourneyContent/>
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

const JourneyContent = () => {
	const containerRef = useRef(null);
	const arrowRef = useRef(null);

	const splitText = useMemo(() => [
		{selector: '.typo', type: 'lines'},
		{selector: 'h3', type: 'lines'}
	], [])

	useSplitText(containerRef, splitText);

	const paws = [
		{ id: 1, top: '4%', left: '40%', rotate: -120, size: 'clamp(40px, 20vw, 98px)', opacity: .2 },
		{ id: 2, top: '12%', left: '20%', rotate: -128,  size: 'clamp(50px, 20vw, 148px)', opacity: .4 },
		{ id: 3, top: '26%', left: '30%', rotate: -132, size: 'clamp(150px, 20vw, 235px)', opacity: .6 },
		{ id: 4, top: '42%', left: '5%', rotate: -134,  size: 'clamp(170px, 20vw, 255px)', opacity: .8 },
		{ id: 5, top: '70%', left: '1%', rotate: -136,  size: 'clamp(220px, 20vw, 310px)', opacity: 1 },
	]

	useGSAP(() => {

		const dogPaws = containerRef.current.querySelectorAll('.paw');

		const getOpacity = (index) =>
			window.matchMedia('(max-width: 1199px)').matches
				? 0.1
				: paws[index].opacity;

		dogPaws.forEach((dogPaw, index) => {

			gsap.fromTo(dogPaw,
				{opacity: 0, scale: 0.2},
				{
					opacity: getOpacity(index),
					scale: 1,
					duration: 1.2,
					ease: 'back.out(1.7)',
					scrollTrigger: {
						trigger: dogPaw,
						start: 'top 50%',
					}
				})
		})

		gsap.from(arrowRef.current, {
			opacity: 0,
			y: -4,
			duration: 1.5,
			scrollTrigger: {
				trigger: arrowRef.current,
				start: 'top 35%',
			},
			onEnter: () => {
				gsap.to(arrowRef.current, {
					rotation: 4, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut'
				});
			}
		});

		const handleResize = () => {
			dogPaws.forEach((dogPaw, index) => {
				if (gsap.getProperty(dogPaw, 'opacity') > 0) {
					gsap.to(dogPaw, { opacity: getOpacity(index), duration: 0.3 });
				}
			});
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);

	}, { scope: containerRef });

	return (
		<div ref={containerRef} id='journey-content' className='relative'>
			{paws.map((paw) => (
				<img
					key={paw.id}
					src="/images/journey-gr/paw.svg"
					alt="Paw"
					className='paw absolute pointer-events-none -z-1'
					style={{
						top: paw.top,
						left: paw.left,
						rotate: `${paw.rotate}deg`,
						width: paw.size,
						opacity: paw.opacity
					}}
				/>
			))}
			<div className="section-container">
				<div className='justify-self-end'>
					<img ref={arrowRef} src="/images/journey-gr/arrow-journey.svg" alt="Arrow"/>
					<p className="typo max-w-125 mt-11">
						On January 29th, Seppala and his 20 best Siberians set out from Nome with trusty Togo at the helm, to meet the westbound relay and retrieve the vital serum. Among those not selected by Seppala was Balto, whom the musher felt was yet unprepared to lead a team.
					</p>
				</div>

				<div className="section-margin md:max-w-[85%] justify-self-end">
					<h3 className='max-w-221'>
						With temperatures hovering around -30 degrees, Seppala and his dogs made incredible time in their mad dash east, <span className='text-primary'>covering over 170 miles in just three days.</span>
					</h3>
					<div className='flex flex-col desktop:flex-row gap-15 md:gap-30 mt-16'>
						<p className="typo max-w-130 desktop:max-w-104">
							All the while, the outbreak worsened back in Nome. Officials decided to add more teams to the relay, unbeknownst to Seppala. After cutting across the treacherously frozen Norton Sound to save time and distance, Seppala miraculously ran right into the team of Henry Ivanoff
						</p>
						<p className="typo max-w-130 desktop:max-w-104">
							One of the relay’s late additions, which was carrying the serum westward. The two teams nearly missed each other on the trail, but, thanks in part to the dogs, the connection was made. Naturally, it then fell to Seppala and Togo to bring the serum back towards Nome.
						</p>
					</div>
				</div>
			</div>

		</div>
	)
}

export default JourneyGreatRace;