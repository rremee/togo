import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {SplitText} from 'gsap/all';
import {useMarqueeText} from "../hooks/useMarqueeText.jsx";

const LeadSection = () => {
	return (
		<section id="born-to-lead">
			<div className='h-dvh'></div>
			{/*<LeadHeader/>*/}
			{/*<LeadView/>*/}
			<LeadContent/>
			<div className='h-dvh'></div>

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
		splitTextAnimation('#lead-header p');
		splitTextAnimation('#lead-header h2', 'words', 0.1, 4);
		splitTextAnimation('#lead-header h3', 'lines', 0.08);

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
		<div id='lead-header'>
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

const LeadView = () => {

	const containerRef = useRef(null);
	const imageRef = useRef(null);

	useGSAP(() => {
		const splitText = SplitText.create('.typo', {type: 'lines'});

		gsap.from(splitText.lines,  {
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top 60%'
			},
			y: 40,
			opacity: 0,
			duration: 1,
			ease: 'expo.out',
			stagger: 0.05,
		})

		gsap.from(imageRef.current, {
			opacity: 0,
			xPercent: -10,
			duration: 2,
			ease: 'expo.out',
			scrollTrigger: {
				trigger: imageRef.current,
				start: 'top 65%'
			}
		})

	}, {scope: containerRef})

	return (
		<div id="lead-view">
			<div className='section-container desktop:mt-60 mt-40'>
				<div ref={containerRef} className='flex flex-col desktop:flex-row items-center justify-between gap-15 dekstop:gap-30'>
					<div ref={imageRef} className='lead-view-img desktop:-ml-46 rotate-5'>
					</div>
					<div className='max-w-115 space-y-11'>
						<p className="typo">
							Sepp had tied Togo up, leaving instructions that he be kept secure for two days after his departure, because he didn't want Togo chasing after the team and then harrassing the dogs in the rush they were in. Togo hated being tied up, and the same night that Sepp left.
						</p>
						<p className="typo">
							Togo broke free from his tether and jumped the seven-foot-high fence of the kennel, but got one of his hind legs caught in the wire mesh at the top of the fence. Squealing and yelping, he caught the attention of a kennel assistant, who came out and cut the mesh to free him. Togo dropped to the ground, rolled over, and immediately set off after Sepp and the team.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const LeadContent = () => {

	const container1Ref = useRef(null);
	const text1Ref = useRef(null);
	const container2Ref = useRef(null);
	const text2Ref = useRef(null);

	useMarqueeText(container1Ref, text1Ref);
	useMarqueeText(container2Ref, text2Ref);

	return (
		<div id='lead-content'>

			<div>
				<div ref={container1Ref} className='flex w-max'>
					<div ref={text1Ref} className='marquee'>
						From Rambunctious Pup To Legendary Lead
					</div>
				</div>
			</div>
			
			<div className='section-container my-30 desktop:my-50'>
				<div className='flex flex-col gap-18 desktop:gap-25'>
					<p className='typo max-w-140'>
						Togo ran through the night, following Sepp's trail all the way to the roadhouse at Solomon, and rested quietly outside for the remainder of the night. The next morning, Sepp noticed that his team was off to a rather quick start. He assumed they had caught the scent of a reindeer ahead on the trail.
					</p>
					<p className='leading-normal text-[clamp(24px,7vw,36px)] tracking-[0.01em] md:max-w-[70%] desktop:max-w-[70%] self-center'>
						When he looked ahead, and saw a dog running loose far off ahead of them, he figured it out. It was Togo up to his usual mischief. <span className='text-primary'>He darted about at the team, nipping playfully at the leader's ears, and then occasionally charging off after reindeer.</span>
					</p>
					<p className='typo max-w-140 self-end'>
						When Sepp finally caught him, he felt he had no choice but to put him where he could keep an eye on him...back in one of the wheel positions directly in front of the sled. The moment he slipped the harness around Togo's head and neck, the dog became serious and resolute. The tugline went taut and he focused on the trail. This amazed Sepp, who discerned that what Togo wanted all along was to be a member of Sepp's team.
					</p>
				</div>
			</div>

			<div>
				<div ref={container2Ref} className='flex w-max'>
					<div ref={text2Ref} className='marquee'>
						Togo wanted all along was to be a member of Sepp's team
					</div>
				</div>
			</div>
		</div>
	)
}

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