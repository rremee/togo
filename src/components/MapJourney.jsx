import MapSVG from "./MapSVG.jsx";
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const MapJourney = () => {

	const containerRef = useRef(null);

	useGSAP(() => {
		const mapOutside = containerRef.current.querySelector('.map-outside'),
	        mapInside = containerRef.current.querySelector('.map-inside'),
	        mapLocations = containerRef.current.querySelectorAll('.map-location'),
	        mapCities = containerRef.current.querySelectorAll('.map-city'),
	        mapRoute = containerRef.current.querySelector('.map-route-mask');

		const getPathLength = (el) => el ? el.getTotalLength() : 0;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top 60%'
			}
		})

		const allPaths = [mapOutside, mapInside, mapRoute];

		allPaths.forEach((path) => {
			const length = getPathLength(path);
			gsap.set(path, {
				strokeDasharray: length,
				strokeDashoffset: length
			});
		});
		tl.to(mapOutside, { strokeDashoffset: 0, duration: 12, ease: 'power2.inOut' });
		tl.to(mapInside, { strokeDashoffset: 0, duration: 14, ease: 'power2.inOut' }, "-=11");

		mapCities.forEach((city) => {
			tl.from(city,{ opacity: 0, duration: 1, ease: 'power2.out' }, "-=11");
		});

		tl.from(mapLocations, {
			opacity: 0,
			scale: 0,
			transformOrigin: 'center',
			duration: 0.8,
			stagger: 0.2,
			ease: 'back.out(1.7)',
		}, "-=10.9");

		tl.to(mapRoute, { strokeDashoffset: 0, duration: 14, ease: 'power1.inOut' }, "-=10");


	}, {scope: containerRef});

	return (
		<div ref={containerRef} id='map-journey' className='section-margin w-full'>
			<div className='flex items-center justify-center'>
				<MapSVG />
			</div>
		</div>
	);
};

export default MapJourney;