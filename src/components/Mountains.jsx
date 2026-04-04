import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Mountains = () => {

	const containerRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 2,
				invalidateOnRefresh: true,
				fastScrollEnd: true,
			}
		});
		const layers = containerRef.current.querySelectorAll('[data-speed]');

		layers.forEach(layer => {
			const speed = parseFloat(layer.dataset.speed);
			tl.to(layer, {
				yPercent: speed,
				ease: 'none',
				force3D: true,
			}, 0);
		});

	}, {scope: containerRef});

	return (
		<div ref={containerRef}
		     id='mountains'
		     className='
				        relative w-full section-margin z-2
						h-[40vw]
		                md:h-[38vw]
		                lg:h-[clamp(42svh,60svh+40vw,95svh)]'>
			<img data-speed='18' src="/images/mountains/mountains-back.svg" alt="Mountains" className='mountain-decor'/>
			<img data-speed='25' src="/images/mountains/mountains-mid-back.svg" alt="Mountains" className='mountain-decor'/>
			<img data-speed='33' src="/images/mountains/mountains-mid-front.svg" alt="Mountains" className='mountain-decor'/>
			<img data-speed='42' src="/images/mountains/mountains-front.svg" alt="Mountains" className='mountain-decor'/>
			<img data-speed='52' src="/images/mountains/forest.svg" alt="Forest" className='mountain-decor translate-y-4'/>
		</div>
	);
};

export default Mountains;