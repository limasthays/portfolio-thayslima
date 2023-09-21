import SocialMediaLinks from '../buttons/SocialMediaLinks'

function HeroSection() {
	return (
		<section className="min-h-screen p-9">
			<div className="flex flex-col gap-4">
				<p className="font-semibold text-xl">
					Olá! Eu sou
					<span className="text-blush-pink"> Thays Lima.</span>
				</p>
				<h1 className="text-5xl">front-end developer.</h1>

				<p>
					Desenvolvo experiências intuitivas, criativas e acessíveis para a web.
				</p>

				<p className="text-sm">
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
