import {useGSAP} from "@gsap/react";
import {useMemo, useRef} from "react";
import gsap from "gsap";
import {useSplitText} from "../hooks/useSplitText.jsx";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const WaterJourney = () => {
	return (
		<div id="water-journey section-margin">
			<WaterView/>
			<Waves/>
		</div>
	);
};

const WaterView = () => {

	const containerRef = useRef(null);

	const waterSVG = `
		<svg 
			width="272" 
			height="58" 
			viewBox="0 0 272 58" 
			fill="none" 
			xmlns="http://www.w3.org/2000/svg"
			class="md:w-62 w-42 h-auto absolute right-0 md:top-14 top-9 water">
			<path d="M9.00244 46.7388C12.6253 38.4282 21.049 29.9506 29.5897 26.529C37.1755 23.4899 43.5758 25.0555 51.0631 27.8263C57.7616 30.3051 63.5889 34.109 69.4007 38.1701C74.1071 41.4588 78.4219 46.9734 84.4321 47.8995C93.885 49.356 102.462 36.7349 108.564 31.3425C114.096 26.4539 122.6 24.1583 129.117 20.9986C134.912 18.189 140.077 19.5231 145.546 22.7738C150.548 25.7464 155.718 29.1422 160.305 32.708C163.951 35.5422 169.23 40.9468 174.041 41.8229C177.537 42.4594 180.673 43.0518 184.301 43.0518C187.296 43.0518 188.184 41.3394 189.72 38.887C192.326 34.7269 194.835 30.8432 198.037 27.0752C204.206 19.815 214.888 5.67772 226.225 9.73308C229.406 10.8709 232.253 13.7374 234.848 15.7755C240.901 20.5288 246.794 25.4781 252.913 30.1477C256.703 33.0398 259.712 35.4551 263.002 38.7504" 
			stroke="#BB421B" 
			stroke-width="18" 
			stroke-linecap="round"/>
		</svg>	
	`;

	const splitText = useMemo(() => [
		{selector: 'h3', type: 'lines'},
		{selector: 'p', type: 'lines'},
	], [])

	useSplitText(containerRef, splitText);

	useGSAP(() => {

		ScrollTrigger.create({
			trigger: 'h3',
			start: 'top 60%',
			onEnter: () => {
				const water = containerRef.current.querySelector('.water');

				if (water) {
					gsap.fromTo('.water',
						{
							strokeDasharray: '1000',
							strokeDashoffset: '1000',
						},
						{
							strokeDashoffset: '0',
							duration: 10,
							delay: .7,
							ease: 'power2.out',
						}
					);
				}
			}
		})

	}, {scope: containerRef});

	return (
		<div ref={containerRef} id="water-view">
			<div className="section-container">
				<h3 className='md:max-w-[90%]'>
					On the return trip across the Sound, the team became stranded on an ice floe. The quick-thinking Seppala tied a lead to Togo, his only hope, and tossed the dog across five feet of {' '}
					<span
						className='relative'
						dangerouslySetInnerHTML={{ __html: `water. ${waterSVG}` }}
					/>
				</h3>
				<p className='typo max-w-118 justify-self-end md:mt-38 mt-26'>
					Togo attempted to pull the floe supporting the sled, but the line snapped. Amazingly, the once-in-a-lifetime lead dog had the wherewithal to snatch the line from the water, roll it around his shoulders like a harness, and eventually pull his team to safety.
				</p>
			</div>
		</div>
	);
};

