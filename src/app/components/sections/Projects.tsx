import SectionContainer from '../containers/SectionContainer'
import { projectsContent } from '@/app/content/projectsContent'
import ProjectCard from '../containers/ProjectCard'
import { nanoid } from 'nanoid'

function ProjectsSection() {
	return (
		<SectionContainer id="projects" sectionTitle="projetos" whiteVariant={true}>
			<div className="flex flex-col items-center md:items-start gap-6 md:justify-center">
				{projectsContent.map((item) => (
					<ProjectCard
						img={item.img}
						projectTags={item.projectTags}
						title={item.title}
						techs={item.techs}
						about={item.about}
						links={item.links}
						key={nanoid()}
					/>
				))}
			</div>
		</SectionContainer>
	)
}

export default ProjectsSection
