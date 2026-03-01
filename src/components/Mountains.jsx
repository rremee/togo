import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Mountains = () => {

	const containerRef = useRef(null);

	useGSAP(() => {
		const layers = containerRef.current.querySelectorAll('[data-speed]');

		layers.forEach(layer => {
			const speed = parseFloat(layer.dataset.speed);

			gsap.to(layer,{
				yPercent: speed,
				ease: 'none',
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 0.2,
				}
			})
		})

	})

	return (

		<div ref={containerRef} id='mountains' className='relative w-full h-dvh section-margin'>
			<img data-speed='30' src="/images/mountains/mountains-back.svg" alt="Mountains" className='mountain-decor'/>
			<img data-speed='40' src="/images/mountains/mountains-mid-back.svg" alt="Mountains" className='mountain-decor'/>
			<img data-speed='50' src="/images/mountains/mountains-mid-front.svg" alt="Mountains" className='mountain-decor'/>
			<img data-speed='60' src="/images/mountains/mountains-front.svg" alt="Mountains" className='mountain-decor'/>
			<img data-speed='80' src="/images/mountains/forest.svg" alt="Forest" className='mountain-decor translate-y-2'/>
		</div>
	);
};

export default Mountains;