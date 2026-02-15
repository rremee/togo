import {useRef , useEffect} from "react";
import gsap from 'gsap';

const BtnAudio = () => {

	const canvasRef = useRef(null);
	const audioRef = useRef(null);

	const settings = useRef({
		width: 0,
		height: 0,
		midY: 0,
		points: 80,
		stretch: 8,
		sinHeight: 0,
		speed: -0.04,
		strokeColor: '#EEE7E7',
		strokeWidth: 2,
		power: false
	})

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		const updateSizes = () => {
			const {offsetWidth, offsetHeight} = canvas;
			settings.current.width = offsetWidth;
			settings.current.height = offsetHeight;
			settings.current.midY = offsetHeight / 2;
			canvas.width = offsetWidth * 2;
			canvas.height = offsetHeight * 2;
			ctx.scale(2, 2);
		}

		updateSizes();

		let time = 0;
		let animationFrameId;

		const render = () => {
			const s = settings.current;
			ctx.clearRect(0, 0, s.width, s.height);
			time += 1;

			ctx.beginPath();
			ctx.strokeStyle = s.strokeColor;
			ctx.lineWidth = s.strokeWidth;
			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';

			let increment = 0;
			for (let i = 0; i < s.points; i++) {
				if (i < s.points / 2) {
					increment += 0.12;
				} else {
					increment -= 0.12;
				}

				const x = (s.width / s.points) * i;
				const y = s.midY + Math.sin(time * s.speed + i / s.stretch) * s.sinHeight * increment;
				ctx.lineTo(x, y);
			}

			ctx.stroke();

			animationFrameId = window.requestAnimationFrame(render);
		};

		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		}
	}, [])

	const handleToggle = () => {
		const s = settings.current;
		const audio = audioRef.current;

		s.power = !s.power;

		if (s.power) {
			audio.play();
			gsap.to(s, {
				duration: 1,
				sinHeight: 3,
				stretch: 6,
				ease: "power2.inOut"
			});
		} else {
			audio.pause();
			gsap.to(s, {
				duration: 1,
				sinHeight: 0,
				stretch: 10,
				ease: "power3.out"
			});
		}
	};

	return (
		<>
			<canvas ref={canvasRef} onClick={handleToggle} className='audio-btn'></canvas>
			<audio ref={audioRef} src="/audio/song.mp3" id='audio' loop></audio>
		</>
	);
};

export default BtnAudio;