import SectionContainer from '../containers/SectionContainer'
import Image from 'next/image'
import Portrait from '../../assets/images/portrait.jpg'
import SocialMediaLinks from '../buttons/SocialMediaLinks'
import CopyMyEmail from '../CopyMyEmail'

function AboutSection() {
	return (
		<SectionContainer id="about" sectionTitle="sobre mim">
			<div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-center gap-4 lg:gap-8">
				<div className="flex flex-col items-center gap-3 lg:w-[30%]">
					<Image
						src={Portrait}
						alt="Retrato da desenvolvedora da página"
						className="rounded-2xl w-full max-w-sm"
					/>

					<p className="font-bold md:text-lg text-blush-pink text-center w-full max-w-sm">
						“I don&apos;t know where I&apos;m going from here, but I promise, it
						won&apos;t be boring”
						<br />
						<span className="font-normal text-off-white">— David Bowie</span>
					</p>
				</div>

				<div className="lg:w-[40%] flex flex-col gap-3">
					<SocialMediaLinks />
					<p className="text-sm lg:text-base text-justify">
						Oie! Eu sou Thays, desenvolvedora web. Sou formada em Design
						Gráfico, Desenvolvimento Web Front-end pela Kenzie Academy Brasil e
						pós-granduanda em Desenvolvimento Fullstack. Sou talentosa,
						criativa, comunicativa e estou sempre em busca de conhecimento.
						Trago para meu trabalho um ponto de vista voltado para a experiência
						do usuário (UX/UI) e outros conhecimentos de design gráfico que
						garantem interfaces funcionais, bem feitas e amigáveis para quem as
						usa.
					</p>
					<hr className="border border-blush-pink w-full" />

					<p className="text-sm lg:text-base text-justify">
						Além de apaixonada pelo meu trabalho, adoro música alternativa,
						filmes antigos, ir em festas e tenho uma pequena obsessão com One
						Piece. 👒 Sinta-se livre para conversar comigo sobre esses assuntos.
						:)
					</p>

					<div>
						<p className="font-semibold text-blush-pink">
							Me manda uma mensagem?
						</p>
						<CopyMyEmail />
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}

export default AboutSection