const Waves = () => {

	return (
		<div id='waves' className='section-margin w-screen'>
			<svg preserveAspectRatio="xMidYMid slice" viewBox="0 -50 1720 516" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-full h-[clamp(320px,50vw,800px)]'>
				<g>
					<path className='wave wave-1' d="M1469.15 0.0556198H1468.98C1333.09 66.6637 1152.73 66.6637 1016.84 0.0556198C880.96 66.6637 700.595 66.6637 564.71 0.0556198H564.543C428.658 66.6637 248.294 66.6637 112.409 0.0556198V0H112.297C61.5352 24.9085 4.60138 40.4764 -53.9448 46.7591V444.962H1720.4V49.4279C1633.11 53.3199 1544.32 36.918 1469.15 0.0556198Z" fill="url(#paint0_linear_314_12472)"/>
					<path className='wave wave-2' d="M1646.12 31.3027L1645.95 31.2471L1645.79 31.3027C1509.9 97.9108 1329.7 97.9108 1193.82 31.3027L1193.65 31.2471L1193.48 31.3027C1057.6 97.9108 877.234 97.9108 741.349 31.3027H741.183C605.298 97.9108 424.933 97.9108 289.048 31.3027C187.245 81.2865 60.4232 93.7408 -53.9448 68.8323V476.265H1720.4V59.9364C1694.66 52.3748 1669.69 42.8673 1646.12 31.3027Z" fill="url(#paint1_linear_314_12472)"/>
					<path className='wave wave-3' d="M1545.65 102.414L1545.48 102.358L1545.32 102.414C1409.43 169.022 1229.07 169.022 1093.18 102.414H1093.02C957.131 169.022 776.766 169.022 640.881 102.414C504.996 169.022 324.632 169.022 188.747 102.414H188.58C115.967 138.053 30.5663 154.622 -53.9448 152.12V547.376H1720.4V150.007C1658.91 144.336 1598.91 128.49 1545.65 102.414Z" fill="url(#paint2_linear_314_12472)"/>
					<path className='wave wave-4' d="M1338.43 162.128L1338.26 162.072L1338.1 162.128C1202.21 228.736 1021.85 228.736 885.964 162.128H885.797C749.912 228.736 569.547 228.736 433.662 162.128C297.777 228.736 117.413 228.736 -18.4724 162.128H-18.6392C-30.0927 167.743 -41.9353 172.859 -53.9448 177.529V607.09H1720.4V189.483C1596.64 226.957 1452.08 217.838 1338.43 162.128Z" fill="url(#paint3_linear_314_12472)"/>
					<path className='wave wave-5' d="M1560.72 227.513H1560.55C1424.67 294.121 1244.3 294.121 1108.42 227.513C972.532 294.121 792.168 294.121 656.283 227.513H656.116C520.231 294.121 339.866 294.121 203.981 227.513V227.457H203.815C126.754 265.209 35.4595 281.611 -54 276.551V672.475H1720.34V273.493C1664.19 266.766 1609.59 251.476 1560.72 227.513Z" fill="url(#paint4_linear_314_12472)"/>
					<path className='wave wave-6' d="M1285.39 258.815L1285.22 258.76L1285.06 258.815C1149.17 325.424 968.807 325.424 832.922 258.815H832.755C696.87 325.424 516.506 325.424 380.621 258.815C250.518 322.644 79.6054 325.257 -54 266.877V703.778H1720.34V266.655C1586.74 325.312 1415.72 322.699 1285.39 258.815Z" fill="url(#paint5_linear_314_12472)"/>
					<path className='wave wave-7' d="M1637.28 329.872L1637.11 329.816L1636.94 329.872C1501.06 396.48 1320.7 396.48 1184.81 329.872H1184.64C1048.76 396.48 868.394 396.48 732.509 329.872C596.624 396.48 416.26 396.48 280.375 329.872H280.208C180.963 378.521 58.088 391.587 -53.9448 369.236V774.834H1720.4V361.008C1691.49 353.168 1663.52 342.771 1637.28 329.872Z" fill="url(#paint6_linear_314_12472)"/>
					<path className='wave wave-8' d="M1430 389.585L1429.84 389.529L1429.67 389.585C1293.79 456.193 1113.42 456.193 977.536 389.585H977.369C841.484 456.193 661.119 456.193 525.234 389.585C389.349 456.193 208.985 456.193 73.0999 389.585H72.9331C33.6243 408.878 -9.40968 422.5 -53.9448 430.617V834.491H1720.4V435.732C1620.88 447.408 1516.46 432.007 1430 389.585Z" fill="url(#paint7_linear_314_12472)"/>
				</g>
				<defs>
					<linearGradient id="paint0_linear_314_12472" x1="833.238" y1="444.997" x2="833.238" y2="-0.00310332" gradientUnits="userSpaceOnUse">
						<stop offset="0.6139" stopColor="white"/>
						<stop offset="0.6811" stopColor="#FAFAFA"/>
						<stop offset="0.7626" stopColor="#EBEBEB"/>
						<stop offset="0.8515" stopColor="#D3D3D3"/>
						<stop offset="0.9449" stopColor="#B1B1B1"/>
						<stop offset="1" stopColor="#999999"/>
					</linearGradient>
					<linearGradient id="paint1_linear_314_12472" x1="833.238" y1="476.277" x2="833.238" y2="31.2759" gradientUnits="userSpaceOnUse">
						<stop offset="0.6139" stopColor="white"/>
						<stop offset="0.6811" stopColor="#FAFAFA"/>
						<stop offset="0.7626" stopColor="#EBEBEB"/>
						<stop offset="0.8515" stopColor="#D3D3D3"/>
						<stop offset="0.9449" stopColor="#B1B1B1"/>
						<stop offset="1" stopColor="#999999"/>
					</linearGradient>
					<linearGradient id="paint2_linear_314_12472" x1="833.238" y1="547.364" x2="833.238" y2="102.364" gradientUnits="userSpaceOnUse">
						<stop offset="0.6139" stopColor="white"/>
						<stop offset="0.6811" stopColor="#FAFAFA"/>
						<stop offset="0.7626" stopColor="#EBEBEB"/>
						<stop offset="0.8515" stopColor="#D3D3D3"/>
						<stop offset="0.9449" stopColor="#B1B1B1"/>
						<stop offset="1" stopColor="#999999"/>
					</linearGradient>
					<linearGradient id="paint3_linear_314_12472" x1="833.238" y1="607.079" x2="833.238" y2="162.078" gradientUnits="userSpaceOnUse">
						<stop offset="0.6139" stopColor="white"/>
						<stop offset="0.6811" stopColor="#FAFAFA"/>
						<stop offset="0.7626" stopColor="#EBEBEB"/>
						<stop offset="0.8515" stopColor="#D3D3D3"/>
						<stop offset="0.9449" stopColor="#B1B1B1"/>
						<stop offset="1" stopColor="#999999"/>
					</linearGradient>
					<linearGradient id="paint4_linear_314_12472" x1="833.239" y1="672.48" x2="833.239" y2="227.479" gradientUnits="userSpaceOnUse">
						<stop offset="0.6139" stopColor="white"/>
						<stop offset="0.6811" stopColor="#FAFAFA"/>
						<stop offset="0.7626" stopColor="#EBEBEB"/>
						<stop offset="0.8515" stopColor="#D3D3D3"/>
						<stop offset="0.9449" stopColor="#B1B1B1"/>
						<stop offset="1" stopColor="#999999"/>
					</linearGradient>
					<linearGradient id="paint5_linear_314_12472" x1="833.239" y1="703.759" x2="833.239" y2="258.759" gradientUnits="userSpaceOnUse">
						<stop offset="0.6139" stopColor="white"/>
						<stop offset="0.6811" stopColor="#FAFAFA"/>
						<stop offset="0.7626" stopColor="#EBEBEB"/>
						<stop offset="0.8515" stopColor="#D3D3D3"/>
						<stop offset="0.9449" stopColor="#B1B1B1"/>
						<stop offset="1" stopColor="#999999"/>
					</linearGradient>
					<linearGradient id="paint6_linear_314_12472" x1="833.238" y1="774.848" x2="833.238" y2="329.848" gradientUnits="userSpaceOnUse">
						<stop offset="0.6139" stopColor="white"/>
						<stop offset="0.6811" stopColor="#FAFAFA"/>
						<stop offset="0.7626" stopColor="#EBEBEB"/>
						<stop offset="0.8515" stopColor="#D3D3D3"/>
						<stop offset="0.9449" stopColor="#B1B1B1"/>
						<stop offset="1" stopColor="#999999"/>
					</linearGradient>
					<linearGradient id="paint7_linear_314_12472" x1="833.238" y1="834.561" x2="833.238" y2="389.561" gradientUnits="userSpaceOnUse">
						<stop offset="0.6139" stopColor="#C9C9C9"/>
						<stop offset="0.6811" stopColor="#C9C9C9"/>
						<stop offset="0.7626" stopColor="#C9C9C9"/>
						<stop offset="0.8515" stopColor="#C9C9C9"/>
						<stop offset="0.9449" stopColor="#B1B1B1"/>
						<stop offset="1" stopColor="#999999"/>
					</linearGradient>
					<clipPath id="clip0_314_12472">
						<rect width="1774" height="476" fill="white" transform="translate(-54)"/>
					</clipPath>
				</defs>
			</svg>
		</div>

	);
};

export default WaterJourney;