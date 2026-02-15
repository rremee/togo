import BtnAudio from "./BtnAudio.jsx";

const Header = () => {
	return (
		<header id='header'>
			<div className="section-container">
				<div className="flex items-center justify-between">
					<a href="#hero">
						<img src="/images/logo.png" alt="logo"/>
					</a>
					<BtnAudio/>
				</div>
			</div>
		</header>
	);
};

export default Header;