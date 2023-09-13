import SectionTitle from '../headings/SectionTitle'

type SectionContainerProps = {
	children: React.ReactNode
	id: string
	sectionTitle: string
}

function SectionContainer({
	children,
	id,
	sectionTitle,
}: SectionContainerProps) {
	return (
		<section className="min-h-screen px-6" id={id}>
			<SectionTitle title={sectionTitle} />
			{children}
		</section>
	)
}

export default SectionContainer
