import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";
import {useRef} from "react";
import {useMediaQuery} from "react-responsive";

const BackgroundView = () => {
	return (
		<section id="backgroundview">
			{/*<BackgroundFirst />*/}
			{/*<BackgroundSecond/>*/}
			<BackgroundThird />
		</section>
	);
};

const BackgroundFirst = () => {

	const containerRef = useRef(null);
	const imageRef = useRef(null);

	useGSAP(() => {

		const splitText = SplitText.create('.typo', {type: 'lines'});
		const splitQuote = SplitText.create('.quote-block h3', {type: 'words'});
		const timeline = gsap.timeline({defaults: {ease: 'expo.out'}});

		gsap.from(imageRef.current, {
			opacity: 0,
			xPercent: -10,
			duration: 2,
			ease: 'expo.out'
		})

		gsap.from(splitText.lines, {
			y: 40,
			opacity: 0,
			duration: 1.5,
			ease: 'expo.out',
			stagger: 0.05,
		})

		timeline
		.from('.quote-block img', {
			yPercent: -50,
			scale: 0,
			opacity: 0,
			duration: 1
		}, '+=0.3')
		.from(splitQuote.words, {
			yPercent: -10,
			duration: 1.5,
			opacity: 0,
			stagger: 0.058
		}, '-=0.6')
		.from('.quote-block .quote', {
			yPercent: -10,
			duration: 1,
			opacity: 0,
		}, '-=0.8')

	}, {scope: containerRef})

	return (
		<div className="puppy-intro">
			<div ref={containerRef} className="flex flex-col items-center desktop:grid desktop:grid-cols-[1fr_600px_600px_1fr] w-full">

				<div className="w-full desktop:col-start-1 desktop:col-end-3 desktop:row-start-1">
					<img
						ref={imageRef}
						src="/images/background-1.png"
						alt="Puppy Togo"
						className="w-full h-auto object-cover"
					/>
				</div>

				<div className="px-6 mt-10 desktop:mt-0 desktop:col-start-3 desktop:row-start-1 desktop:self-end desktop:pb-12 md:pl-[clamp(20px,12vw,140px)] md:px-0">
					<p className="typo max-w-115">
						As a puppy, Togo's great future was not immediately apparent. He ran a bit small, and he had developed a painful disorder which caused his throat to swell. He spent his early days in the arms of Constance (Leonhard Seppala's wife), who applied hot rags to his throat to ease the pain.
					</p>
				</div>

				<div className="w-full px-6 desktop:px-0 mt-16 desktop:col-start-2 desktop:col-end-4 desktop:mt-32">
					<div className="flex flex-col gap-16 items-center desktop:flex-row desktop:justify-between desktop:gap-20">

						<div className="max-w-120">
							<p className="typo">
								And yet, in spite of the disorder, Togo became a troublesome and mischievous pup. Whenever Seppala would be out in the kennel yards, harnessing up a team, Togo would dash around nipping at the dogs, frustrating and distracting them.
							</p>
						</div>

						<div className="max-w-115 flex flex-col gap-8 desktop:gap-10 quote-block">
							<div>
								<img src="/images/quote.svg" alt="Quote" className='w-[20%]'/>
							</div>
							<h3>
								Showing all the signs of becoming a canine delinquent
							</h3>
							<p className="quote">
								— One reporter wrote about Togo
							</p>
						</div>

					</div>
				</div>

			</div>
		</div>
	);
};

const BackgroundSecond = () => {

	const containerRef = useRef(null);

	useGSAP(() => {
		const splitText = SplitText.create('.typo', {type: 'lines'});

		gsap.from(splitText.lines,  {
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top 60%'
			},
			y: 40,
			opacity: 0,
			duration: 1.5,
			ease: 'expo.out',
			stagger: 0.05,
		})

	}, {scope: containerRef})

	return (
		<div className='puppy-background section-margin'>
			<div className="section-container">
				<div ref={containerRef} className='space-y-20 max-w-115 justify-self-end'>
					<p className='typo'>
						When he reached six months of age, Seppala decided he'd had enough of the puppy's mischief, and gave him away to a woman who was looking for a house pet. Togo, however, did not take to the domestic life of a pet, and even though the woman spoiled him, he because worse and worse.
					</p>

					<p className='typo'>
						In a matter of weeks, Togo had escaped from the woman's house by leaping through a windowpane and working his way meticulously back to Seppala's kennels. Amazed, Sepp took him back, later saying of him that "a dog so devoted to his first friends deserved to be accepted".
					</p>
				</div>
			</div>
		</div>
	);
};

const BackgroundThird = () => {

	const arrowRef = useRef(null);
	const containerRef = useRef(null);

	useGSAP(() => {

		gsap.to(arrowRef.current, {
			rotation: 15,
			ease: 'sine.inOut',
			duration: 3,
			repeat: -1,
			yoyo: true
		})

	}, {scope: containerRef})

	return (
		<div ref={containerRef} className='puppy-final'>
			<div className="section-container">
				<h3 className="md:max-w-[80%]">
					However, Togo had not ceased to be a problem. He continued to harrass Sepp's teams whenever they hit the trail. Whenever Togo got free of the kennel, and met a returning team, he'd dart up to its leader and jump at him.
				</h3>
				<div className="flex flex-col desktop:flex-row gap-15 desktop:gap-30 mt-16 relative">
					<img ref={arrowRef} src="/images/background-arrow.svg" alt="Arrow" className='absolute bottom-[-55%]  desktop:left-[10%] md:bottom-[-90%] desktop:bottom-[-150%]! w-[clamp(140px,20vw,520px)] desktop:w-auto'/>
					<p className="typo max-w-120">
						Doing this almost cost him his life once, when he ran up to a team of trail-hardened malamutes and was mauled. Togo had him rushed by dogsled to his kennels for medical attention. However, this experience would actually help to make him a better racing dog, as one of the hardest things to teach an inexperienced lead dog is how to pass another team without getting distracted and possibly being lured into a fight.
					</p>
					<p className="typo max-w-130">
						Togo never pestered another team again, always giving an approaching team a wide berth. When he would "pass by" another team going in the same direction, he would dig in, pull on the harness, yelp and rush on ahead.
					</p>
				</div>
				<div className="mt-56 ml-auto max-w-124 flex flex-col gap-8 desktop:gap-10 quote-block">
					<div>
						<img src="/images/quote.svg" alt="Quote" className='w-[20%]'/>
					</div>
					<h3>
						...like a lot of humans, Togo had learned the hard way
					</h3>
					<p className="quote">
						—  Leonhard Seppala
					</p>
				</div>
			</div>
		</div>
	);
};

export default BackgroundView;