function MenuBar() {
	const sections = [
		{ title: 'home', link: '#' },
		{ title: 'projetos', link: '#projects' },
		{ title: 'sobre mim', link: '#about' },
		{ title: 'skills', link: '#skills' },
	]

	return (
		<div className="flex justify-center">
			<nav className="fixed z-50 bottom-4 h-10 md:h-12 flex gap-2 md:gap-4 items-center px-4 md:px-6 text-off-white bg-very-deep-blue rounded-full">
				{sections.map((item) => (
					<a
						className="font-bold text-xs md:text-sm"
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
