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
		{selector: '.share-list li', type: 'lines'},
		{selector: '.contact-link', type: 'chars'},
		{selector: '.up', type: 'chars', options: {start: 'top 75%'}}
	], [])

	useSplitText(containerRef, splitText);

	const shareUrl = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : ''),
		  shareText = encodeURIComponent('Check out this awesome story about hero sled dog!'),
		  shareImage = encodeURIComponent('/images/great-race-intro-view.png');

	return (
		<footer ref={containerRef} id="end" className='py-10 sm:py-18 bg-end section-margin relative min-h-[740px]'>
			<img
				src="/images/ripped-end.svg"
				alt="Rip Paper"
				className='w-full absolute left-0 top-0 pointer-events-none z-10 translate-y-[-70%]'/>
			<div className="section-container">
				<div className='grid gap-y-9 grid-cols-1 sm:grid-cols-2 sm:gap-8.75'>
					<h2 className="col-span-4 col-start-1 row-start-1 text-[clamp(60px,24vw,244px)] sm:text-[clamp(60px,16vw,244px)]">
						end!
					</h2>
					<div className="col-span-6 col-start-1 row-start-2">
						<p className="typo text-primary">
							share the story
						</p>
						<ul className='share-list mt-4 sm:mt-8 flex flex-wrap gap-2'>
							<li>
								<a
									className='share-link'
									href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
									target="_blank"
									rel="noopener noreferrer">
									<span className='icon-whatsapp'></span>
								</a>
							</li>
							<li>
								<a
									className='share-link'
									href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
									target="_blank"
									rel="noopener noreferrer">
									<span className='icon-facebook'></span>
								</a>
							</li>
							<li>
								<a
									className='share-link'
									href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`}
									target="_blank"
									rel="noopener noreferrer">
									<span className='icon-telegram'></span>
								</a>
							</li>
							<li>
								<a
									className='share-link'
									href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
									target="_blank"
									rel="noopener noreferrer">
									<span className='icon-linkedin'></span>
								</a>
							</li>
							<li>
								<a
									className='share-link'
									href={`https://x.com/intent/post?url=${shareUrl}&text=${shareText}`}
									target="_blank"
									rel="noopener noreferrer">
									<span className='icon-x-twitter'></span>
								</a>
							</li>
							<li>
								<a
									className='share-link'
									href={`https://www.pinterest.com/pin/create/button/?url=${shareUrl}&media=${shareImage}&description=${shareText}`}
									target="_blank"
									rel="noopener noreferrer">
									<span className='icon-pinterest'></span>
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
								<a
									className='contact-link'
									href="https://t.me/reeemmeee"
									target={'_blank'}
									rel="noopener noreferrer">
									telegram
								</a>
							</li>
							<li>
								<a
									className='contact-link'
									href="mailto:u1remited@gmail.com">
									gmail
								</a>
							</li>
							<li>
								<a
									className='contact-link'
									href="https://www.linkedin.com/in/anton-valkovskyi-61a783184/"
									target={'_blank'}
									rel="noopener noreferrer">
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
					<button
						onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
						className='uppercase font-bold text-social text-[clamp(30px,20vw,100px)] transition-colors duration-400 hover:text-light up'>
						Up
					</button>
				</div>
			</div>
		</footer>
	);
};

export default End;