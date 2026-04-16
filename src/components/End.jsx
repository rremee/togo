
const End = () => {
	return (
		<footer id="end" className='py-18'>
			<div className="section-container">
				<div className='grid gap-4 grid-cols-1 md:grid-cols-6 desktop:grid-cols-12 gap-8.75'>
					<h2 className="col-span-4 col-start-1 row-start-1">
						end!
					</h2>
					<div className="col-span-4 col-start-1 row-start-2">
						<p className="typo text-primary">
							share the story
						</p>
						<ul className='mt-8 flex gap-x-2'>
							<li>
								<a className='share-link' href="">
									f
								</a>
							</li>
							<li>
								<a className='share-link' href="">
									f
								</a>
							</li>
							<li>
								<a className='share-link' href="">
									f
								</a>
							</li>
							<li>
								<a className='share-link' href="">
									f
								</a>
							</li>
							<li>
								<a className='share-link' href="">
									f
								</a>
							</li>
							<li>
								<a className='share-link' href="">
									f
								</a>
							</li>
						</ul>
					</div>
					<div className="col-span-4 col-start-9 self-center row-start-1">
						<h3 className='text-primary'>
							Anton Valkovskyi
						</h3>
						<p className="typo mt-3.5">
							design & layout
						</p>
					</div>
					<div className="col-span-4 col-start-9 row-start-2">
						<p className="typo">
							Let's make something awesome!
						</p>
						<ul className='mt-10 flex gap-x-21'>
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
					</div>
				</div>
				<div className='justify-self-center mt-25'>
					<a className='uppercase font-bold text-social text-[clamp(30px,30vw,100px)] transition-colors duration-400 hover:text-light' href="">
						Up
					</a>
				</div>
			</div>
		</footer>
	);
};

export default End;