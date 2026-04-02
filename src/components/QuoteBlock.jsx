import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {SplitText} from 'gsap/all';
import {useRef} from "react";

const QuoteBlock = ({quote, author}) => {

	const quoteRef = useRef(null);

	useGSAP(() => {

		const quoteTl = gsap.timeline({
			scrollTrigger: {
				trigger: quoteRef.current,
				start: 'top 80%',
			}
		});

		const splitHeader = new SplitText(
			quoteRef.current.querySelector('.quote-block h3'), {type: 'words'}
		)

		quoteTl
			.from('.quote-block img', {
				scale: 0,
				opacity: 0,
				duration: 0.8
			})
			.from(splitHeader.words, {
				y: 30,
				duration: 1.5,
				opacity: 0,
				stagger: 0.058
			}, '-=0.3')
			.from('.quote-block .quote', {
				opacity: 0,
				duration: 0.8
			}, '-=1');
	}, {scope: quoteRef})

	return (
		<>
			<div ref={quoteRef} className="max-w-150 flex flex-col gap-8 desktop:gap-10 quote-block">
				<div>
					<img src="/images/quote.svg" alt="Quote" className='w-[20%]'/>
				</div>
				<h3 className='md:max-w-[84%] max-w-full'>
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