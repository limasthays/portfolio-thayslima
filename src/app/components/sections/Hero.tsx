import SocialMediaLinks from '../buttons/SocialMediaLinks'

function HeroSection() {
	return (
		<section className="min-h-screen p-9 flex lg:items-center lg:justify-center">
			<div className="flex flex-col lg:flex-row lg:justify-center lg:items-end gap-5 lg:gap-8">
				<div className="flex flex-col gap-3 lg:w-1/2">
					<p className="font-semibold text-lg lg:text-xl">
						Olá! Eu sou
						<span className="text-blush-violet"> Thays Lima.</span>
					</p>

					<h1 className="text-5xl md:text-7xl md:w-min">
						front-end developer.
					</h1>

					<p className="font-semibold">
						Desenvolvo experiências intuitivas, criativas e eficientes para a
						web.
					</p>
				</div>

				<div className="flex flex-col gap-3">
					<p className="text-sm lg:text-lg opacity-80">
						+1 ano de experiência //
						<br />
						habilidades em UX/UI //
						<br />
						pós-graduação em fullstack dev.
					</p>

					<SocialMediaLinks size="normal" />
				</div>
			</div>
		</section>
	)
}

export default HeroSection
