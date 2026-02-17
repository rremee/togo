import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const InfoScrolling = ({text}) => {

	const containerRef = useRef(null);

	useGSAP(() => {
		const container = containerRef.current;
		const items = container.querySelectorAll('.info-scroll-item p');

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: 'top top',
				end: `+=${items.length * 150}%`,
				scrub: 1,
				pin: true
			}
		});

		items.forEach((item) => {
			timeline
				.fromTo(item,
					{opacity: 0, y: 50},
					{opacity: 1, y: 0, duration: 1, ease: 'power1.out', delay: .5})
				.to(item, {opacity: 0, y: -50, duration: 1, ease: 'power1.out', delay: .7})
		})

	}, [text])

	return (
		<div>
			<div className="section-container">
				<div ref={containerRef} className="info-scrolling">
					{text.map((item, i) => (
						<div key={i} className="info-scroll-item">
							<p>
								{item}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default InfoScrolling;