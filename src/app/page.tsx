import MenuBar from './components/MenuBar'
import AboutSection from './components/sections/About'
import HeroSection from './components/sections/Hero'
import ProjectsSection from './components/sections/Projects'
import SkillsSection from './components/sections/Skills'

export default function Home() {
	return (
		<>
			<main>
				<HeroSection />
				<ProjectsSection />
				<AboutSection />
				<SkillsSection />
			</main>
			<MenuBar />
		</>
	)
}
