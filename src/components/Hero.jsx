import {useRef, useMemo} from "react";
import gsap from "gsap";
import {useSplitText} from "../hooks/useSplitText.jsx";
import useBackgroundParallax from "../hooks/useBackgroundParallax.jsx";

const Hero = () => {

	const heroRef = useRef(null);

	const splitText = useMemo(() => [
		{
			selector: 'h1',
			type: 'chars, words',
			customAnimation: (split) => {
				gsap.from(split.chars, {
					y: 40,
					duration: 2,
					ease: 'expo.out',
					stagger: 0.05,
					opacity: 0
				})
			}
		},
		{
			selector: 'h3',
			type: 'chars, words',
			customAnimation: (split) => {
				gsap.from(split.words, {
					y: 30,
					duration: 1.5,
					ease: 'expo.out',
					stagger: 0.08,
					opacity: 0,
					delay: .8
				})
			}
		},
		{
			selector: 'p',
			type: 'lines',
			customAnimation: (split) => {
				gsap.from(split.lines, {
					y: 30,
					duration: 1.5,
					ease: 'expo.out',
					stagger: 0.11,
					opacity: 0,
					delay: 1.2
				})
			}
		}
	], [])

	useSplitText(heroRef, splitText);

	useBackgroundParallax(heroRef);

	return (
		<section ref={heroRef} id="hero">
			<div className='bg-image-parallax bg-center' style={{backgroundImage: `var(--gradient),
                    url("/images/home-img.jpg")`}}>
			</div>
			<div className="section-container">
				<div className='flex flex-col gap-[clamp(10px,5vw,26px)] text-center items-center'>
					<h3>The untold story of</h3>
					<h1>togo</h1>
					<p>
						If you were lucky enough to know a great one, they never really leave. They stay with you as long as you live. Harnessed to your heart, giving their all.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;