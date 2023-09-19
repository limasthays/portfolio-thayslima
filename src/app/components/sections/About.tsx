import SectionContainer from '../containers/SectionContainer'
import Image from 'next/image'
import Portrait from '../../assets/images/portrait.jpeg'
import SocialMediaLinks from '../buttons/SocialMediaLinks'

function AboutSection() {
	return (
		<SectionContainer id="about" sectionTitle="sobre mim">
			<div className="flex flex-col items-center gap-4">
				<div className="flex flex-col items-center gap-2">
					<Image
						src={Portrait}
						alt="my portrait, yay"
						className="grayscale rounded-2xl w-[80%]"
					/>

					<p className="font-bold text-lg text-blush-pink text-center">
						“I don&apos;t know where I&apos;m going from here, but I promise, it
						won&apos;t be boring”
						<br />— David Bowie
					</p>
				</div>

				<SocialMediaLinks />

				<p className="text-sm hyphens-auto">
					Oie! Eu sou Thays. Sou desenvolvedora Front-End, formada em Design
					Gráfico e pós-granduanda em Desenvolvimento Fullstack. Sou talentosa,
					criativa, comunicativa e estou sempre em busca de conhecimento. Trago
					para meu trabalho um ponto de vista voltado para a experiência do
					cliente (UX/UI) e outros conhecimentos de design gráfico que garantem
					interfaces funcionais, bem feitas e de bom gosto.
				</p>

				<hr className="border border-blush-pink w-[40%]" />

				<p className="text-sm hyphens-auto">
					Além de apaixonada pelo meu trabalho, adoro música alternativa, filmes
					antigos, ir em festas e tenho uma pequena obsessão com One Piece. 👒
					Sinta-se livre para conversar comigo sobre esses assuntos. :)
				</p>
			</div>
		</SectionContainer>
	)
}

export default AboutSection
