import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";

const Hero = () => {

	useGSAP(() => {
		const splitTitle = SplitText.create('#hero h1', {type: 'chars, words'})
		const splitSubTitle = SplitText.create('#hero h3', {type: 'chars, words'})
		const splitParagraph = SplitText.create('#hero p', {type: 'lines'})

		gsap.to('.bg-image',{
			scrollTrigger: {
				trigger: "#hero",
				scrub: 1,
				start: "top top",
				end: "bottom top"
			},
			yPercent: -20,
			scale: 1.3,
			ease: "none"
		});


		gsap.from(splitTitle.chars, {
			yPercent: 40,
			duration: 1.5,
			ease: 'expo.Out',
			stagger: 0.04,
			opacity: 0
		})

		gsap.from(splitSubTitle.words, {
			yPercent: -20,
			duration: 1.5,
			ease: 'expo.Out',
			stagger: 0.06,
			opacity: 0,
			delay: .8
		})

		gsap.from(splitParagraph.lines, {
			yPercent: 20,
			duration: 1,
			ease: 'expo.Out',
			stagger: 0.11,
			opacity: 0,
			delay: 1.2
		})
	})

	return (
		<section id="hero">
			<div className='bg-image' style={{backgroundImage: `var(--gradient),
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