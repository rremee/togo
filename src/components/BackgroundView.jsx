const BackgroundView = () => {
	return (
		<section id="backgroundview">
			<div className="pupppy-intro">
				<div className="flex flex-col items-center desktop:grid desktop:grid-cols-[1fr_600px_600px_1fr] w-full">

					<div className="w-full desktop:col-start-1 desktop:col-end-3 desktop:row-start-1">
						<img
							src="/images/background-1.png"
							alt="Puppy Togo"
							className="w-full h-auto object-cover"
						/>
					</div>

					<div className="px-6 mt-10 desktop:mt-0 desktop:col-start-3 desktop:row-start-1 desktop:self-end desktop:pb-12 md:pl-[clamp(20px,12vw,140px)] md:px-0">
						<p className="typo max-w-115">
							As a puppy, Togo's great future was not immediately apparent. He ran a bit small, and he had developed a painful disorder which caused his throat to swell. He spent his early days in the arms of Constance (Leonhard Seppala's wife), who applied hot rags to his throat to ease the pain.
						</p>
					</div>

					<div className="w-full px-6 desktop:px-0 mt-16 desktop:col-start-2 desktop:col-end-4 desktop:mt-32">
						<div className="flex flex-col gap-16 items-center desktop:flex-row desktop:justify-between desktop:gap-20">

							<div className="max-w-120">
								<p className="typo">
									And yet, in spite of the disorder, Togo became a troublesome and mischievous pup. Whenever Seppala would be out in the kennel yards, harnessing up a team, Togo would dash around nipping at the dogs, frustrating and distracting them.
								</p>
							</div>

							<div className="max-w-115 flex flex-col gap-10">
								<div>
									<img src="/images/quote.svg" alt="Quote"/>
								</div>
								<h3>
									Showing all the signs of becoming a canine delinquent
								</h3>
								<p className="quote">
									— One reporter wrote about Togo
								</p>
							</div>

						</div>
					</div>

				</div>
			</div>
			<div className="section-container">

				<div className='puppy-background'>

				</div>

				<div className='puppy-final'>

				</div>
			</div>
		</section>
	);
};

export default BackgroundView;