import SectionContainer from '../containers/SectionContainer'
import { frontSkills, anotherSkills } from '../../content/skillsContent'
import SkillCard from '../containers/SkillCard'

function SkillsSection() {
	return (
		<SectionContainer id="skills" sectionTitle="skills">
			<div className="flex flex-col gap-4">
				<h3>Tecnologias para front-end</h3>
				<div className="grid grid-cols-3 gap-2 w-max mx-auto">
					{frontSkills.map((item) => (
						<SkillCard icon={item.icon} title={item.title} key={item.title} />
					))}
				</div>

				<h3>Ferramentas adicionais</h3>
				<div className="grid grid-cols-3 gap-2 w-max mx-auto">
					{anotherSkills.map((item) => (
						<SkillCard icon={item.icon} title={item.title} key={item.title} />
					))}
				</div>
			</div>
		</SectionContainer>
	)
}

export default SkillsSection
