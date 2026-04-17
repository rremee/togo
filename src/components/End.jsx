import {useRef, useMemo} from "react";
import useArrowReveal from "../hooks/useArrowReveal.jsx";
import {useSplitText} from "../hooks/useSplitText.jsx";

const End = () => {

	const containerRef = useRef(null);
	const arrowRef = useRef(null);

	useArrowReveal(containerRef, arrowRef, {x:40});

	const splitText = useMemo(() => [
		{selector: 'h2', type: 'words'},
		{selector: 'h3', type: 'chars'},
		{selector: 'p', type: 'lines'},
		{selector: 'ul:first-of-type li', type: 'lines'},
		{selector: '.contact-link', type: 'chars'},
		{selector: '.up', type: 'chars', options: {start: 'top 75%'}}
	], [])

	useSplitText(containerRef, splitText);

	return (
		<footer ref={containerRef} id="end" className='py-10 sm:py-18'>
			<div className="section-container">
				<div className='grid gap-y-9 grid-cols-1 sm:grid-cols-2 sm:gap-8.75'>
					<h2 className="col-span-4 col-start-1 row-start-1 text-[clamp(60px,24vw,244px)] sm:text-[clamp(60px,16vw,244px)]">
						end!
					</h2>
					<div className="col-span-6 col-start-1 row-start-2">
						<p className="typo text-primary">
							share the story
						</p>
						<ul className='mt-4 sm:mt-8 flex flex-wrap gap-2'>
							<li>
								<a className='share-link' href="">
									<span className='icon-instagram'></span>
								</a>
							</li>
							<li>
								<a className='share-link' href="">
									<span className='icon-facebook'></span>
								</a>
							</li>
							<li>
								<a className='share-link' href="">
									<span className='icon-telegram'></span>
								</a>
							</li>
							<li>
								<a className='share-link' href="">
									<span className='icon-linkedin'></span>
								</a>
							</li>
							<li>
								<a className='share-link' href="">
									<span className='icon-x-twitter'></span>
								</a>
							</li>
							<li>
								<a className='share-link' href="">
									<span className='icon-discord'></span>
								</a>
							</li>
						</ul>
					</div>
					<div className="row-start-3 sm:col-span-5 sm:col-start-10 sm:self-center sm:row-start-1">
						<h3 className='text-primary text-[clamp(20px,4vw,36px)]'>
							Anton Valkovskyi
						</h3>
						<p className="typo mt-2 sm:mt-3.5">
							design & layout
						</p>
					</div>
					<div className="row-start-4 sm:col-span-6 sm:col-start-10 sm:row-start-2 relative">
						<p className="typo text-nowrap">
							Let's make something awesome!
						</p>
						<ul className='mt-6 sm:mt-10 flex gap-[clamp(30px,12vw,88px)] sm:gap-x-21 sm:gap-y-8 flex-wrap'>
							<li>
								<a className='contact-link' href="">
									telegram
								</a>
							</li>
							<li>
								<a className='contact-link' href="">
									gmail
								</a>
							</li>
							<li>
								<a className='contact-link' href="">
									linkedin
								</a>
							</li>
						</ul>
						<img
							ref={arrowRef}
							src="/images/arrow-end.svg"
							alt="Arrow"
							className='absolute top-[-50%] right-[-10%] md:right-[-20%] desktop:!right-[-60%] 2xl:!right-[-80%] pointer-events-none
							w-[clamp(120px,38vw,260px)] sm:w-[clamp(120px,20vw,260px)]'/>
					</div>
				</div>
				<div className='justify-self-center mt-16 sm:mt-25'>
					<a className='uppercase font-bold text-social text-[clamp(30px,20vw,100px)] transition-colors duration-400 hover:text-light up' href="">
						Up
					</a>
				</div>
			</div>
		</footer>
	);
};

export default End;