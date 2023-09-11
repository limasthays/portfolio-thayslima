function MenuBar() {
	const sections = [
		{ title: 'home', link: '#' },
		{ title: 'projetos', link: '#projects' },
		{ title: 'sobre mim', link: '#about' },
		{ title: 'habilidades', link: '#skills' },
	]

	return (
		<div className="flex justify-center">
			<nav className="fixed bottom-4 h-10 flex gap-2 items-center px-4 text-off-white bg-very-deep-blue rounded-full">
				{sections.map((item) => (
					<a
						className="font-bold text-xs"
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
