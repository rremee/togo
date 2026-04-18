import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Cursor = ({isStart}) => {
	const cursorRef = useRef(null);
	const followerRef = useRef(null);

	useGSAP(() => {
		const xCursorTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" }),
			  yCursorTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });
		const xFollowerTo = gsap.quickTo(followerRef.current, "x", { duration: 0.4, ease: "power3" }),
			  yFollowerTo = gsap.quickTo(followerRef.current, "y", { duration: 0.4, ease: "power3" });

		const moveCursor = (e) => {
			xCursorTo(e.clientX);
			yCursorTo(e.clientY);
			xFollowerTo(e.clientX);
			yFollowerTo(e.clientY);
		};

		const onMouseEnter = () => {
			gsap.to(cursorRef.current, { scale: 1.5, duration: 0.3 });
			gsap.to(followerRef.current, { scale: 2, opacity: 0.4, duration: 0.3 });
		};

		const onMouseLeave = () => {
			gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
			gsap.to(followerRef.current, { scale: 1, opacity: 1, duration: 0.3 });
		};

		const handleMouseOver = (e) => {
			if (e.target.closest("button, canvas, a, .cursor-pointer")) onMouseEnter();
		};

		const handleMouseOut = (e) => {
			if (e.target.closest("button, canvas, a, .cursor-pointer")) onMouseLeave();
		};

		if (isStart) onMouseLeave();

		window.addEventListener("mousemove", moveCursor);
		window.addEventListener("mouseover", handleMouseOver);
		window.addEventListener("mouseout", handleMouseOut);

		return () => {
			window.removeEventListener("mousemove", moveCursor);
			window.removeEventListener("mouseover", handleMouseOver);
			window.removeEventListener("mouseout", handleMouseOut);
		};
	}, { dependencies: [isStart] });

	return (
		<>
			<div
				ref={cursorRef}
				className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
			/>

			<div
				ref={followerRef}
				className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference will-change-transform"
			/>
		</>
	);
};

export default Cursor;