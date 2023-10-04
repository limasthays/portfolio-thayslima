import clsx from 'clsx'
import { useEffect, useState } from 'react'

function MenuBar() {
	const sections = [
		{ title: 'home', link: '#', name: 'home' },
		{ title: 'projetos', link: '#projects', name: 'projects' },
		{ title: 'sobre mim', link: '#about', name: 'about' },
		{ title: 'skills', link: '#skills', name: 'skills' },
	]

	const [activeSection, setActiveSection] = useState<string>()

	useEffect(() => {
		const renderedSections = Array.from(
			document.getElementsByTagName('section')
		)

		function updateNavTextColor() {
			renderedSections.forEach((item) => {
				const sectionHeight = item.offsetHeight
				const sectionTop = item.offsetTop - 400
				const sectionId = item.id

				if (
					window.scrollY > sectionTop &&
					window.scrollY <= sectionTop + sectionHeight
				) {
					setActiveSection(sectionId)
				}
			})
		}

		updateNavTextColor()
		window.addEventListener('scroll', updateNavTextColor)
	}, [])

	return (
		<div className="flex justify-center">
			<nav className="fixed z-50 bottom-4 h-10 md:h-12 flex gap-2 md:gap-4 items-center px-4 md:px-6 text-off-white bg-deep-violet rounded-full">
				{sections.map((item) => (
					<a
						className={clsx('font-bold text-sm md:text-sm', {
							'text-blush-violet': activeSection === item.name,
						})}
						title={item.title}
						href={item.link}
						key={item.title}
					>
						{item.title}
					</a>
				))}
			</nav>
		</div>
	)
}

export default MenuBar
