import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef, useMemo} from "react";
import {useSplitText} from "../hooks/useSplitText.jsx";
import useBackgroundParallax from "../hooks/useBackgroundParallax.jsx";

const FinalJourney = () => {

	const containerRef = useRef(null);

	useBackgroundParallax(containerRef);

	return (
		<div ref={containerRef} id='final-journey' className='section-margin relative overflow-hidden'>
			<div className='bg-image-parallax' style={{backgroundImage: `var(--gradient),
                    url("/images/great-race-final.png")`,
				backgroundPosition: 'top 6% right 20%'}}>
			</div>
		</div>
	);
};

export default FinalJourney;