import SocialMediaLinks from '../buttons/SocialMediaLinks'

function HeroSection() {
	return (
		<section className="min-h-screen p-9 flex flex-col gap-4">
			<div className="flex flex-col gap-3">
				<p className="font-semibold text-xl opacity-80">
					Olá! Eu sou
					<span className="text-blush-pink"> Thays Lima.</span>
				</p>

				<h1 className="text-5xl">front-end developer.</h1>

				<p className="text-sm font-semibold">
					Desenvolvo experiências intuitivas, criativas e acessíveis para a web.
				</p>
			</div>

			<div className="flex flex-col gap-3">
				<p className="text-sm mt-2 opacity-80">
					+1 ano de experiência //
					<br />
					habilidades em UX/UI //
					<br />
					pós-graduação em fullstack dev.
				</p>

				<SocialMediaLinks />
			</div>
		</section>
	)
}

export default HeroSection
