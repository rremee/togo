import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import {galleryPhotos} from "../constants/index.jsx";
import {useRef, useMemo} from "react";
import {useSplitText} from "../hooks/useSplitText.jsx";

const Gallery = () => {
	const containerRef = useRef(null);

	const splitText = useMemo(() => [
		{selector: 'p', type: 'lines'}
	], [])

	useSplitText(containerRef, splitText);

	useGSAP(() => {

		const images = containerRef.current.querySelectorAll(".gallery-item");

		images.forEach((img, index) => {

			const speed = (index % 2 + 1) * 50;
			const startOffset = index % 2 === 0 ? "top 95%" : "top 90%";

			gsap.fromTo(
				img,
				{
					y: speed,
					opacity: 0,
					scale: 0.7,
				},
				{
					y: -speed,
					opacity: 1,
					scale: 1.05,
					ease: 'none',
					scrollTrigger: {
						trigger: img,
						start: startOffset,
						end: 'center center',
						scrub: 1.2,
					},
				}
			);
		});

	}, {scope: containerRef})

	return (
		<div ref={containerRef} id='gallery'>
			<div className="max-w-390 w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-20">
				{galleryPhotos.map((item) => (
					<div
						key={item.id}
						className={
							`
								gallery-item relative col-span-1
								${item.colSpan || ''} 
								${item.colStart || ''}
								${item.mt || ''}
								${item.row || ''}
								${item.zIndex || ''}
							`
						}
					>
						<div className={`${item.rotate || ''}`}>
							<img
								src={item.src}
								alt='Gallery Photo'
								className="w-full h-auto object-cover"
							/>
						</div>
					</div>
				))}
			</div>
			<div className="section-container">
				<p className="typo max-w-86 mt-6 md:mt-11 justify-self-end">
					Seppala gives a touching <span className='text-primary'>goodbye</span> <br/> to his old friend Togo in Maine in 1929
				</p>
			</div>
		</div>
	);
};

export default Gallery;