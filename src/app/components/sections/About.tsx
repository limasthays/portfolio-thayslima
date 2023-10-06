import SectionContainer from '../containers/SectionContainer'
import Image from 'next/image'
import Portrait from '../../assets/images/portrait.jpg'
import SocialMediaLinks from '../buttons/SocialMediaLinks'
import CopyMyEmail from '../CopyMyEmail'

function AboutSection() {
	return (
		<SectionContainer id="about" sectionTitle="sobre mim">
			<div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-center gap-4 lg:gap-8">
				<div className="flex flex-col items-center gap-3 lg:w-[20%] max-w-xs md:max-w-sm">
					<Image
						src={Portrait}
						alt="Retrato da desenvolvedora da página"
						className="rounded-2xl w-full"
					/>

					<p className="font-extrabold text-blush-violet md:text-lg text-center w-full">
						“I don&apos;t know where I&apos;m going from here, but I promise, it
						won&apos;t be boring”
						<br />
						<span className="font-normal text-off-white">— David Bowie</span>
					</p>
				</div>

				<div className="lg:w-[40%] flex flex-col gap-3">
					<SocialMediaLinks size="small" className="mx-auto md:mx-0" />
					<p className="text-sm md:text-base text-justify">
						Oie! Eu sou Thays, desenvolvedora web. Sou formada em Design
						Gráfico, em Desenvolvimento Web Front-end pela Kenzie Academy Brasil
						e pós-granduanda em Desenvolvimento Web Fullstack. Sou talentosa,
						criativa, comunicativa e estou sempre em busca de conhecimento.
						Trago para meu trabalho um ponto de vista voltado para a experiência
						do usuário (UX/UI) e outros conhecimentos de design gráfico que
						garantem interfaces funcionais, bem feitas e amigáveis para quem as
						usa.
					</p>
					<hr className="border border-blush-violet w-full" />

					<p className="text-sm md:text-base text-justify">
						Além de apaixonada pelo meu trabalho, adoro música alternativa,
						filmes antigos, ir em festas e tenho uma pequena obsessão com One
						Piece. 👒 Sinta-se livre para conversar comigo sobre esses assuntos.
						:)
					</p>

					<CopyMyEmail />
				</div>
			</div>
		</SectionContainer>
	)
}

export default AboutSection
