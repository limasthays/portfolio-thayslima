type SectionContainerProps = {
	children: React.ReactNode,
	id: string
}


function SectionContainer({ children, id }: SectionContainerProps) {
	return <section className="min-h-screen p-9" id={id}>{children}</section>
}

export default SectionContainer
