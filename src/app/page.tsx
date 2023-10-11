'use client'

import Footer from './components/Footer'
import MenuBar from './components/MenuBar'
import AboutSection from './components/sections/About'
import HeroSection from './components/sections/Hero'
import ProjectsSection from './components/sections/Projects'
import SkillsSection from './components/sections/Skills'

export default function Home() {
	return (
		<>
			<main>
				<div className="noisy-bg"></div>
				<HeroSection />
				<ProjectsSection />
				<AboutSection />
				<SkillsSection />
				<Footer />
			</main>
			<MenuBar />
		</>
	)
}
