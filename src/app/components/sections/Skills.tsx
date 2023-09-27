import SectionContainer from '../containers/SectionContainer'
import { frontSkills, anotherSkills } from '../../content/skillsContent'
import SkillCard from '../containers/SkillCard'

function SkillsSection() {
	return (
		<SectionContainer id="skills" sectionTitle="skills">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-full lg:justify-center">
				<div className="flex flex-col">
					<h3>Tecnologias para front-end</h3>
					<div className="grid grid-cols-3 gap-2 w-max mx-auto">
						{frontSkills.map((item) => (
							<SkillCard icon={item.icon} title={item.title} key={item.title} />
						))}
					</div>
				</div>

				<div className="flex flex-col">
					<h3>Ferramentas adicionais</h3>
					<div className="grid grid-cols-3 gap-2 w-max mx-auto">
						{anotherSkills.map((item) => (
							<SkillCard icon={item.icon} title={item.title} key={item.title} />
						))}
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}

export default SkillsSection
