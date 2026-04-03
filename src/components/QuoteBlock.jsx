import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {SplitText} from 'gsap/all';
import {useRef} from "react";

const QuoteBlock = ({quote, author, className = "max-w-150", headingClassName = ""}) => {

	const quoteRef = useRef(null);

	useGSAP(() => {

		const quoteTl = gsap.timeline({
			scrollTrigger: {
				trigger: quoteRef.current,
				start: 'top 80%',
			}
		});

		const splitHeader = new SplitText(
			quoteRef.current.querySelector('h3'), {type: 'words'}
		)

		quoteTl
			.from('img', {
				scale: 0,
				opacity: 0,
				duration: 0.8
			})
			.from(splitHeader.words, {
				y: 30,
				duration: 1,
				opacity: 0,
				stagger: 0.058
			}, '-=0.3')
			.from('.quote', {
				opacity: 0,
				duration: 1
			}, '-=.4');
	}, {scope: quoteRef})

	return (
		<>
			<div ref={quoteRef}
			     className={`flex flex-col gap-8 desktop:gap-10 quote-block ${className}`}>
				<div>
					<img src="/images/quote.svg" alt="Quote" className='w-[20%]'/>
				</div>
				<h3 className={`${headingClassName}`}>
					{quote}
				</h3>
				<p className="quote">
					— {author}
				</p>
			</div>
		</>
	);
};

export default QuoteBlock;